/* ============================================
   SPEECH — Web Speech API
   Voz en español latinoamericano para niños
   ============================================ */

const VOICE_CONFIG = {
  lang:                   'es-MX',
  rateSyllable:           0.62,
  rateWord:               0.72,
  rateSentence:           0.80,
  pitch:                  1.1,
  pauseBetweenSyllables:  440,
  pauseBeforeFullWord:    680,
};

let _bestVoice      = null;
let _speechAvailable = false;
let _voicesLoaded   = false;

/* ── Inicialización con múltiples reintentos ── */
function initSpeech() {
  if (!('speechSynthesis' in window)) { _speechAvailable = false; return; }
  _speechAvailable = true;

  function tryPickVoice() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return false;
    _voicesLoaded = true;
    // Respetar preferencia guardada por el usuario
    const saved = localStorage.getItem('silabario_voice');
    if (saved) {
      const savedVoice = voices.find(v => v.name === saved);
      if (savedVoice) { _bestVoice = savedVoice; return true; }
    }
    _bestVoice = getBestSpanishVoice(voices);
    return true;
  }

  // Intento inmediato
  if (!tryPickVoice()) {
    // El evento estándar (Chrome/Edge lo dispara tarde)
    speechSynthesis.addEventListener('voiceschanged', () => tryPickVoice());

    // Reintentos con backoff: 100ms, 300ms, 700ms, 1.5s, 3s
    [100, 300, 700, 1500, 3000].forEach(ms =>
      setTimeout(() => { if (!_voicesLoaded) tryPickVoice(); }, ms)
    );
  }
}

/* ── Selección de la mejor voz española para niños ──
   Prioridad:
   1. Voces Online/Natural Microsoft LATAM (alta calidad, IA)
   2. Voces LATAM estándar (es-MX, es-CL, es-AR, es-CO, es-PE…)
   3. Voces con nombre LATAM conocido (Sabina, Paulina, Camila…)
   4. Cualquier español no-España
   5. Español de España como último recurso
*/
function getBestSpanishVoice(voices) {
  if (!voices) voices = speechSynthesis.getVoices();
  if (!voices.length) return null;

  const LATAM_LANGS  = ['es-MX','es-US','es-CL','es-AR','es-CO','es-PE','es-VE','es-419'];
  const LATAM_NAMES  = ['sabina','paulina','camila','valentina','lucia','jorge','carlos',
                        'diego','elena','rosa'];

  // 1. Microsoft Online Natural LATAM — la mejor calidad disponible
  const naturalLatam = voices.find(v =>
    LATAM_LANGS.some(l => v.lang === l) &&
    v.name.toLowerCase().includes('natural')
  );
  if (naturalLatam) return naturalLatam;

  // 2. Cualquier voz Microsoft/Google Online LATAM
  const onlineLatam = voices.find(v =>
    LATAM_LANGS.some(l => v.lang === l) &&
    (v.name.toLowerCase().includes('online') || !v.localService)
  );
  if (onlineLatam) return onlineLatam;

  // 3. Voz LATAM local (instalada en el sistema)
  for (const lang of LATAM_LANGS) {
    const v = voices.find(v => v.lang === lang);
    if (v) return v;
  }

  // 4. Voz con nombre latinoamericano conocido en cualquier dialecto es-*
  const byName = voices.find(v =>
    v.lang.startsWith('es') &&
    LATAM_NAMES.some(n => v.name.toLowerCase().includes(n))
  );
  if (byName) return byName;

  // 5. Cualquier español que no sea España
  const notSpain = voices.find(v => v.lang.startsWith('es') && v.lang !== 'es-ES');
  if (notSpain) return notSpain;

  // 6. Español de España como último recurso (mejor que inglés)
  const esES = voices.find(v => v.lang.startsWith('es'));
  if (esES) return esES;

  return null; // Sin voces españolas — el navegador decidirá
}

