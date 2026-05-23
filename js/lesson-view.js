/* ============================================
   LESSON VIEW — Renderizado de lecciones
   ============================================ */

let _activeLesson  = null;
let _activeSection = 0;

function openLesson(lessonId) {
  const lesson = LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;

  const lp = getLessonProgress(lessonId);
  if (!lp.unlocked) {
    showMascotMessage("¡Primero termina la lección anterior! 🔒");
    return;
  }

  _activeLesson  = lesson;
  _activeSection = 0;

  document.documentElement.style.setProperty('--lesson-color', lesson.color);
  document.documentElement.style.setProperty('--lesson-color-light', lesson.colorLight);

  showPage('lesson-page');
  renderLessonHeader(lesson);

  // Always start at section 0 (tablero) when opening a lesson
  renderSection(0);

  window.scrollTo(0, 0);
}

function renderLessonHeader(lesson) {
  const h = document.getElementById('lesson-header');
  if (!h) return;
  h.innerHTML = `
    <button class="back-btn" onclick="goHome()" aria-label="Volver"><i class="fa-solid fa-arrow-left"></i></button>
    <div class="lesson-header-info">
      <h1>${lesson.mainEmoji} ${lesson.title}</h1>
      <span>${lesson.subtitle}</span>
    </div>
    <div class="section-indicator" id="section-indicator">1 / 4</div>
  `;
}

function renderSection(index) {
  _activeSection = index;
  updateSectionTabs(index);
  updateSectionIndicator(index);

  document.querySelectorAll('.section-panel').forEach((p,i) => {
    p.classList.toggle('active', i === index);
  });

  const lesson = _activeLesson;
  switch(index) {
    case 0: renderTableroSection(lesson);   break;
    case 1: renderPilarSection(lesson);     break;
    case 2: renderRailsSection(lesson);     break;
    case 3: renderGamesSection(lesson);     break;
  }

  markSectionCompleted(lesson.id, index);
  playClickSound();
}

function updateSectionTabs(active) {
  document.querySelectorAll('.section-tab').forEach((t, i) => {
    t.classList.toggle('active', i === active);
  });
}

function updateSectionIndicator(index) {
  const el = document.getElementById('section-indicator');
  if (el) el.textContent = `${index+1} / 4`;
}

/* ── SECCIÓN 1: Tablero ── */
function renderTableroSection(lesson) {
  const panel = document.getElementById('tablero-panel');
  if (!panel) return;

  let boardHTML = '';

  if (lesson.type === 'vowels') {
    boardHTML = `
      <div class="vocales-board stagger-children">
        ${['a','e','i','o','u'].map(v => `
          <button class="vocal-btn" onclick="tapSyllable(this,'${v}')">${v.toUpperCase()}</button>
        `).join('')}
      </div>`;
  } else if (lesson.board) {
    const b = lesson.board;
    const topHTML    = (b.top||[]).map(s => `
      <button class="syllable-btn" onclick="tapSyllable(this,'${s}')">${s.toUpperCase()}</button>`).join('');
    const bottomHTML = (b.bottom||[]).map(s => `
      <button class="syllable-btn light" onclick="tapSyllable(this,'${s}')">${s.toUpperCase()}</button>`).join('');

    const centerHTML = b.letter
      ? `<div class="tablero-center-row">
           <div class="letter-center">${b.letter}</div>
         </div>`
      : '';

    const noteHTML = b.note
      ? `<div class="tablero-note">${b.note}</div>`
      : '';

    boardHTML = `
      <div class="tablero-board">
        <div class="tablero-row">${topHTML}</div>
        ${centerHTML}
        <div class="tablero-row">${bottomHTML}</div>
        ${noteHTML}
      </div>`;
  }

  const wordDisplay = (lesson.mainWord || '').split('-').map(s =>
    s === lesson.highlightSyllable
      ? `<span class="highlight-syllable">${s}</span>`
      : s
  ).join('-');

  const syllablesForListen = lesson.board
    ? [...(lesson.board.top||[]), ...(lesson.board.bottom||[])]
    : ['a','e','i','o','u'];

  // Referencia visual: imagen del libro si existe, emoji como fallback
  let referenceHTML;
  if (lesson.mainImg) {
    referenceHTML = `
      <div class="tablero-ref-with-image">
        <div class="tablero-ref-text">
          <div class="tablero-word">${wordDisplay}</div>
          ${lesson.mainEmoji ? `<div style="font-size:2.2rem;line-height:1">${lesson.mainEmoji}</div>` : ''}
        </div>
        <img src="${lesson.mainImg}"
             alt="${lesson.mainWord}"
             class="lesson-illustration lesson-main-image"
             onerror="this.parentElement.classList.add('no-img');this.style.display='none'">
      </div>`;
  } else {
    referenceHTML = `
      <div class="tablero-reference">
        <div class="tablero-emoji">${lesson.mainEmoji || '<i class="fa-solid fa-book-open" style="font-size:0.5em"></i>'}</div>
        <div class="tablero-word">${wordDisplay}</div>
      </div>`;
  }

  panel.innerHTML = `
    <div class="instruction-banner">
      <span class="instruction-icon"><i class="fa-solid fa-hand-pointer"></i></span>
      <span>Toca cada sílaba para escucharla</span>
    </div>
    <div class="tablero-container stagger-children">
      ${referenceHTML}
      ${boardHTML}
      <button class="listen-all-btn" id="listen-all-btn"
              onclick="listenAll()">
        <i class="fa-solid fa-volume-high"></i> ESCUCHAR TODO
      </button>
    </div>
    <div class="tips-panel hidden" id="tips-panel">
      <strong><i class="fa-solid fa-lightbulb"></i> Para el adulto:</strong> ${lesson.tips || 'Señale cada sílaba y diga su sonido.'}
    </div>
    <button class="btn btn-ghost btn-full mt-8" onclick="toggleTips()">
      <i class="fa-solid fa-circle-info"></i> Consejos para adultos
    </button>
  `;

  panel.dataset.syllables = JSON.stringify(syllablesForListen);
}

