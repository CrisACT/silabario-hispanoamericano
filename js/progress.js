/* ============================================
   PROGRESS — Sistema de estrellas y progreso
   ============================================ */

const STORAGE_KEY = 'silabario_progress';

let _progress = null;

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      _progress = JSON.parse(raw);
      // Asegurar que existan todas las lecciones nuevas
      LESSONS.forEach(l => {
        if (!_progress.lessons[l.id]) {
          _progress.lessons[l.id] = {
            unlocked: l.id === 0,
            completed: false,
            stars: 0,
            sectionsCompleted: [false, false, false, false],
            gameScores: [0, 0, 0],
            lastPlayed: null,
            completedAt: null,
          };
        }
      });
    } else {
      _progress = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
    }
  } catch(e) {
    _progress = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
  }
  return _progress;
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(_progress));
  } catch(e) {}
}

function getProgress() {
  if (!_progress) loadProgress();
  return _progress;
}

function hasProfile() {
  const p = getProgress();
  return p.child && p.child.name && p.child.name.length > 0;
}

function saveProfile(name, avatar) {
  const p = getProgress();
  p.child.name = name;
  p.child.avatar = avatar;
  p.child.createdAt = p.child.createdAt || new Date().toISOString().split('T')[0];
  saveProgress();
}

function getLessonProgress(lessonId) {
  return getProgress().lessons[lessonId] || {};
}

function markSectionCompleted(lessonId, sectionIndex) {
  const p = getProgress();
  if (!p.lessons[lessonId]) return;
  p.lessons[lessonId].sectionsCompleted[sectionIndex] = true;
  p.lessons[lessonId].lastPlayed = new Date().toISOString().split('T')[0];
  _updateStars(lessonId);
  _updateStreak();
  saveProgress();
}

function saveGameScore(lessonId, gameIndex, score) {
  const p = getProgress();
  if (!p.lessons[lessonId]) return;
  const current = p.lessons[lessonId].gameScores[gameIndex] || 0;
  p.lessons[lessonId].gameScores[gameIndex] = Math.max(current, score);
  _updateStars(lessonId);
  saveProgress();
  return _checkNewTrophies();
}

function _updateStars(lessonId) {
  const p = getProgress();
  const lp = p.lessons[lessonId];
  if (!lp) return;

  const allSections = lp.sectionsCompleted.every(Boolean);
  const avgScore = lp.gameScores.length > 0
    ? lp.gameScores.reduce((a,b) => a+b, 0) / lp.gameScores.length
    : 0;

  let stars = 0;
  if (allSections) {
    stars = 1;
    lp.completed = true;
    // Unlock next lesson
    const nextLesson = LESSONS.find(l => l.id === lessonId + 1);
    if (nextLesson && p.lessons[nextLesson.id]) {
      p.lessons[nextLesson.id].unlocked = true;
    }
  }
  if (allSections && avgScore >= 70)  stars = 2;
  if (allSections && avgScore >= 90)  stars = 3;

  lp.stars = Math.max(lp.stars, stars);

  if (lp.completed && !lp.completedAt) {
    lp.completedAt = new Date().toISOString().split('T')[0];
    p.stats.wordsLearned += (LESSONS.find(l => l.id === lessonId)?.pillar?.length || 0);
  }
}

function _updateStreak() {
  const p = getProgress();
  const today = new Date().toISOString().split('T')[0];
  if (p.stats.lastPlayedDate === today) return;

  const yesterday = new Date(Date.now() - 864e5).toISOString().split('T')[0];
  if (p.stats.lastPlayedDate === yesterday) {
    p.stats.currentStreak++;
  } else if (p.stats.lastPlayedDate !== today) {
    p.stats.currentStreak = 1;
  }
  p.stats.lastPlayedDate = today;
  p.stats.totalDays++;
}

function _checkNewTrophies() {
  const p = getProgress();
  const newTrophies = [];
  TROPHIES.forEach(trophy => {
    if (!p.stats.trophies.includes(trophy.id) && trophy.condition(p)) {
      p.stats.trophies.push(trophy.id);
      newTrophies.push(trophy);
    }
  });
  saveProgress();
  return newTrophies;
}

function getTotalProgress() {
  const p = getProgress();
  const completed = Object.values(p.lessons).filter(l => l.completed).length;
  return { completed, total: LESSONS.length, pct: Math.round((completed / LESSONS.length) * 100) };
}

function resetProgress() {
  _progress = JSON.parse(JSON.stringify(DEFAULT_PROGRESS));
  saveProgress();
}

function getEarnedTrophies() {
  const p = getProgress();
  return TROPHIES.filter(t => p.stats.trophies.includes(t.id));
}