/* ── Núcleo de síntesis ── */
function _speak(text, rate, pitch) {
  return new Promise(resolve => {
    if (!_speechAvailable) { resolve(); return; }
    speechSynthesis.cancel();

    // Limpiar texto
    const clean = text
      .replace(/\|/g, ' ')
      .replace(/\s*-\s*/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    if (!clean) { resolve(); return; }

    // Si aún no tenemos voz, intentar de nuevo justo antes de hablar
    if (!_bestVoice && !_voicesLoaded) {
      _bestVoice = getBestSpanishVoice();
    }

    const utt = new SpeechSynthesisUtterance(clean);

    if (_bestVoice) {
      // Voz específica encontrada
      utt.voice = _bestVoice;
      utt.lang  = _bestVoice.lang;
    } else {
      // Sin voz específica: forzar español genérico
      // El navegador seleccionará la mejor voz española disponible
      utt.voice = null;
      utt.lang  = 'es';
    }

    utt.rate   = Math.max(0.1, Math.min(rate || VOICE_CONFIG.rateSyllable, 2));
    utt.pitch  = pitch != null ? pitch : VOICE_CONFIG.pitch;
    utt.volume = 1;

    // Workaround Chrome: corta utterances largas en background tab
    const resumeTimer = setInterval(() => {
      if (speechSynthesis.paused) speechSynthesis.resume();
    }, 8000);

    utt.onend = () => { clearInterval(resumeTimer); resolve(); };
    utt.onerror = (e) => {
      clearInterval(resumeTimer);
      // Si falló con voz específica, reintentar sin voz (solo lang)
      if (utt.voice) {
        const utt2 = new SpeechSynthesisUtterance(clean);
        utt2.lang   = 'es';
        utt2.rate   = utt.rate;
        utt2.pitch  = utt.pitch;
        utt2.volume = 1;
        utt2.onend  = resolve;
        utt2.onerror = resolve;
        speechSynthesis.speak(utt2);
      } else {
        resolve();
      }
    };

    speechSynthesis.speak(utt);
  });
}

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

/* ── API pública ── */
async function speakSyllable(syllable) {
  await _speak(syllable, VOICE_CONFIG.rateSyllable, VOICE_CONFIG.pitch);
}

async function speakWordWithParts(syllablesArray, fullWord) {
  if (!_speechAvailable) return;
  for (let i = 0; i < syllablesArray.length; i++) {
    await speakSyllable(syllablesArray[i]);
    await sleep(VOICE_CONFIG.pauseBetweenSyllables);
  }
  await sleep(VOICE_CONFIG.pauseBeforeFullWord);
  await _speak(fullWord, VOICE_CONFIG.rateWord, VOICE_CONFIG.pitch);
}

async function speakSentence(sentence) {
  const clean = sentence.replace(/\|/g, ' ').replace(/-/g, ' ').replace(/\s+/g, ' ').trim();
  await _speak(clean, VOICE_CONFIG.rateSentence, VOICE_CONFIG.pitch);
}

async function speakAllSyllables(syllablesArray) {
  for (let i = 0; i < syllablesArray.length; i++) {
    await speakSyllable(syllablesArray[i]);
    await sleep(VOICE_CONFIG.pauseBetweenSyllables + 100);
  }
}

async function speakInstruction(text) {
  await _speak(text, 0.82, 1.05);
}

function stopSpeech() {
  if (_speechAvailable) speechSynthesis.cancel();
}

function isSpeechAvailable() { return _speechAvailable; }

/* Permite que app.js establezca la voz manualmente */
function setPreferredVoice(voiceName) {
  if (!voiceName) return;
  const voices = speechSynthesis.getVoices();
  const found  = voices.find(v => v.name === voiceName);
  if (found) { _bestVoice = found; _voicesLoaded = true; }
}

/* ── Diagnóstico (útil para depuración) ── */
function getSpeechDiagnostics() {
  const voices = speechSynthesis.getVoices();
  return {
    available:    _speechAvailable,
    voicesLoaded: _voicesLoaded,
    bestVoice:    _bestVoice ? { name: _bestVoice.name, lang: _bestVoice.lang } : null,
    totalVoices:  voices.length,
    spanishVoices: voices
      .filter(v => v.lang.startsWith('es'))
      .map(v => ({ name: v.name, lang: v.lang, online: !v.localService })),
  };
}

/* ── Arrancar ── */
initSpeech();


/* ============================================
   AUDIO — AudioContext para efectos de sonido
   ============================================ */

let _audioCtx = null;

function getAudioCtx() {
  if (!_audioCtx) {
    try { _audioCtx = new (window.AudioContext || window.webkitAudioContext)(); }
    catch(e) { return null; }
  }
  if (_audioCtx.state === 'suspended') _audioCtx.resume();
  return _audioCtx;
}

function _playTone(freq, duration, type = 'sine', gain = 0.3, startTime = null) {
  const ctx = getAudioCtx();
  if (!ctx) return Promise.resolve();

  return new Promise(resolve => {
    const osc      = ctx.createOscillator();
    const gainNode = ctx.createGain();
    osc.connect(gainNode);
    gainNode.connect(ctx.destination);

    const start = startTime !== null ? startTime : ctx.currentTime;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, start);
    gainNode.gain.setValueAtTime(gain, start);
    gainNode.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.start(start);
    osc.stop(start + duration);
    osc.onended = resolve;
  });
}