async function tapSyllable(btn, syl) {
  stopSpeech();
  document.querySelectorAll('.syllable-btn,.vocal-btn').forEach(b => b.classList.remove('playing'));
  btn.classList.add('playing');
  await speakSyllable(syl);
  btn.classList.remove('playing');
}

async function listenAll() {
  const btn   = document.getElementById('listen-all-btn');
  const panel = document.getElementById('tablero-panel');
  const syls  = JSON.parse(panel?.dataset?.syllables || '[]');
  if (!syls.length) return;

  stopSpeech();
  if (btn) btn.classList.add('playing');
  await speakAllSyllables(syls);
  if (btn) btn.classList.remove('playing');
}

function toggleTips() {
  const tips = document.getElementById('tips-panel');
  if (tips) tips.classList.toggle('hidden');
}

/* ── SECCIÓN 2: Pilar ── */
function renderPilarSection(lesson) {
  const panel = document.getElementById('pilar-panel');
  if (!panel) return;

  const items = lesson.pillar.map(item => {
    const wordHTML = item.syllables.map((s,i) => {
      const parts = [
        `<span class="pilar-syllable">${s.toUpperCase()}</span>`,
      ];
      if (i < item.syllables.length - 1) parts.push(`<span class="pilar-separator">-</span>`);
      return parts.join('');
    }).join('');

    // Visual: imagen del libro si existe, emoji como fallback
    let visualHTML = '';
    if (item.img) {
      visualHTML = `
        <div class="pilar-visual">
          <img src="${item.img}" alt="${item.word}"
               class="word-image lesson-illustration"
               onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <span class="pilar-emoji" style="display:none">${item.emoji || ''}</span>
        </div>`;
    } else if (item.emoji) {
      visualHTML = `<span class="pilar-emoji">${item.emoji}</span>`;
    }

    return `
      <li class="pilar-item${item.highlight?' highlight':''}"
          onclick="tapPilarItem(this,'${item.syllables.join(',')}','${item.word}','${item.emoji||''}')">
        <span class="pilar-number">${item.number}.</span>
        <div class="pilar-word-container">${wordHTML}</div>
        ${visualHTML}
        <button class="btn btn-ghost" style="padding:8px 12px;min-height:40px;box-shadow:none;font-size:1rem"
                onclick="event.stopPropagation();tapPilarItem(this.closest('.pilar-item'),'${item.syllables.join(',')}','${item.word}','${item.emoji||''}')">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </li>`;
  }).join('');

  panel.innerHTML = `
    <div class="instruction-banner">
      <span class="instruction-icon"><i class="fa-solid fa-book-open"></i></span>
      <span>Toca cada palabra para escucharla</span>
    </div>
    <ul class="pilar-list stagger-children">${items}</ul>
  `;
}

