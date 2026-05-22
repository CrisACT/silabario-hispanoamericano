/* ============================================
   APP — Inicialización y navegación
   ============================================ */

let _currentPage = 'home';

document.addEventListener('DOMContentLoaded', () => {
  loadProgress();
  initMascot(document.getElementById('mascot-wrapper'));
  renderHomePage();
  updateGlobalProgress();

  // Settings handlers
  document.getElementById('settings-btn')?.addEventListener('click', openSettings);
  document.getElementById('close-settings')?.addEventListener('click', closeSettings);
  document.getElementById('progress-fab')?.addEventListener('click', openProgressPage);
  document.getElementById('back-from-progress')?.addEventListener('click', goHome);

  // Profile modal
  document.getElementById('profile-save-btn')?.addEventListener('click', saveProfileFromModal);
  document.getElementById('modal-overlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Check if profile exists
  if (!hasProfile()) {
    setTimeout(() => openProfileModal(), 600);
  } else {
    renderWelcome();
  }

  // Avatar selection
  document.querySelectorAll('.avatar-option').forEach(opt => {
    opt.addEventListener('click', () => {
      document.querySelectorAll('.avatar-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });

  applySettings();
});

/* ── Pages ── */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(pageId)?.classList.add('active');
  _currentPage = pageId;
}

function goHome() {
  stopSpeech();
  showPage('home-page');
  renderHomePage();
  updateGlobalProgress();
}

/* ── Home Page ── */
function renderHomePage() {
  renderWelcome();
  renderLessonsGrid();
}

function renderWelcome() {
  const p = getProgress();
  const nameEl   = document.getElementById('welcome-name');
  const avatarEl = document.getElementById('welcome-avatar');

  if (nameEl) {
    nameEl.textContent = p.child.name
      ? `¡Hola, ${p.child.name}! 👋`
      : '¡Hola! ¿Cómo te llamas?';
  }
  if (avatarEl && p.child.name) {
    avatarEl.textContent = AVATARS[p.child.avatar] || '🐸';
  }

  const streakEl = document.getElementById('streak-count');
  if (streakEl) streakEl.textContent = `🔥 ${p.stats.currentStreak} días`;
}

function renderLessonsGrid() {
  const grid = document.getElementById('lessons-grid');
  if (!grid) return;

  grid.innerHTML = LESSONS.map(lesson => {
    const lp      = getLessonProgress(lesson.id);
    const locked  = !lp.unlocked;
    const done    = lp.completed;
    const stars   = lp.stars || 0;

    const starsHTML = `
      <div class="card-stars">
        ${[1,2,3].map(i => `<span class="card-star${i<=stars?' earned':''}">★</span>`).join('')}
      </div>`;

    const statusClass = locked ? 'locked' : done ? 'completed' : 'available';

    return `
      <div class="lesson-card ${statusClass}"
           style="color:${locked?'var(--color-locked)':lesson.color}"
           onclick="openLesson(${lesson.id})">
        ${locked ? '<div class="lock-overlay">🔒</div>' : ''}
        <div class="card-number">Lección ${lesson.id}</div>
        <div class="card-emoji">${lesson.mainEmoji}</div>
        <div class="card-title" style="color:${locked?'var(--color-text-light)':lesson.color}">${lesson.title}</div>
        ${starsHTML}
      </div>`;
  }).join('');
}

function updateGlobalProgress() {
  const { pct } = getTotalProgress();
  const fill = document.getElementById('global-progress-fill');
  if (fill) fill.style.width = `${pct}%`;
}

/* ── Profile modal ── */
function openProfileModal() {
  document.getElementById('modal-overlay')?.classList.add('active');
  const p = getProgress();
  const nameInput = document.getElementById('child-name-input');
  if (nameInput && p.child.name) nameInput.value = p.child.name;

  const selectedAvatar = p.child.avatar || 0;
  document.querySelectorAll('.avatar-option').forEach((opt, i) => {
    opt.classList.toggle('selected', i === selectedAvatar);
  });
}

function closeModal() {
  document.getElementById('modal-overlay')?.classList.remove('active');
}

function saveProfileFromModal() {
  const name = document.getElementById('child-name-input')?.value?.trim();
  if (!name) {
    document.getElementById('child-name-input')?.focus();
    return;
  }
  const selectedOpt = document.querySelector('.avatar-option.selected');
  const avatarIndex = selectedOpt
    ? [...document.querySelectorAll('.avatar-option')].indexOf(selectedOpt)
    : 0;

  saveProfile(name, avatarIndex);
  closeModal();
  renderWelcome();
  showMascotMessage(`¡Hola ${name}! ¡Vamos a leer! 📚`);
  speakInstruction(`¡Hola ${name}! Vamos a aprender a leer.`).catch(() => {});
}

/* ── Lesson Page ── */
function initLessonPage() {
  const tabs = document.querySelectorAll('.section-tab');
  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => renderSection(i));
  });
}

/* ── Progress Page ── */
function openProgressPage() {
  showPage('progress-page');
  renderProgressPage();
}

function renderProgressPage() {
  const p  = getProgress();
  const tp = getTotalProgress();

  const nameEl    = document.getElementById('prog-name');
  const avatarEl  = document.getElementById('prog-avatar');
  const statsEl   = document.getElementById('prog-stats');
  const barEl     = document.getElementById('prog-bar-fill');
  const pctEl     = document.getElementById('prog-pct');
  const trophyEl  = document.getElementById('prog-trophies');
  const lessonsEl = document.getElementById('prog-lessons');

  if (nameEl)   nameEl.textContent   = p.child.name || 'Sin nombre';
  if (avatarEl) avatarEl.textContent = AVATARS[p.child.avatar] || '🐸';
  if (barEl)    setTimeout(() => { barEl.style.width = `${tp.pct}%`; }, 100);
  if (pctEl)    pctEl.textContent    = `${tp.completed} / ${tp.total} lecciones (${tp.pct}%)`;

  if (statsEl) {
    const totalStars = Object.values(p.lessons).reduce((acc, lp) => acc + (lp.stars || 0), 0);
    statsEl.innerHTML = `
      <div class="stat-card">
        <div class="stat-value">🔥${p.stats.currentStreak}</div>
        <div class="stat-label">Días seguidos</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">📚${tp.completed}</div>
        <div class="stat-label">Lecciones</div>
      </div>
      <div class="stat-card">
        <div class="stat-value">⭐${totalStars}</div>
        <div class="stat-label">Estrellas</div>
      </div>
    `;
  }

  // Lesson breakdown grid
  if (lessonsEl) {
    lessonsEl.innerHTML = LESSONS.map(lesson => {
      const lp    = getLessonProgress(lesson.id);
      const stars = lp.stars || 0;
      const locked = !lp.unlocked;
      const done   = lp.completed;
      const cls    = locked ? 'lpi-locked' : done ? 'lpi-done' : 'lpi-available';
      const starsHTML = [1,2,3].map(i =>
        `<span class="lpi-star${i <= stars ? ' earned' : ''}">★</span>`
      ).join('');
      return `
        <div class="lesson-progress-item ${cls}" title="${lesson.title}" onclick="${!locked ? `openLesson(${lesson.id})` : ''}">
          <div class="lpi-num">${lesson.id}</div>
          <div class="lpi-emoji">${lesson.mainEmoji}</div>
          <div class="lpi-stars">${starsHTML}</div>
        </div>`;
    }).join('');
  }

  if (trophyEl) {
    trophyEl.innerHTML = TROPHIES.map(trophy => {
      const earned = p.stats.trophies.includes(trophy.id);
      return `
        <div class="trophy-card${earned?' earned':''}">
          <div class="trophy-icon">${trophy.icon}</div>
          <div class="trophy-info">
            <div class="trophy-name">${trophy.name}</div>
            <div class="trophy-desc">${trophy.desc}</div>
          </div>
        </div>`;
    }).join('');
  }
}

/* ── Settings ── */
function openSettings() {
  document.getElementById('settings-modal')?.classList.add('active');
  applySettingsUI();
  populateVoiceSelector();
  _updateSettingsProfile();
}

function _updateSettingsProfile() {
  const p = getProgress();
  const avatarEl = document.getElementById('settings-avatar');
  const nameEl   = document.getElementById('settings-name');
  if (avatarEl) avatarEl.textContent = AVATARS[p.child.avatar] || '🐸';
  if (nameEl)   nameEl.textContent   = p.child.name || 'Sin nombre';
}

function closeSettings() {
  document.getElementById('settings-modal')?.classList.remove('active');
}

function applySettingsUI() {
  const s = getSettings();
  document.querySelectorAll('[data-setting="speed"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === s.speed);
  });
  document.querySelectorAll('[data-setting="textsize"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === s.textsize);
  });
  document.querySelectorAll('[data-setting="theme"]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.val === s.theme);
  });
}