function playCorrectSound() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const now = ctx.currentTime;
  _playTone(523, 0.15, 'sine', 0.25, now);
  _playTone(659, 0.15, 'sine', 0.25, now + 0.12);
  _playTone(784, 0.25, 'sine', 0.25, now + 0.24);
}

function playWrongSound() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const now = ctx.currentTime;
  _playTone(300, 0.12, 'square', 0.15, now);
  _playTone(250, 0.2,  'square', 0.10, now + 0.10);
}

function playCelebrationSound() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const now = ctx.currentTime;
  [523,587,659,784,880,1047].forEach((f,i) => _playTone(f, 0.15, 'sine', 0.2, now + i * 0.1));
}

function playStarSound() {
  const ctx = getAudioCtx(); if (!ctx) return;
  const now = ctx.currentTime;
  _playTone(880,  0.08, 'sine', 0.2, now);
  _playTone(1047, 0.08, 'sine', 0.2, now + 0.08);
  _playTone(1175, 0.2,  'sine', 0.2, now + 0.16);
}

function playClickSound() {
  const ctx = getAudioCtx(); if (!ctx) return;
  _playTone(600, 0.05, 'sine', 0.1, ctx.currentTime);
}


/* ============================================
   CONFETTI — Canvas API
   ============================================ */

function showConfetti(duration = 2500) {
  const canvas = document.getElementById('confetti-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  canvas.width  = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#E74C3C','#3498DB','#27AE60','#F1C40F','#E67E22','#9B59B6','#1ABC9C'];
  const particles = Array.from({ length: 80 }, () => ({
    x:        Math.random() * canvas.width,
    y:        -20,
    color:    colors[Math.floor(Math.random() * colors.length)],
    size:     6 + Math.random() * 8,
    speedY:   2 + Math.random() * 4,
    speedX:   (Math.random() - 0.5) * 3,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 6,
    shape:    Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  const start = performance.now();
  function frame(now) {
    const elapsed = now - start;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(p => {
      p.y += p.speedY;
      p.x += p.speedX;
      p.rotation += p.rotSpeed;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, 1 - elapsed / duration);
      if (p.shape === 'rect') {
        ctx.fillRect(-p.size/2, -p.size/4, p.size, p.size/2);
      } else {
        ctx.beginPath();
        ctx.arc(0, 0, p.size/2, 0, Math.PI*2);
        ctx.fill();
      }
      ctx.restore();
    });

    if (elapsed < duration) requestAnimationFrame(frame);
    else ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
  requestAnimationFrame(frame);
}
