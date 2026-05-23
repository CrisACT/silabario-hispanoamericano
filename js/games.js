/* ============================================
   JUEGOS — 3 Minijuegos interactivos
   ============================================ */

let _currentLesson = null;
let _currentGame   = null;
let _gameScore     = 0;
let _gameRound     = 0;
const ROUNDS_PER_GAME = 5;

function initGames(lesson) {
  _currentLesson = lesson;
}

/* ══════════════════════════════════════════
   JUEGO A — ¿Cuál suena así? (Auditivo)
══════════════════════════════════════════ */

function startGameA() {
  _currentGame = 'A';
  _gameScore   = 0;
  _gameRound   = 0;
  renderGameA();
}

function renderGameA() {
  const panel = document.getElementById('games-panel');
  if (!panel) return;

  const syllables = _getGameSyllables();
  panel.innerHTML = `
    <div class="game-screen active" id="game-a-screen">
      <div class="game-screen-title"><i class="fa-solid fa-headphones"></i> ¿Cuál suena así?</div>
      <div class="game-progress-dots" id="game-dots-a">
        ${Array.from({length:ROUNDS_PER_GAME},(_,i)=>`<div class="progress-dot${i===0?' current':''}"></div>`).join('')}
      </div>
      <div class="game-score-live" id="game-score-a">0 pts</div>
      <button class="play-sound-btn" id="play-sound-btn" onclick="playGameASound()"><i class="fa-solid fa-volume-high"></i></button>
      <div class="game-choices" id="game-choices"></div>
      <div style="height:20px"></div>
    </div>
  `;
  _setupGameARound(syllables);
}

function _setupGameARound(syllables) {
  const syl   = shuffle([...syllables]).slice(0, 3);
  const target = syl[Math.floor(Math.random() * syl.length)];
  const choices = document.getElementById('game-choices');
  const playBtn = document.getElementById('play-sound-btn');

  if (choices) {
    choices.innerHTML = syl.map(s => `
      <button class="game-choice-btn" data-syl="${s}" data-target="${target}"
              onclick="checkGameAAnswer(this,'${s}','${target}')">
        ${s.toUpperCase()}
      </button>`).join('');
  }

  if (playBtn) {
    playBtn.onclick = async () => {
      playBtn.classList.add('playing');
      await speakSyllable(target);
      playBtn.classList.remove('playing');
    };
    // Auto-play after short delay
    setTimeout(async () => {
      playBtn.classList.add('playing');
      await speakSyllable(target);
      playBtn.classList.remove('playing');
    }, 500);
  }

  _updateDots('game-dots-a');
}

async function checkGameAAnswer(btn, chosen, target) {
  const btns = document.querySelectorAll('.game-choice-btn');
  btns.forEach(b => b.disabled = true);

  if (chosen === target) {
    btn.classList.add('correct');
    playCorrectSound();
    mascotCelebrate();
    _gameScore += 20;
    _updateLiveScore('game-score-a');
    await new Promise(r => setTimeout(r, 800));
    _gameRound++;
    _advanceGame('A');
  } else {
    btn.classList.add('wrong');
    playWrongSound();
    mascotEncourage();
    // Highlight correct
    btns.forEach(b => { if (b.dataset.syl === target) b.classList.add('correct'); });
    await new Promise(r => setTimeout(r, 1200));
    btns.forEach(b => { b.classList.remove('wrong','correct'); b.disabled = false; });
    // Re-enable for retry
  }
}

/* ══════════════════════════════════════════
   JUEGO B — Arma la palabra
══════════════════════════════════════════ */

function startGameB() {
  _currentGame = 'B';
  _gameScore   = 0;
  _gameRound   = 0;
  renderGameB();
}

