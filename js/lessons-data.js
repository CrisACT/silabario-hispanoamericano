/* ============================================
   LESSONS DATA — puente entre SILABARIO_DATA e ILLUSTRATIONS
   Usa silabario-data.js como fuente de verdad del libro.
   ============================================ */

/* ----------- mapa de clave de ilustración por id de lección ----------- */
const ILLUS_KEY = {
   0: 'leccion_00_vocales',
   1: 'leccion_01_p',
   2: 'leccion_02_l',
   3: 'leccion_03_m',
   4: 'leccion_04_d',
   5: 'leccion_05_t',
   6: 'leccion_06_c',
   7: 'leccion_07_s',
   8: 'leccion_08_n',
   9: 'leccion_09_j',
  10: 'leccion_10_b',
  11: 'leccion_11_v',
  12: 'leccion_12_f',
  13: 'leccion_13_ll',
  14: 'leccion_14_ch',
  15: 'leccion_15_n',
  16: 'leccion_16_r',
  17: 'leccion_17_rr',
  18: 'leccion_18_R',
  19: 'leccion_19_z',
  20: 'leccion_20_terminaciones',
  21: 'leccion_21_l_final',
  22: 'leccion_22_r_ending',
  23: 'leccion_23_n_ending',
  24: 'leccion_24_m_ending',
  25: 'leccion_25_diptongos',
  26: 'leccion_26_ia_ie_io',
  27: 'leccion_27_ue_ua',
  28: 'leccion_28_y',
  29: 'leccion_29_ce_ci',
  30: 'leccion_30_g',
  31: 'leccion_31_mayusc',
  32: 'leccion_32_h',
  33: 'leccion_33_pl',
  34: 'leccion_34_bl',
  35: 'leccion_35_gl',
  36: 'leccion_36_fl',
  37: 'leccion_37_cl',
  38: 'leccion_38_pr',
  39: 'leccion_39_tr',
  40: 'leccion_40_br',
  41: 'leccion_41_cr',
  42: 'leccion_42_dr',
  43: 'leccion_43_fr',
  44: 'leccion_44_gr',
  45: 'leccion_45_k',
  46: 'leccion_46_x',
  47: 'leccion_47_pinguino',
};

/* Helper: obtener imagen de una palabra en una lección */
function getWordImg(lessonId, word) {
  const key = ILLUS_KEY[lessonId];
  if (!key || !ILLUSTRATIONS[key]) return null;
  return ILLUSTRATIONS[key].palabras?.[word] || null;
}

/* Helper: obtener imagen principal de una lección */
function getLessonMainImg(lessonId) {
  const key = ILLUS_KEY[lessonId];
  if (!key || !ILLUSTRATIONS[key]) return null;
  return ILLUSTRATIONS[key].main || null;
}

/* Helper: obtener imagen del tablero de una lección */
function getLessonBoardImg(lessonId) {
  const key = ILLUS_KEY[lessonId];
  if (!key || !ILLUSTRATIONS[key]) return null;
  return ILLUSTRATIONS[key].tablero || null;
}