function setSetting(key, value) {
  const s = getSettings();
  s[key] = value;
  localStorage.setItem('silabario_settings', JSON.stringify(s));
  applySettings();
  applySettingsUI();
}

function getSettings() {
  try {
    return JSON.parse(localStorage.getItem('silabario_settings')) || {};
  } catch(e) { return {}; }
}

function applySettings() {
  const s = getSettings();

  // Theme
  document.documentElement.dataset.theme = s.theme === 'dark' ? 'dark' : '';

  // Text size
  document.documentElement.dataset.textsize = s.textsize || '';

  // Voice speed
  if (s.speed === 'fast') {
    VOICE_CONFIG.rateSyllable = 0.85;
    VOICE_CONFIG.rateWord     = 0.95;
    VOICE_CONFIG.rateSentence = 1.0;
    VOICE_CONFIG.pauseBetweenSyllables = 250;
  } else if (s.speed === 'slow') {
    VOICE_CONFIG.rateSyllable = 0.5;
    VOICE_CONFIG.rateWord     = 0.6;
    VOICE_CONFIG.rateSentence = 0.65;
    VOICE_CONFIG.pauseBetweenSyllables = 600;
  } else {
    VOICE_CONFIG.rateSyllable = 0.65;
    VOICE_CONFIG.rateWord     = 0.75;
    VOICE_CONFIG.rateSentence = 0.82;
    VOICE_CONFIG.pauseBetweenSyllables = 420;
  }
}