async function tapPilarItem(el, syllablesStr, word, emoji) {
  stopSpeech();
  document.querySelectorAll('.pilar-item').forEach(i => i.classList.remove('playing'));
  el.classList.add('playing');
  const syllables = syllablesStr.split(',');
  await speakWordWithParts(syllables, word);
  el.classList.remove('playing');
}

/* ── SECCIÓN 3: Rieles ── */
function renderRailsSection(lesson) {
  const panel = document.getElementById('rails-panel');
  if (!panel) return;

  const rails = lesson.rails.map((rail, ri) => {
    const wordsHTML = rail.words.map((w, wi) => {
      const isSep = w === '|';
      if (isSep) return `<span class="rail-word separator">|</span>`;
      const isUnderlined = rail.underlined?.includes(w);
      return `<span class="rail-word${isUnderlined?' underlined':''}"
                     onclick="tapRailWord(this,'${w}')">${w.toUpperCase()}</span>`;
    }).join('');

    return `
      <div class="rail-card animate-slideup">
        <div class="rail-text">${wordsHTML}</div>
        <button class="rail-listen-btn" id="rail-btn-${ri}"
                onclick="listenRail(${ri},'${rail.text.replace(/'/g,"\\'")}')">
          <i class="fa-solid fa-volume-high"></i> Escuchar frase
        </button>
      </div>`;
  }).join('');

  panel.innerHTML = `
    <div class="instruction-banner">
      <span class="instruction-icon"><i class="fa-solid fa-quote-right"></i></span>
      <span>Toca el altavoz para escuchar la frase</span>
    </div>
    <div class="rails-list">${rails}</div>
  `;
}

async function tapRailWord(el, word) {
  stopSpeech();
  document.querySelectorAll('.rail-word').forEach(w => w.classList.remove('playing'));
  el.classList.add('playing');
  await speakSentence(word);
  el.classList.remove('playing');
}

async function listenRail(index, text) {
  stopSpeech();
  const btn = document.getElementById(`rail-btn-${index}`);
  if (btn) btn.classList.add('playing');

  const words = document.querySelectorAll(`.rail-card:nth-child(${index+1}) .rail-word:not(.separator)`);
  for (const w of words) {
    w.classList.add('playing');
    await speakSentence(w.textContent);
    await new Promise(r => setTimeout(r, 100));
    w.classList.remove('playing');
  }

  if (btn) btn.classList.remove('playing');
}

/* ── SECCIÓN 4: Juegos ── */
function renderGamesSection(lesson) {
  const panel = document.getElementById('games-panel');
  if (!panel) return;

  initGames(lesson);
  renderGamesMenu();
}

function renderGamesMenu() {
  const panel = document.getElementById('games-panel');
  if (!panel) return;

  const lp = getLessonProgress(_activeLesson.id);
  const scores = lp.gameScores || [0, 0, 0];

  const games = [
    { id:'A', icon:'<i class="fa-solid fa-headphones"></i>', title:'¿Cuál suena así?',    desc:'Escucha la sílaba y toca la correcta',    color:'#3498DB', fn:'startGameA()' },
    { id:'B', icon:'<i class="fa-solid fa-puzzle-piece"></i>', title:'Arma la palabra',      desc:'Pon las sílabas en orden',                 color:'#27AE60', fn:'startGameB()' },
    { id:'C', icon:'<i class="fa-solid fa-ear"></i>', title:'Toca lo que escuchas', desc:'Escucha la palabra y toca la imagen',      color:'#E67E22', fn:'startGameC()' },
  ];

  panel.innerHTML = `
    <div class="instruction-banner">
      <span class="instruction-icon"><i class="fa-solid fa-gamepad"></i></span>
      <span>¡Elige un juego para practicar!</span>
    </div>
    <div class="games-menu stagger-children">
      ${games.map((g, i) => `
        <div class="game-card" style="--game-color:${g.color}" onclick="${g.fn}">
          <div class="game-icon-big">${g.icon}</div>
          <div class="game-info">
            <div class="game-title">${g.title}</div>
            <div class="game-desc">${g.desc}</div>
            ${scores[i] > 0 ? `<div style="color:var(--color-star);font-weight:700;margin-top:4px"><i class="fa-solid fa-star"></i> Mejor: ${scores[i]}%</div>` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function onGameComplete() {
  const lp = getLessonProgress(_activeLesson.id);
  if (lp.stars >= 1) {
    markSectionCompleted(_activeLesson.id, 3);
  }
}