/* Construir LESSONS combinando SILABARIO_DATA + ILLUSTRATIONS */
const LESSONS = SILABARIO_DATA.map(d => {
  // Normalizar pillar al formato que espera lesson-view.js
  const pillar = (d.pillar || []).map(item => ({
    number:    item.n,
    syllables: item.syllables,
    word:      item.word,
    emoji:     item.emoji || '',
    // Imagen del libro si existe, emoji como fallback
    img:       getWordImg(d.id, item.word),
    highlight: item.syllables.length > 2,
  }));

  // Normalizar rails
  const rails = (d.rails || []).map(rail => {
    const text = rail.text || '';
    // Extraer palabras (separadas por espacios o |)
    const words = text.split(/\s+/).filter(w => w.length > 0);
    return {
      text,
      words,
      underlined: (d.newWords || []),
    };
  });

  // Normalizar board
  let board = null;
  if (d.board) {
    const b = d.board;
    let top, bottom;
    if (b.custom && b.custom.length > 0) {
      // Lecciones especiales: terminaciones, diptongos, mayúsculas, etc.
      const mid = Math.round(b.custom.length / 2);
      top    = b.custom.slice(0, mid);
      bottom = b.custom.slice(mid);
    } else {
      top    = [b.topLeft, b.topRight].filter(Boolean);
      bottom = [b.bottomLeft, b.bottomCenter, b.bottomRight].filter(Boolean);
    }
    board = {
      // Usar b.letter (letra visual del tablero), no d.letter (clave interna)
      letter: b.letter ? b.letter.toUpperCase() : null,
      top,
      bottom,
      note: b.note || '',
    };
  }

  // gameWords: combinar pillar + palabras con emoji/img
  const gameWords = pillar
    .filter(p => p.emoji || p.img)
    .map(p => ({ word: p.word, syllables: p.syllables, emoji: p.emoji, img: p.img }));

  return {
    id:             d.id,
    title:          d.title,
    subtitle:       d.subtitle || (board ? board.top.concat(board.bottom).join(' - ') : ''),
    type:           d.type,
    letter:         d.letter,
    mainEmoji:      d.mainEmoji,
    mainWord:       d.mainWord,
    mainImg:        getLessonMainImg(d.id),
    boardImg:       getLessonBoardImg(d.id),
    color:          d.color,
    colorLight:     d.colorLight,
    board,
    pillar,
    rails,
    gameWords:      gameWords.length >= 2 ? gameWords : pillar.slice(0, 4).map(p => ({
      word: p.word, syllables: p.syllables, emoji: p.emoji, img: p.img,
    })),
    tips:           d.teacherNote || '',
    newWords:       d.newWords || [],
  };
});

/* ── Progreso por defecto ── */
const DEFAULT_PROGRESS = {
  version: "1.0",
  child: { name: "", avatar: 0, createdAt: null },
  lessons: {},
  stats: {
    totalDays: 0,
    currentStreak: 0,
    lastPlayedDate: null,
    wordsLearned: 0,
    trophies: [],
  },
};

LESSONS.forEach(lesson => {
  DEFAULT_PROGRESS.lessons[lesson.id] = {
    unlocked: lesson.id === 0,
    completed: false,
    stars: 0,
    sectionsCompleted: [false, false, false, false],
    gameScores: [0, 0, 0],
    lastPlayed: null,
    completedAt: null,
  };
});

/* ── Trofeos ── */
const TROPHIES = [
  { id:"vocalista",  icon:"🎤", name:"¡Vocalista!",          desc:"Completaste las vocales",          condition: p => p.lessons[0]?.completed },
  { id:"primeras",   icon:"⭐", name:"¡Mis primeras letras!", desc:"Completaste las lecciones 1-5",    condition: p => [1,2,3,4,5].every(i => p.lessons[i]?.completed) },
  { id:"basico",     icon:"📚", name:"¡Lector básico!",      desc:"Completaste las lecciones 1-10",   condition: p => [1,2,3,4,5,6,7,8,9,10].every(i => p.lessons[i]?.completed) },
  { id:"avanzado",   icon:"🏆", name:"¡Lector avanzado!",    desc:"¡Completaste todas las lecciones!", condition: p => LESSONS.every(l => p.lessons[l.id]?.completed) },
  { id:"perfecto",   icon:"🌟", name:"¡Perfeccionista!",     desc:"5 lecciones seguidas con 3 ⭐",    condition: p => {
    let count = 0, max = 0;
    LESSONS.forEach(l => { if (p.lessons[l.id]?.stars===3){count++;max=Math.max(max,count);}else count=0; });
    return max >= 5;
  }},
];

const ENCOURAGEMENTS = [
  "¡Muy bien! ¡Eres un campeón!",
  "¡Así se hace! ¡Sigue adelante!",
  "¡Lo lograste! ¡Eres increíble!",
  "¡Qué bien lees! ¡Sigue practicando!",
  "¡Un día más y serás un gran lector!",
  "¡Fantástico! ¡Cada día mejor!",
  "¡Eres una estrella del Silabario!",
];

const AVATARS = ["🐸","🦊","🐨","🐰","🦋","🐯"];