/* ── Selector de voz ── */
function populateVoiceSelector() {
  const sel    = document.getElementById('voice-selector');
  const status = document.getElementById('voice-status');
  const tip    = document.getElementById('voice-tip');
  if (!sel) return;

  const LATAM_LANGS = ['es-MX','es-US','es-CL','es-AR','es-CO','es-PE','es-VE','es-419'];
  const voices = speechSynthesis.getVoices();
  const spanishVoices = voices.filter(v => v.lang.startsWith('es'));

  if (!spanishVoices.length) {
    sel.innerHTML = '<option value="">— Sin voces en español instaladas —</option>';
    if (status) status.textContent = '⚠️ No se encontraron voces en español.';
    if (tip) {
      tip.innerHTML = `<strong>¿Cómo instalar voz en español?</strong><br>
        En Windows: <em>Inicio → Configuración → Hora e idioma → Idioma →
        Agregar idioma → Español (México)</em> e instala el paquete
        de <strong>Texto a voz</strong>. Reinicia el navegador.`;
      tip.classList.remove('hidden');
    }
    return;
  }

  // LATAM primero, España al final
  const latam   = spanishVoices.filter(v => LATAM_LANGS.includes(v.lang));
  const others  = spanishVoices.filter(v => !LATAM_LANGS.includes(v.lang));
  const ordered = [...latam, ...others];

  const savedName = localStorage.getItem('silabario_voice') || '';
  const activeName = savedName || (_bestVoice?.name) || '';

  sel.innerHTML = [
    latam.length  ? `<optgroup label="✅ Español Latinoamericano">` +
      latam.map(v => voiceOption(v, activeName)).join('') + `</optgroup>` : '',
    others.length ? `<optgroup label="🇪🇸 Español (España)">` +
      others.map(v => voiceOption(v, activeName)).join('') + `</optgroup>` : '',
  ].join('');

  if (savedName) setPreferredVoice(savedName);

  // Estado actual
  _updateVoiceStatus(status, tip, LATAM_LANGS);

  // Cambio manual
  sel.onchange = () => {
    const chosen = voices.find(v => v.name === sel.value);
    if (!chosen) return;
    setPreferredVoice(chosen.name);
    localStorage.setItem('silabario_voice', chosen.name);
    _updateVoiceStatus(status, tip, LATAM_LANGS);
  };
}