function renderGameB() {
  const panel = document.getElementById('games-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="game-screen active" id="game-b-screen">
      <div class="game-screen-title"><i class="fa-solid fa-puzzle-piece"></i> Arma la palabra</div>
      <div class="game-progress-dots" id="game-dots-b">
        ${Array.from({length:4},(_,i)=>`<div class="progress-dot${i===0?' current':''}"></div>`).join('')}
      </div>
      <div class="build-image" id="build-emoji"></div>
      <div class="word-slots" id="word-slots"></div>
      <div class="syllable-tiles" id="syllable-tiles"></div>
    </div>
  `;
  _setupGameBRound();
}

let _buildAnswer = [];
let _buildTarget = null;

function _setupGameBRound() {
  const words = _getGameWords(4);
  const word  = words[_gameRound % words.length];
  _buildTarget  = word;
  _buildAnswer  = [];

  const emojiEl  = document.getElementById('build-emoji');
  const slotsEl  = document.getElementById('word-slots');
  const tilesEl  = document.getElementById('syllable-tiles');

  if (emojiEl) {
    if (word.img) {
      emojiEl.innerHTML = `<img src="${word.img}" alt="${word.word}" class="game-word-img"
        onerror="this.outerHTML='<span>${word.emoji || '📖'}</span>'">`;
    } else {
      emojiEl.innerHTML = word.emoji || '<i class="fa-solid fa-book-open" style="font-size:0.5em"></i>';
    }
  }

  if (slotsEl) {
    slotsEl.innerHTML = word.syllables.map((_,i) => `
      <div class="word-slot" id="slot-${i}"></div>
    `).join('');
  }

  const allTiles = shuffle([...word.syllables, ...word.syllables.slice(0,1)]);

  if (tilesEl) {
    tilesEl.innerHTML = allTiles.map((s,i) => `
      <button class="syllable-tile" id="tile-${i}" onclick="tapTileB(this,'${s}')">
        ${s.toUpperCase()}
      </button>
    `).join('');
  }

  _updateDots('game-dots-b', 4);
}

async function tapTileB(btn, syl) {
  if (_buildAnswer.length >= _buildTarget.syllables.length) return;
  btn.classList.add('used');
  _buildAnswer.push(syl);

  const slotIndex = _buildAnswer.length - 1;
  const slot = document.getElementById(`slot-${slotIndex}`);
  if (slot) {
    slot.textContent = syl.toUpperCase();
    slot.classList.add('filled');
    await speakSyllable(syl);
  }

  if (_buildAnswer.length === _buildTarget.syllables.length) {
    await new Promise(r => setTimeout(r, 300));
    const correct = _buildAnswer.join('') === _buildTarget.syllables.join('');
    if (correct) {
      playCorrectSound();
      showConfetti(1500);
      mascotCelebrate();
      await speakWordWithParts(_buildTarget.syllables, _buildTarget.word);
      _gameScore += 25;
      _gameRound++;
      await new Promise(r => setTimeout(r, 1000));
      if (_gameRound < 4) {
        _setupGameBRound();
      } else {
        _showGameResult('B', Math.min(100, _gameScore));
      }
    } else {
      playWrongSound();
      mascotEncourage();
      // Reset
      await new Promise(r => setTimeout(r, 800));
      _buildAnswer = [];
      document.querySelectorAll('.word-slot').forEach(s => { s.textContent=''; s.classList.remove('filled'); });
      document.querySelectorAll('.syllable-tile').forEach(t => t.classList.remove('used'));
    }
  }
}

/* ══════════════════════════════════════════
   JUEGO C — Toca lo que escuchas
══════════════════════════════════════════ */

function startGameC() {
  _currentGame = 'C';
  _gameScore   = 0;
  _gameRound   = 0;
  renderGameC();
}

function renderGameC() {
  const panel = document.getElementById('games-panel');
  if (!panel) return;
  panel.innerHTML = `
    <div class="game-screen active" id="game-c-screen">
      <div class="game-screen-title"><i class="fa-solid fa-ear"></i> Toca lo que escuchas</div>
      <div class="game-progress-dots" id="game-dots-c">
        ${Array.from({length:ROUNDS_PER_GAME},(_,i)=>`<div class="progress-dot${i===0?' current':''}"></div>`).join('')}
      </div>
      <div class="game-score-live" id="game-score-c">0 pts</div>
      <div class="game-listen-hint">
        <button class="game-listen-again-btn" id="listen-again-btn" onclick="_replayGameC()"><i class="fa-solid fa-volume-high"></i> Escuchar de nuevo</button>
      </div>
      <div class="image-choices" id="image-choices"></div>
    </div>
  `;
  _setupGameCRound();
}

let _gameCTarget = null;

// Banco de palabras de reserva para Game C cuando la lección tiene pocas palabras
const _om = e => { try { const cp = [...e].map(c=>c.codePointAt(0)).filter(c=>c!==0xFE0F&&c!==0x20E3).map(c=>c.toString(16).toUpperCase()); return `https://openmoji.org/data/color/svg/${cp.join('-')}.svg`; } catch(_){return null;} };
const GAME_C_FALLBACK = [
  {word:"pato",   emoji:"🦆", img:_om("🦆")},
  {word:"sol",    emoji:"☀️", img:_om("☀️")},
  {word:"luna",   emoji:"🌙", img:_om("🌙")},
  {word:"gato",   emoji:"🐱", img:_om("🐱")},
  {word:"casa",   emoji:"🏠", img:_om("🏠")},
  {word:"perro",  emoji:"🐶", img:_om("🐶")},
  {word:"pez",    emoji:"🐟", img:_om("🐟")},
  {word:"flor",   emoji:"🌸", img:_om("🌸")},
  {word:"árbol",  emoji:"🌳", img:_om("🌳")},
  {word:"libro",  emoji:"📚", img:_om("📚")},
  {word:"pelota", emoji:"⚽", img:_om("⚽")},
  {word:"manzana",emoji:"🍎", img:_om("🍎")},
];

function _replayGameC() {
  if (_gameCTarget) {
    const btn = document.getElementById('listen-again-btn');
    if (btn) btn.classList.add('playing');
    speakSentence(_gameCTarget.word).then(() => {
      if (btn) btn.classList.remove('playing');
    });
  }
}

function _setupGameCRound() {
  // Reunir palabras con emoji o imagen de la lección + banco de reserva si hacen falta
  let wordsPool = _getGameWords(12).filter(w => w.emoji || w.img);
  if (wordsPool.length < 4) {
    const needed = GAME_C_FALLBACK.filter(
      f => !wordsPool.some(w => w.word === f.word)
    );
    wordsPool = [...wordsPool, ...needed];
  }
  const choices = shuffle(wordsPool).slice(0, 4);
  _gameCTarget = choices[Math.floor(Math.random() * choices.length)];

  const el = document.getElementById('image-choices');
  if (el) {
    el.innerHTML = choices.map(w => {
      const imgHtml = w.img
        ? `<img src="${w.img}" alt="${w.word}" class="choice-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
           <span class="choice-emoji" style="display:none">${w.emoji || '🖼️'}</span>`
        : `<span class="choice-emoji">${w.emoji || '🖼️'}</span>`;
      return `
        <button class="image-choice-btn" onclick="checkGameC(this,'${w.word}','${_gameCTarget.word}')">
          ${imgHtml}
          <span class="choice-label">${w.word}</span>
        </button>`;
    }).join('');
  }

  setTimeout(async () => {
    await speakSentence(_gameCTarget.word);
  }, 500);

  _updateDots('game-dots-c');
}

async function checkGameC(btn, chosen, target) {
  const btns = document.querySelectorAll('.image-choice-btn');
  btns.forEach(b => b.disabled = true);

  if (chosen === target) {
    btn.classList.add('correct');
    playCorrectSound();
    mascotCelebrate();
    _gameScore += 20;
    _updateLiveScore('game-score-c');
    await new Promise(r => setTimeout(r, 900));
    _gameRound++;
    _advanceGame('C');
  } else {
    btn.classList.add('wrong');
    playWrongSound();
    mascotEncourage();
    // Highlight correct answer
    btns.forEach(b => {
      if (b.getAttribute('onclick')?.includes(`'${target}'`)) b.classList.add('correct');
    });
    await new Promise(r => setTimeout(r, 1200));
    btns.forEach(b => { b.classList.remove('wrong','correct'); b.disabled = false; });
    setTimeout(async () => await speakSentence(_gameCTarget.word), 200);
  }
}

/* ══════════════════════════════════════════
   HELPERS COMUNES
══════════════════════════════════════════ */

function _getGameSyllables() {
  if (!_currentLesson) return ['a','e','i'];
  if (_currentLesson.board) {
    return [...(_currentLesson.board.top||[]), ...(_currentLesson.board.bottom||[])];
  }
  return ['a','e','i','o','u'];
}

function _getGameWords(n) {
  if (!_currentLesson) return [];
  const pool = [...(_currentLesson.gameWords || [])];
  while (pool.length < n) pool.push(...(_currentLesson.gameWords || []));
  return shuffle(pool).slice(0, n);
}

function _advanceGame(game) {
  const maxRounds = game === 'B' ? 4 : ROUNDS_PER_GAME;
  if (_gameRound >= maxRounds) {
    _showGameResult(game, Math.min(100, _gameScore));
  } else {
    if (game === 'A') _setupGameARound(_getGameSyllables());
    if (game === 'C') _setupGameCRound();
  }
}

function _updateLiveScore(elId) {
  const el = document.getElementById(elId);
  if (el) {
    el.textContent = `${_gameScore} pts`;
    el.classList.add('score-bump');
    setTimeout(() => el.classList.remove('score-bump'), 300);
  }
}

function _updateDots(containerId, max) {
  const total = max || ROUNDS_PER_GAME;
  const dots = document.querySelectorAll(`#${containerId} .progress-dot`);
  dots.forEach((d, i) => {
    d.classList.remove('done','current');
    if (i < _gameRound)     d.classList.add('done');
    if (i === _gameRound)   d.classList.add('current');
  });
}

function _showGameResult(game, score) {
  const panel = document.getElementById('games-panel');
  if (!panel) return;

  const stars = score >= 90 ? 3 : score >= 70 ? 2 : 1;
  const msgs  = ['¡Muy bien!','¡Excelente!','¡Perfecto! ⭐⭐⭐'];
  const msg   = msgs[Math.min(stars-1, 2)];

  panel.innerHTML = `
    <div class="game-result animate-fadein">
      <div class="game-result-icon">${game==='A'?'<i class="fa-solid fa-headphones"></i>':game==='B'?'<i class="fa-solid fa-puzzle-piece"></i>':'<i class="fa-solid fa-ear"></i>'}</div>
      <div class="result-stars">
        ${'⭐'.repeat(stars)}${'☆'.repeat(3-stars)}
      </div>
      <div class="result-message">${msg}</div>
      <div style="color:var(--color-text-light);font-size:0.95rem">Puntaje: ${score}%</div>
      <button class="btn btn-success btn-full mt-24" onclick="returnToGamesMenu()">
        <i class="fa-solid fa-arrow-left"></i> Volver a juegos
      </button>
      <button class="btn btn-primary btn-full mt-8" onclick="replayGame('${game}')">
        <i class="fa-solid fa-rotate"></i> Jugar de nuevo
      </button>
    </div>
  `;

  playCelebrationSound();
  if (stars === 3) showConfetti(2500);
  if (stars >= 2) playStarSound();
  mascotComplete();

  // Save score
  const gameIndex = {'A':0,'B':1,'C':2}[game];
  const newTrophies = saveGameScore(_currentLesson.id, gameIndex, score);
  if (newTrophies && newTrophies.length > 0) {
    newTrophies.forEach(t => showTrophyToast(t));
  }

  if (typeof onGameComplete === 'function') onGameComplete();
}

function returnToGamesMenu() {
  if (typeof renderGamesMenu === 'function') renderGamesMenu();
}

function replayGame(game) {
  if (game === 'A') startGameA();
  if (game === 'B') startGameB();
  if (game === 'C') startGameC();
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showTrophyToast(trophy) {
  let toast = document.getElementById('trophy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'trophy-toast';
    toast.className = 'trophy-toast';
    document.body.appendChild(toast);
  }
  toast.innerHTML = `${trophy.icon} ${trophy.name}`;
  toast.classList.add('show');
  playStarSound();
  setTimeout(() => toast.classList.remove('show'), 3500);
}