function voiceOption(v, activeName) {
  const online   = !v.localService ? ' 🌐' : '';
  const selected = v.name === activeName ? ' selected' : '';
  return `<option value="${v.name}"${selected}>${v.name}${online}</option>`;
}

function _updateVoiceStatus(status, tip, LATAM_LANGS) {
  if (!_bestVoice) {
    if (status) status.textContent = '⚠️ Ninguna voz seleccionada';
    return;
  }
  const isLatam = LATAM_LANGS.includes(_bestVoice.lang);
  const isOnline = !_bestVoice.localService;
  if (status) {
    status.textContent = isLatam
      ? `✅ ${_bestVoice.name}${isOnline ? ' (online, alta calidad)' : ''}`
      : `⚠️ ${_bestVoice.name} — Esta voz suena con acento de España`;
  }
  if (tip) {
    if (!isLatam) {
      tip.innerHTML = `<strong>💡 Tip:</strong> Esta voz suena con acento de España.
        Para acento latinoamericano, en Windows instala
        <strong>Español (México)</strong> desde
        <em>Configuración → Idioma → Agregar idioma</em> e instala
        el paquete de Texto a voz. Luego reabre el navegador.`;
      tip.classList.remove('hidden');
    } else {
      tip.classList.add('hidden');
    }
  }
}

function testSelectedVoice() {
  const frases = [
    'ma - má. Ma - má me a - ma.',
    'sa - la. La sa - la.',
    'pa - pa. El pa - pá.',
  ];
  const frase = frases[Math.floor(Math.random() * frases.length)];
  speakSentence(frase).catch(() => {});
}

function confirmReset() {
  if (confirm('¿Seguro que quieres borrar todo el progreso? Esta acción no se puede deshacer.')) {
    if (confirm('¿ESTÁS MUY SEGURO? Se borrarán todas las estrellas y trofeos.')) {
      resetProgress();
      closeSettings();
      goHome();
      openProfileModal();
    }
  }
}

// Expose global functions needed by inline onclick handlers
window.testSelectedVoice   = testSelectedVoice;
window.populateVoiceSelector = populateVoiceSelector;
window.openLesson       = openLesson;
window.renderSection    = renderSection;
window.tapSyllable      = tapSyllable;
window.listenAll        = listenAll;
window.toggleTips       = toggleTips;
window.tapPilarItem     = tapPilarItem;
window.tapRailWord      = tapRailWord;
window.listenRail       = listenRail;
window.startGameA       = startGameA;
window.startGameB       = startGameB;
window.startGameC       = startGameC;
window.playGameASound   = playGameASound;
window.checkGameAAnswer = checkGameAAnswer;
window.tapTileB         = tapTileB;
window.checkGameC       = checkGameC;
window.returnToGamesMenu= returnToGamesMenu;
window.replayGame       = replayGame;
window.goHome           = goHome;
window.setSetting       = setSetting;
window.confirmReset     = confirmReset;
window.openProgressPage = openProgressPage;

function playGameASound() {
  const btn = document.getElementById('play-sound-btn');
  const panel = document.querySelector('.game-choice-btn');
  if (panel) {
    const target = panel.dataset.target;
    if (target) {
      if (btn) btn.classList.add('playing');
      speakSyllable(target).then(() => {
        if (btn) btn.classList.remove('playing');
      });
    }
  }
}

// Init lesson page tabs after DOM
document.addEventListener('DOMContentLoaded', initLessonPage);
