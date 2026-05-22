/**
 * SILABARIO HISPANOAMERICANO — Adrián Dufflocq Galdames, 10ª Edición (1955)
 * Datos extraídos directamente del PDF original.
 *
 * Estructura de cada lección:
 * - id:               número de lección (0 = vocales)
 * - title:            nombre de la lección
 * - type:             "vowels" | "consonant" | "blend" | "ending" | "diphthong"
 * - letter:           letra o grupo nuevo que se introduce
 * - mainWord:         palabra imagen de referencia del libro (con guiones de sílabas)
 * - mainEmoji:        emoji representativo como imagen
 * - color:            color hex de la lección
 * - board:            tablero de sílabas (null para vocales)
 * - pillar:           lista numerada de palabras del "pilar"
 * - rails:            frases de los "rieles"
 * - newWords:         palabras nuevas/subrayadas que se destacan en la lección
 */

const SILABARIO_DATA = [

  // ══════════════════════════════════════════════════════
  // LECCIÓN 0 — LAS VOCALES
  // Página 9 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 0,
    title: "Las Vocales",
    subtitle: "¡Las letras que suenan solas!",
    type: "vowels",
    letter: null,
    mainWord: "a-la",
    mainEmoji: "🪶",
    color: "#E74C3C",
    colorLight: "#FADBD8",
    board: null, // Las vocales no tienen tablero de consonante
    pillar: [
      { n: 1,  word: "a",   syllables: ["a"],   emoji: "🦅" },
      { n: 2,  word: "e",   syllables: ["e"],   emoji: null },
      { n: 3,  word: "i",   syllables: ["i"],   emoji: null },
      { n: 4,  word: "o",   syllables: ["o"],   emoji: null },
      { n: 5,  word: "u",   syllables: ["u"],   emoji: "🍇" },
    ],
    rails: [
      { text: "a - e - i - o - u" },
      { text: "u - o - i - e - a" },
    ],
    newWords: [],
    teacherNote: "Enseñar cada vocal por su SONIDO puro, no por su nombre alfabético. La 'a' suena 'a', no 'a-a'. El niño debe reconocerlas visualmente y auditivamente.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 1 — LA P
  // Página 10 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 1,
    title: "La P",
    subtitle: "",
    type: "consonant",
    letter: "p",
    mainWord: "pi-pa",
    mainEmoji: "🪈",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "p",
      topLeft: "pa", topRight: "pe",
      bottomLeft: "pi", bottomCenter: "po", bottomRight: "pu",
    },
    pillar: [
      { n: 1,  word: "papa",  syllables: ["pa","pa"],  emoji: "🥔" },
      { n: 2,  word: "Pepe",  syllables: ["Pe","pe"],  emoji: "👦" },
      { n: 3,  word: "pipo",  syllables: ["pi","po"],  emoji: null },
      { n: 4,  word: "papá",  syllables: ["pa","pá"],  emoji: "👨" },
      { n: 5,  word: "pipa",  syllables: ["pi","pa"],  emoji: "🪈" },
    ],
    rails: [
      { text: "pa-pá  |  pío - pío  |  pú-a" },
    ],
    newWords: ["papa", "pipa", "Pepe", "papá"],
    teacherNote: "La consonante P no tiene nombre. Mostrarla solo en forma visual. El niño la reconoce por su forma. Nunca decir 'pe' aislado.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 2 — LA L
  // Página 11 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 2,
    title: "La L",
    subtitle: "",
    type: "consonant",
    letter: "l",
    mainWord: "a-la",
    mainEmoji: "🪽",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "l",
      topLeft: "la", topRight: "le",
      bottomLeft: "li", bottomCenter: "lo", bottomRight: "lu",
    },
    pillar: [
      { n: 1,  word: "la la",  syllables: ["la","la"],  emoji: null },
      { n: 2,  word: "le la",  syllables: ["le","la"],  emoji: null },
      { n: 3,  word: "li la",  syllables: ["li","la"],  emoji: null },
      { n: 4,  word: "lo la",  syllables: ["lo","la"],  emoji: null },
      { n: 5,  word: "lu la",  syllables: ["lu","la"],  emoji: null },
      { n: 6,  word: "palo",   syllables: ["pa","lo"],  emoji: "🪵" },
      { n: 7,  word: "pila",   syllables: ["pi","la"],  emoji: "🕯️" },
    ],
    rails: [
      { text: "a - la  |  pa - la" },
      { text: "pe - lo  |  pi - la" },
    ],
    newWords: ["ala", "pala", "pelo", "pila", "palo"],
    teacherNote: "El niño ya conoce todas las vocales y la P. Ahora con L puede armar muchas palabras nuevas por deducción propia.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 3 — LA M
  // Página 12 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 3,
    title: "La M",
    subtitle: "",
    type: "consonant",
    letter: "m",
    mainWord: "mu-la",
    mainEmoji: "🫏",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "m",
      topLeft: "ma", topRight: "me",
      bottomLeft: "mi", bottomCenter: "mo", bottomRight: "mu",
    },
    pillar: [
      { n: 1,  word: "mamá",    syllables: ["ma","má"],       emoji: "👩" },
      { n: 2,  word: "memo",    syllables: ["me","mo"],       emoji: null },
      { n: 3,  word: "mula",    syllables: ["mu","la"],       emoji: "🫏" },
      { n: 4,  word: "lima",    syllables: ["li","ma"],       emoji: "🔧" },
      { n: 5,  word: "mala",    syllables: ["ma","la"],       emoji: null },
      { n: 6,  word: "mapa",    syllables: ["ma","pa"],       emoji: "🗺️" },
      { n: 7,  word: "amapola", syllables: ["a","ma","po","la"], emoji: "🌺" },
      { n: 8,  word: "paloma",  syllables: ["pa","lo","ma"],  emoji: "🕊️" },
    ],
    rails: [
      { text: "a - mo   a   mi   ma - má" },
      { text: "a - mo   a   mi   pa - pá" },
    ],
    newWords: ["mula", "mamá", "lima", "mapa", "paloma", "amapola"],
    teacherNote: "Primera vez que aparecen frases con significado emocional: 'amo a mi mamá / amo a mi papá'. Momento especial para reforzar el vínculo.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 4 — LA D
  // Página 13 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 4,
    title: "La D",
    subtitle: "",
    type: "consonant",
    letter: "d",
    mainWord: "da-do",
    mainEmoji: "🎲",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "d",
      topLeft: "da", topRight: "de",
      bottomLeft: "di", bottomCenter: "do", bottomRight: "du",
    },
    pillar: [
      { n: 1,  word: "dado",    syllables: ["da","do"],      emoji: "🎲" },
      { n: 2,  word: "dedo",    syllables: ["de","do"],      emoji: "👆" },
      { n: 3,  word: "duda",    syllables: ["du","da"],      emoji: null },
      { n: 4,  word: "dime",    syllables: ["di","me"],      emoji: null },
      { n: 5,  word: "pelado",  syllables: ["pe","la","do"], emoji: null },
      { n: 6,  word: "peludo",  syllables: ["pe","lu","do"], emoji: "🐱" },
    ],
    rails: [
      { text: "la  pa-la  de  pe-pe" },
      { text: "la  li-ma  de  mi  pa-pá" },
      { text: "pe-pe  da-me  la  pa-la" },
      { text: "pa-pá  de-me  la  li-ma" },
    ],
    newWords: ["dado", "dedo", "lima", "pelado", "peludo"],
    teacherNote: "Aparece la palabra 'dedo' con imagen. El niño por primera vez lee frases con preposición 'de' y verbos simples 'dame', 'deme'.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 5 — LA T
  // Página 14 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 5,
    title: "La T",
    subtitle: "",
    type: "consonant",
    letter: "t",
    mainWord: "to-ma-te",
    mainEmoji: "🍅",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "t",
      topLeft: "ta", topRight: "te",
      bottomLeft: "ti", bottomCenter: "to", bottomRight: "tu",
    },
    pillar: [
      { n: 1,  word: "tapa",     syllables: ["ta","pa"],        emoji: "🪣" },
      { n: 2,  word: "tapita",   syllables: ["ta","pi","ta"],   emoji: null },
      { n: 3,  word: "pato",     syllables: ["pa","to"],        emoji: "🦆" },
      { n: 4,  word: "patito",   syllables: ["pa","ti","to"],   emoji: "🐥" },
      { n: 5,  word: "lata",     syllables: ["la","ta"],        emoji: "🥫" },
      { n: 6,  word: "latita",   syllables: ["la","ti","ta"],   emoji: null },
      { n: 7,  word: "tío",      syllables: ["tí","o"],         emoji: "👨" },
      { n: 8,  word: "tía",      syllables: ["tí","a"],         emoji: "👩" },
      { n: 9,  word: "pelota",   syllables: ["pe","lo","ta"],   emoji: "⚽" },
      { n: 10, word: "pelotita", syllables: ["pe","lo","ti","ta"], emoji: null },
    ],
    rails: [
      { text: "la  mu-la  de  mi  tí-o" },
      { text: "la  ma-le-ta  de  mi  tí-a" },
      { text: "la  pe-lo-ta  de  pe-pi-to" },
    ],
    newWords: ["tomate", "pato", "maleta", "pelota", "tío", "tía"],
    teacherNote: "Aparece el diptongo 'io' en tío/tía de forma natural. También 'maleta' con tres sílabas. La palabra imagen es 'tomate'.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 6 — LA C (ca, co, cu)
  // Página 15 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 6,
    title: "La C (ca, co, cu)",
    subtitle: "ca - co - cu",
    type: "consonant",
    letter: "c",
    mainWord: "ca-ma",
    mainEmoji: "🛏️",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "c",
      topLeft: "ca", topRight: "co",   // solo ca, co, cu (ce/ci vienen después)
      bottomLeft: "cu", bottomCenter: null, bottomRight: null,
      note: "Solo ca, co, cu en esta lección. ce y ci se ven en lección 29.",
    },
    pillar: [
      { n: 1,  word: "cama",    syllables: ["ca","ma"],        emoji: "🛏️" },
      { n: 2,  word: "camita",  syllables: ["ca","mi","ta"],   emoji: null },
      { n: 3,  word: "cola",    syllables: ["co","la"],        emoji: null },
      { n: 4,  word: "colita",  syllables: ["co","li","ta"],   emoji: null },
      { n: 5,  word: "copa",    syllables: ["co","pa"],        emoji: "🥂" },
      { n: 6,  word: "copita",  syllables: ["co","pi","ta"],   emoji: null },
      { n: 7,  word: "coco",    syllables: ["co","co"],        emoji: "🥥" },
      { n: 8,  word: "comida",  syllables: ["co","mi","da"],   emoji: "🍽️" },
      { n: 9,  word: "cucú",    syllables: ["cu","cú"],        emoji: "🕐" },
    ],
    rails: [
      { text: "co-la  pe-lu-da" },
      { text: "lo-li-ta  co-me  to-ma-te" },
      { text: "pe-pi-to  da-me  la  co-pa" },
      { text: "me  co-mo  to-da  la  co-mi-da" },
      { text: "mi  ma-má  ta-pa  la  ca-ma" },
    ],
    newWords: ["cama", "cola", "copa", "coco", "comida", "cucú"],
    teacherNote: "La C solo suena 'k' con a, o, u. Con e e i tiene otro sonido (se verá en lección 29). Imagen central: cama. También aparece el reloj cucú.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 7 — LA S
  // Página 16 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 7,
    title: "La S",
    subtitle: "",
    type: "consonant",
    letter: "s",
    mainWord: "sa-po",
    mainEmoji: "🐸",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "s",
      topLeft: "sa", topRight: "se",
      bottomLeft: "si", bottomCenter: "so", bottomRight: "su",
    },
    pillar: [
      { n: 2,  word: "oso",     syllables: ["o","so"],         emoji: "🐻" },
      { n: 3,  word: "osito",   syllables: ["o","si","to"],    emoji: "🧸" },
      { n: 4,  word: "sopa",    syllables: ["so","pa"],        emoji: "🥣" },
      { n: 5,  word: "sopita",  syllables: ["so","pi","ta"],   emoji: null },
      { n: 6,  word: "sapo",    syllables: ["sa","po"],        emoji: "🐸" },
      { n: 7,  word: "sapito",  syllables: ["sa","pi","to"],   emoji: null },
      { n: 8,  word: "casa",    syllables: ["ca","sa"],        emoji: "🏠" },
      { n: 9,  word: "casita",  syllables: ["ca","si","ta"],   emoji: null },
      { n: 10, word: "mesa",    syllables: ["me","sa"],        emoji: "🪑" },
      { n: 11, word: "mesita",  syllables: ["me","si","ta"],   emoji: null },
      { n: 12, word: "camisa",  syllables: ["ca","mi","sa"],   emoji: "👕" },
    ],
    rails: [
      { text: "la  so-pa  sa-la-da" },
      { text: "la  me-sa  se  ca-e" },
      { text: "la  ca-sa  de  mi  tí-o" },
      { text: "pe-pe  sa-lu-dó  a  su  tí-a" },
      { text: "e-se  sa-pi-to  sa-le  de  pa-se-o" },
    ],
    newWords: ["sapo", "sopa", "casa", "mesa", "camisa", "saludo", "paseo"],
    teacherNote: "Primera vez que aparece la S. El osito es imagen familiar para los niños. La palabra 'camisa' tiene 3 sílabas.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 8 — LA N
  // Página 17 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 8,
    title: "La N",
    subtitle: "",
    type: "consonant",
    letter: "n",
    mainWord: "ni-do",
    mainEmoji: "🪹",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "n",
      topLeft: "na", topRight: "ne",
      bottomLeft: "ni", bottomCenter: "no", bottomRight: "nu",
    },
    pillar: [
      { n: 1,  word: "mano",     syllables: ["ma","no"],        emoji: "✋" },
      { n: 2,  word: "manita",   syllables: ["ma","ni","ta"],   emoji: null },
      { n: 3,  word: "mono",     syllables: ["mo","no"],        emoji: "🐒" },
      { n: 4,  word: "monito",   syllables: ["mo","ni","to"],   emoji: null },
      { n: 5,  word: "luna",     syllables: ["lu","na"],        emoji: "🌙" },
      { n: 6,  word: "lunita",   syllables: ["lu","ni","ta"],   emoji: null },
      { n: 7,  word: "nido",     syllables: ["ni","do"],        emoji: "🪹" },
      { n: 8,  word: "nidito",   syllables: ["ni","di","to"],   emoji: null },
      { n: 9,  word: "pino",     syllables: ["pi","no"],        emoji: "🌲" },
      { n: 10, word: "camino",   syllables: ["ca","mi","no"],   emoji: "🛤️" },
      { n: 11, word: "canuto",   syllables: ["ca","nu","to"],   emoji: null },
    ],
    rails: [
      { text: "mo-no  pe-lu-do" },
      { text: "ni-do  de  pa-lo-ma" },
      { text: "la  ma-no  de  mi  ma-má" },
      { text: "la  cu-na  de  la  ne-na" },
      { text: "e-se  mo-no  se  co-me  to-da  su  co-mi-da" },
    ],
    newWords: ["nido", "mono", "mano", "luna", "pino", "camino", "cuna", "nena"],
    teacherNote: "Aparece 'nudo' como imagen secundaria. La frase larga final es un buen ejercicio de fluidez.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 9 — LA J
  // Página 18 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 9,
    title: "La J",
    subtitle: "",
    type: "consonant",
    letter: "j",
    mainWord: "o-jo",
    mainEmoji: "👁️",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "j",
      topLeft: "ja", topRight: "je",
      bottomLeft: "ji", bottomCenter: "jo", bottomRight: "ju",
    },
    pillar: [
      { n: 1,  word: "ojo",     syllables: ["o","jo"],         emoji: "👁️" },
      { n: 2,  word: "ajo",     syllables: ["a","jo"],         emoji: "🧄" },
      { n: 3,  word: "paja",    syllables: ["pa","ja"],        emoji: "🌾" },
      { n: 4,  word: "cojo",    syllables: ["co","jo"],        emoji: null },
      { n: 5,  word: "lija",    syllables: ["li","ja"],        emoji: null },
      { n: 6,  word: "teja",    syllables: ["te","ja"],        emoji: "🏠" },
      { n: 7,  word: "tejado",  syllables: ["te","ja","do"],   emoji: null },
      { n: 8,  word: "mojado",  syllables: ["mo","ja","do"],   emoji: null },
      { n: 9,  word: "conejo",  syllables: ["co","ne","jo"],   emoji: "🐰" },
      { n: 10, word: "tinaja",  syllables: ["ti","na","ja"],   emoji: "🏺" },
      { n: 11, word: "José",    syllables: ["Jo","sé"],        emoji: "👦" },
    ],
    rails: [
      { text: "mo-no  co-jo" },
      { text: "la  te-ja  se  mo-ja" },
      { text: "mi  co-ne-jo  no  co-me  a-jo" },
      { text: "Jo-sé  sa-ca  pa-ja  de  la  ca-ja" },
    ],
    newWords: ["ojo", "ajo", "conejo", "tinaja", "paja", "teja", "José"],
    teacherNote: "Imagen principal: ojo de lechuza. El niño aprende el sonido 'j' que es el mismo para ja, je, ji, jo, ju.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 10 — LA B
  // Página 19 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 10,
    title: "La B",
    subtitle: "",
    type: "consonant",
    letter: "b",
    mainWord: "bo-ta",
    mainEmoji: "👢",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "b",
      topLeft: "ba", topRight: "be",
      bottomLeft: "bi", bottomCenter: "bo", bottomRight: "bu",
    },
    pillar: [
      { n: 1,  word: "bota",    syllables: ["bo","ta"],        emoji: "👢" },
      { n: 2,  word: "bala",    syllables: ["ba","la"],        emoji: null },
      { n: 3,  word: "boca",    syllables: ["bo","ca"],        emoji: "👄" },
      { n: 4,  word: "nube",    syllables: ["nu","be"],        emoji: "☁️" },
      { n: 5,  word: "beso",    syllables: ["be","so"],        emoji: "💋" },
      { n: 6,  word: "abeja",   syllables: ["a","be","ja"],    emoji: "🐝" },
      { n: 7,  word: "bebida",  syllables: ["be","bi","da"],   emoji: "🥤" },
      { n: 8,  word: "dibujo",  syllables: ["di","bu","jo"],   emoji: "✏️" },
      { n: 9,  word: "bonito",  syllables: ["bo","ni","to"],   emoji: null },
      { n: 10, word: "abanico", syllables: ["a","ba","ni","co"], emoji: "🪭" },
    ],
    rails: [
      { text: "be-sé  a  mi  ma-má" },
      { text: "no  se  be-sa  la  bo-ca" },
      { text: "e-le-na  ba-jó  la  pe-lo-ta" },
      { text: "pe-pe  di-bu-jó  u-na  bo-ta" },
      { text: "a  Jo-sé  le  pi-có  u-na  a-be-ja" },
    ],
    newWords: ["bota", "boca", "beso", "abeja", "dibujo", "abanico", "bonito"],
    teacherNote: "También aparece 'bote' (lancha) y 'abanico' como imágenes. La abeja es imagen muy motivadora.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 11 — LA V
  // Página 20 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 11,
    title: "La V",
    subtitle: "",
    type: "consonant",
    letter: "v",
    mainWord: "va-ca",
    mainEmoji: "🐄",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "v",
      topLeft: "va", topRight: "ve",
      bottomLeft: "vi", bottomCenter: "vo", bottomRight: "vu",
    },
    pillar: [
      { n: 1,  word: "vaca",   syllables: ["va","ca"],        emoji: "🐄" },
      { n: 2,  word: "uva",    syllables: ["u","va"],         emoji: "🍇" },
      { n: 3,  word: "vela",   syllables: ["ve","la"],        emoji: "🕯️" },
      { n: 4,  word: "nave",   syllables: ["na","ve"],        emoji: "⛵" },
      { n: 5,  word: "vaso",   syllables: ["va","so"],        emoji: "🥛" },
      { n: 6,  word: "vino",   syllables: ["vi","no"],        emoji: "🍷" },
      { n: 7,  word: "pavo",   syllables: ["pa","vo"],        emoji: "🦃" },
      { n: 8,  word: "oveja",  syllables: ["o","ve","ja"],    emoji: "🐑" },
      { n: 9,  word: "navaja", syllables: ["na","va","ja"],   emoji: null },
    ],
    rails: [
      { text: "va-so  de  vi-no" },
      { text: "la-na  de  o-ve-ja" },
      { text: "su-bo  a  la  na-ve" },
      { text: "me  co-mí  to-da  la  u-va" },
      { text: "la  ve-la  se  a-ca-ba" },
      { text: "mi  pa-pá  se  be-be  u-na  co-pa  de  vi-no" },
    ],
    newWords: ["vaca", "vela", "nave", "vaso", "vino", "oveja", "navaja"],
    teacherNote: "En español latinoamericano B y V suenan igual. No es necesario explicar esto al niño, solo leer el sonido.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 12 — LA F
  // Página 21 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 12,
    title: "La F",
    subtitle: "",
    type: "consonant",
    letter: "f",
    mainWord: "fo-ca",
    mainEmoji: "🦭",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "f",
      topLeft: "fa", topRight: "fe",
      bottomLeft: "fi", bottomCenter: "fo", bottomRight: "fu",
    },
    pillar: [
      { n: 1,  word: "feo",       syllables: ["fe","o"],          emoji: null },
      { n: 2,  word: "sofá",      syllables: ["so","fá"],         emoji: "🛋️" },
      { n: 3,  word: "café",      syllables: ["ca","fé"],         emoji: "☕" },
      { n: 4,  word: "faja",      syllables: ["fa","ja"],         emoji: null },
      { n: 5,  word: "Jefe",      syllables: ["Je","fe"],         emoji: null },
      { n: 6,  word: "fila",      syllables: ["fi","la"],         emoji: null },
      { n: 7,  word: "Felipe",    syllables: ["Fe","li","pe"],    emoji: "👦" },
      { n: 8,  word: "fuma",      syllables: ["fu","ma"],         emoji: null },
      { n: 9,  word: "Filomena",  syllables: ["Fi","lo","me","na"], emoji: "👩" },
      { n: 10, word: "Felisa",    syllables: ["Fe","li","sa"],    emoji: "👩" },
    ],
    rails: [
      { text: "Fe-li-pe  fu-ma  la  pi-pa" },
      { text: "Fe-li-sa  to-ma  ca-fé" },
      { text: "Fi-lo-me-na  di-bu-jó  u-na  fo-ca  fe-a" },
    ],
    newWords: ["foca", "sofá", "teléfono", "café", "Felipe", "Filomena"],
    teacherNote: "También aparecen como imágenes: sofá y teléfono (de los años 50, antiguo). Felipe y Felisa son personajes recurrentes del libro.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 13 — LA LL
  // Página 22 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 13,
    title: "La LL",
    subtitle: "",
    type: "consonant",
    letter: "ll",
    mainWord: "lla-ve",
    mainEmoji: "🗝️",
    color: "#16A085",
    colorLight: "#D1F2EB",
    board: {
      letter: "ll",
      topLeft: "lla", topRight: "lle",
      bottomLeft: "lli", bottomCenter: "llo", bottomRight: "llu",
    },
    pillar: [
      { n: 1,  word: "silla",    syllables: ["si","lla"],        emoji: "🪑" },
      { n: 2,  word: "pollo",    syllables: ["po","llo"],        emoji: "🍗" },
      { n: 3,  word: "pollito",  syllables: ["po","lli","to"],   emoji: "🐥" },
      { n: 4,  word: "pellejo",  syllables: ["pe","lle","jo"],   emoji: null },
      { n: 5,  word: "calle",    syllables: ["ca","lle"],        emoji: "🛣️" },
      { n: 6,  word: "llave",    syllables: ["lla","ve"],        emoji: "🗝️" },
      { n: 7,  word: "caballo",  syllables: ["ca","ba","llo"],   emoji: "🐴" },
      { n: 8,  word: "anillo",   syllables: ["a","ni","llo"],    emoji: "💍" },
      { n: 9,  word: "botella",  syllables: ["bo","te","lla"],   emoji: "🍶" },
      { n: 10, word: "tobillo",  syllables: ["to","bi","llo"],   emoji: null },
    ],
    rails: [
      { text: "la  bo-te-lla  se  lle-nó" },
      { text: "la  lla-ma  de  la  ve-la" },
      { text: "mi  ca-ba-llo  se  pa-se-a" },
      { text: "Jo-sé  pi-lló  mi  ca-ba-llo" },
    ],
    newWords: ["llave", "silla", "pollo", "caballo", "anillo", "botella", "camello"],
    teacherNote: "La imagen secundaria es un camello. En Chile, LL y Y suenan igual (yeísmo). Imagen principal: llave.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 14 — LA CH
  // Página 23 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 14,
    title: "La CH",
    subtitle: "",
    type: "consonant",
    letter: "ch",
    mainWord: "chi-no",
    mainEmoji: "🧑",
    color: "#16A085",
    colorLight: "#D1F2EB",
    board: {
      letter: "ch",
      topLeft: "cha", topRight: "che",
      bottomLeft: "chi", bottomCenter: "cho", bottomRight: "chu",
    },
    pillar: [
      { n: 1,  word: "coche",     syllables: ["co","che"],         emoji: "🚗" },
      { n: 2,  word: "chapa",     syllables: ["cha","pa"],         emoji: null },
      { n: 3,  word: "noche",     syllables: ["no","che"],         emoji: "🌙" },
      { n: 4,  word: "leche",     syllables: ["le","che"],         emoji: "🥛" },
      { n: 5,  word: "chino",     syllables: ["chi","no"],         emoji: "🧑" },
      { n: 6,  word: "cacho",     syllables: ["ca","cho"],         emoji: null },
      { n: 7,  word: "chaleco",   syllables: ["cha","le","co"],    emoji: "🧥" },
      { n: 8,  word: "cuchillo",  syllables: ["cu","chi","llo"],   emoji: "🔪" },
      { n: 9,  word: "chocolate", syllables: ["cho","co","la","te"], emoji: "🍫" },
      { n: 10, word: "Chile",     syllables: ["Chi","le"],         emoji: "🇨🇱" },
    ],
    rails: [
      { text: "a-de-la  co-me  cho-co-la-te" },
      { text: "be-ni-to  se  pu-so  mi  cha-le-co" },
      { text: "Che-pi-ta  se  to-mó  to-da  la  le-che  de  la  bo-te-lla" },
    ],
    newWords: ["chocolate", "chaleco", "leche", "noche", "Chile", "cuchillo"],
    teacherNote: "La CH es considerada una sola letra en el español clásico. Imagen principal: persona con sombrero chino (imagen de época). También aparece cochecito.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 15 — LA Ñ
  // Página 24 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 15,
    title: "La Ñ",
    subtitle: "",
    type: "consonant",
    letter: "ñ",
    mainWord: "mu-ñe-ca",
    mainEmoji: "🪆",
    color: "#16A085",
    colorLight: "#D1F2EB",
    board: {
      letter: "ñ",
      topLeft: "ña", topRight: "ñe",
      bottomLeft: "ñi", bottomCenter: "ño", bottomRight: "ñu",
    },
    pillar: [
      { n: 1,  word: "uña",     syllables: ["u","ña"],          emoji: "💅" },
      { n: 2,  word: "año",     syllables: ["a","ño"],          emoji: "📅" },
      { n: 3,  word: "baño",    syllables: ["ba","ño"],         emoji: "🛁" },
      { n: 4,  word: "leña",    syllables: ["le","ña"],         emoji: "🪵" },
      { n: 5,  word: "caña",    syllables: ["ca","ña"],         emoji: "🎋" },
      { n: 6,  word: "piña",    syllables: ["pi","ña"],         emoji: "🍍" },
      { n: 7,  word: "niño",    syllables: ["ni","ño"],         emoji: "👦" },
      { n: 8,  word: "mañoso",  syllables: ["ma","ño","so"],    emoji: null },
      { n: 9,  word: "moño",    syllables: ["mo","ño"],         emoji: null },
      { n: 10, word: "muñeca",  syllables: ["mu","ñe","ca"],    emoji: "🪆" },
    ],
    rails: [
      { text: "la  ni-ña  se  ba-ña" },
      { text: "bo-ni-ta  la  pi-ña" },
      { text: "ni-ño  ma-ño-so" },
      { text: "cha-le-co  de  pa-ño" },
      { text: "Che-la,  to-ma  la  mu-ñe-ca" },
    ],
    newWords: ["muñeca", "piña", "niño", "baño", "leña", "caña"],
    teacherNote: "La Ñ es letra exclusiva del español. La muñeca (imagen principal) es muy motivadora para niñas. También aparece 'coco' de coquito.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 16 — LA R suave (intervocálica)
  // Página 25 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 16,
    title: "La R (suave)",
    subtitle: "r entre vocales",
    type: "consonant",
    letter: "r",
    mainWord: "lo-ro",
    mainEmoji: "🦜",
    color: "#E67E22",
    colorLight: "#FDEBD0",
    board: {
      letter: "r",
      topLeft: "ra", topRight: "re",
      bottomLeft: "ri", bottomCenter: "ro", bottomRight: "ru",
    },
    pillar: [
      { n: 1,  word: "pera",     syllables: ["pe","ra"],         emoji: "🍐" },
      { n: 2,  word: "aro",      syllables: ["a","ro"],          emoji: "⭕" },
      { n: 3,  word: "oro",      syllables: ["o","ro"],          emoji: "🥇" },
      { n: 4,  word: "loro",     syllables: ["lo","ro"],         emoji: "🦜" },
      { n: 5,  word: "toro",     syllables: ["to","ro"],         emoji: "🐂" },
      { n: 6,  word: "torero",   syllables: ["to","re","ro"],    emoji: null },
      { n: 7,  word: "cara",     syllables: ["ca","ra"],         emoji: "😊" },
      { n: 8,  word: "arena",    syllables: ["a","re","na"],     emoji: "🏖️" },
      { n: 9,  word: "araña",    syllables: ["a","ra","ña"],     emoji: "🕷️" },
      { n: 10, word: "salero",   syllables: ["sa","le","ro"],    emoji: "🧂" },
      { n: 11, word: "llavero",  syllables: ["lla","ve","ro"],   emoji: "🔑" },
      { n: 12, word: "sopera",   syllables: ["so","pe","ra"],    emoji: "🍲" },
    ],
    rails: [
      { text: "la  a-ra-ña  te-je  u-na  te-la" },
      { text: "co-mí  u-na  pe-ra  ma-du-ra" },
      { text: "e-se  lo-ro  me  mi-ra  mu-cho" },
      { text: "Pe-pe  pi-lló  u-na  ma-ri-po-sa  a-ma-ri-lla,  pe-ro  se  le  vo-ló.  Pe-pe  llo-ra." },
    ],
    newWords: ["loro", "pera", "araña", "mariposa", "arena", "llavero"],
    teacherNote: "La R suave va ENTRE vocales o después de consonante. La R fuerte (inicial de palabra o después de n, l, s) se verá como RR. Nombres: Perico, Sara, Sarita.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 17 — LA RR (r fuerte)
  // Página 26 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 17,
    title: "La RR",
    subtitle: "r fuerte",
    type: "consonant",
    letter: "rr",
    mainWord: "bu-rro",
    mainEmoji: "🫏",
    color: "#E67E22",
    colorLight: "#FDEBD0",
    board: {
      letter: "rr",
      topLeft: "rra", topRight: "rre",
      bottomLeft: "rri", bottomCenter: "rro", bottomRight: "rru",
    },
    pillar: [
      { n: 1,  word: "burro",    syllables: ["bu","rro"],         emoji: "🫏" },
      { n: 2,  word: "perro",    syllables: ["pe","rro"],         emoji: "🐕" },
      { n: 3,  word: "carro",    syllables: ["ca","rro"],         emoji: "🚗" },
      { n: 4,  word: "carreta",  syllables: ["ca","rre","ta"],    emoji: "🛒" },
      { n: 5,  word: "carrera",  syllables: ["ca","rre","ra"],    emoji: "🏃" },
      { n: 6,  word: "chorro",   syllables: ["cho","rro"],        emoji: "💧" },
      { n: 7,  word: "barro",    syllables: ["ba","rro"],         emoji: "🟫" },
      { n: 8,  word: "cacharro", syllables: ["ca","cha","rro"],   emoji: null },
      { n: 9,  word: "barrica",  syllables: ["ba","rri","ca"],    emoji: "🪣" },
      { n: 10, word: "serrucho", syllables: ["se","rru","cho"],   emoji: "🪚" },
    ],
    rails: [
      { text: "mi  bu-rro  a-ca-rre-a  le-ña  de  pi-no" },
      { text: "tu  pe-rro  ti-ra  e-se  ca-rri-to  de  ma-de-ra" },
      { text: "Pe-ri-co  lle-va  u-na  a-ra-ña  a-ma-rra-da  de  u-na  pa-ta" },
    ],
    newWords: ["burro", "perro", "carro", "carreta", "serrucho", "barrica"],
    teacherNote: "La RR solo existe entre vocales. Al inicio de palabra o después de n, l, s, la R sola ya suena fuerte. Contrastar con la R suave de la lección anterior.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 18 — R MAYÚSCULA (R inicial fuerte)
  // Página 27 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 18,
    title: "La R (inicio)",
    subtitle: "R al principio de palabra",
    type: "consonant",
    letter: "R",
    mainWord: "Re-mo-li-no",
    mainEmoji: "🌀",
    color: "#E67E22",
    colorLight: "#FDEBD0",
    board: {
      letter: "R",
      topLeft: "Ra", topRight: "Re",
      bottomLeft: "Ri", bottomCenter: "Ro", bottomRight: "Ru",
    },
    pillar: [
      { n: 1,  word: "Rosa",    syllables: ["Ro","sa"],          emoji: "🌹" },
      { n: 2,  word: "Ramona",  syllables: ["Ra","mo","na"],     emoji: "👩" },
      { n: 3,  word: "Renato",  syllables: ["Re","na","to"],     emoji: "👦" },
      { n: 4,  word: "rosa",    syllables: ["ro","sa"],          emoji: "🌹" },
      { n: 5,  word: "ramona",  syllables: ["ra","mo","na"],     emoji: null },
      { n: 6,  word: "renato",  syllables: ["re","na","to"],     emoji: null },
      { n: 7,  word: "reja",    syllables: ["re","ja"],          emoji: "🔲" },
      { n: 8,  word: "risa",    syllables: ["ri","sa"],          emoji: "😄" },
      { n: 9,  word: "río",     syllables: ["rí","o"],           emoji: "🏞️" },
      { n: 10, word: "rama",    syllables: ["ra","ma"],          emoji: "🌿" },
      { n: 11, word: "rollo",   syllables: ["ro","llo"],         emoji: "🧻" },
      { n: 12, word: "ropa",    syllables: ["ro","pa"],          emoji: "👕" },
      { n: 13, word: "ropero",  syllables: ["ro","pe","ro"],     emoji: "🚪" },
    ],
    rails: [
      { text: "Ra-mo-na  ba-ña  a  la  mo-na  de  pa-lo.  Re-na-to  se  ríe  de  Ra-mo-na." },
      { text: "mi  pe-rro  co-rre-te-a  a  la  ra-ta." },
      { text: "Re-né  se  rí-e  de  mi  ca-ra  lle-na  de  ba-rro." },
    ],
    newWords: ["remolino", "ropero", "río", "ropa", "risa", "rosa"],
    teacherNote: "Cuando R va al inicio de palabra, suena fuerte aunque se escriba con una sola R. Esta lección consolida la diferencia entre R suave y R fuerte.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 19 — LA Z
  // Página 28 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 19,
    title: "La Z",
    subtitle: "",
    type: "consonant",
    letter: "z",
    mainWord: "zo-rro",
    mainEmoji: "🦊",
    color: "#E67E22",
    colorLight: "#FDEBD0",
    board: {
      letter: "z",
      topLeft: "za", topRight: "ze",
      bottomLeft: "zi", bottomCenter: "zo", bottomRight: "zu",
    },
    pillar: [
      { n: 1,  word: "zapato",  syllables: ["za","pa","to"],     emoji: "👟" },
      { n: 2,  word: "buzo",    syllables: ["bu","zo"],          emoji: "🤿" },
      { n: 3,  word: "lazo",    syllables: ["la","zo"],          emoji: "🎀" },
      { n: 4,  word: "loza",    syllables: ["lo","za"],          emoji: "🍽️" },
      { n: 5,  word: "choza",   syllables: ["cho","za"],         emoji: "🛖" },
      { n: 6,  word: "pozo",    syllables: ["po","zo"],          emoji: "🌀" },
      { n: 7,  word: "taza",    syllables: ["ta","za"],          emoji: "☕" },
      { n: 8,  word: "pizarra", syllables: ["pi","za","rra"],    emoji: "🖊️" },
      { n: 9,  word: "cabeza",  syllables: ["ca","be","za"],     emoji: "🗣️" },
      { n: 10, word: "lechuza", syllables: ["le","chu","za"],    emoji: "🦉" },
      { n: 11, word: "maleza",  syllables: ["ma","le","za"],     emoji: "🌿" },
      { n: 12, word: "terraza", syllables: ["te","rra","za"],    emoji: "🏡" },
    ],
    rails: [
      { text: "Re-né  di-bu-jó  la  ca-be-za  de  u-na  le-chu-za." },
      { text: "Zu-le-ma  sa-có  mu-cha  ma-le-za  de  la  vi-ña." },
    ],
    newWords: ["zorro", "zapato", "lechuza", "buzo", "pizarra", "cabeza"],
    teacherNote: "En español latinoamericano, Z suena igual que S (no como en España). La lechuza y el zorro son las imágenes principales.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 20 — TERMINACIONES CON S (las, les, los...)
  // Página 33 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 20,
    title: "Terminaciones -s",
    subtitle: "las · les · lis · los · lus",
    type: "ending",
    letter: "s_final",
    mainWord: "las ma-nos",
    mainEmoji: "👐",
    color: "#2ECC71",
    colorLight: "#D5F5E3",
    board: {
      letter: null,
      custom: ["las","les","lis","los","lus"],
      note: "Grupos de consonante + s al final de sílaba",
    },
    pillar: [
      { n: 1,  word: "las manos lavadas",    syllables: [], emoji: "🙌" },
      { n: 2,  word: "las peras maduras",    syllables: [], emoji: "🍐" },
      { n: 3,  word: "las uvas ricas",       syllables: [], emoji: "🍇" },
      { n: 4,  word: "los tomates rojos",    syllables: [], emoji: "🍅" },
      { n: 5,  word: "las piñas bonitas",    syllables: [], emoji: "🍍" },
      { n: 6,  word: "as · is · os · us · es", syllables: [], emoji: null },
      { n: 7,  word: "asno · isla · oscuro · astilla", syllables: [], emoji: "🐴" },
      { n: 8,  word: "escobas · escopetas · españolas", syllables: [], emoji: null },
      { n: 9,  word: "la isla está lejos",   syllables: [], emoji: "🏝️" },
      { n: 10, word: "la noche está oscura", syllables: [], emoji: "🌙" },
      { n: 11, word: "las focas feas",       syllables: [], emoji: "🦭" },
      { n: 12, word: "las arañas peludas",   syllables: [], emoji: "🕷️" },
      { n: 13, word: "los mosquitos pequeños", syllables: [], emoji: "🦟" },
    ],
    rails: [],
    newWords: ["asno", "isla", "oscuro", "astilla", "escopeta", "española"],
    teacherNote: "Esta lección introduce los grupos con S al comienzo y final de sílaba. También aparece el asno como imagen. Leer las frases con fluidez.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 21 — TERMINACIONES CON L (sal, sol, col...)
  // Página 34 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 21,
    title: "Terminaciones -l",
    subtitle: "sal · sel · sil · sol · sul",
    type: "ending",
    letter: "l_final",
    mainWord: "sol",
    mainEmoji: "☀️",
    color: "#2ECC71",
    colorLight: "#D5F5E3",
    board: {
      letter: null,
      custom: ["sal","sel","sil","sol","sul"],
    },
    pillar: [
      { n: 1,  word: "sal",     syllables: ["sal"],              emoji: "🧂" },
      { n: 2,  word: "salto",   syllables: ["sal","to"],         emoji: "🤸" },
      { n: 3,  word: "alto",    syllables: ["al","to"],          emoji: null },
      { n: 4,  word: "palma",   syllables: ["pal","ma"],         emoji: "🌴" },
      { n: 5,  word: "alta",    syllables: ["al","ta"],          emoji: null },
      { n: 6,  word: "balde",   syllables: ["bal","de"],         emoji: "🪣" },
      { n: 7,  word: "último",  syllables: ["úl","ti","mo"],     emoji: null },
      { n: 8,  word: "caracol", syllables: ["ca","ra","col"],    emoji: "🐌" },
      { n: 9,  word: "peral",   syllables: ["pe","ral"],         emoji: "🍐" },
      { n: 10, word: "rosal",   syllables: ["ro","sal"],         emoji: "🌹" },
      { n: 11, word: "farol",   syllables: ["fa","rol"],         emoji: "🏮" },
      { n: 12, word: "azul",    syllables: ["a","zul"],          emoji: "🔵" },
      { n: 13, word: "pastel",  syllables: ["pas","tel"],        emoji: "🎂" },
      { n: 14, word: "perejil", syllables: ["pe","re","jil"],    emoji: "🌿" },
    ],
    rails: [
      { text: "el  sa  |  El  si-ta  |  E-li-sa  |  E-le-na  |  E-lo-í-sa" },
      { text: "El  ga-llo  sal-tó  del  te-ja-do  al  pe-ral." },
      { text: "El-sa  de-jó  el  bal-de  al  la-do  del  no-gal." },
      { text: "Ca-ra-col,  ca-ra-col,  sa-ca  tu  bo-qui-ta  al  sol." },
    ],
    newWords: ["sol", "sal", "caracol", "balde", "farol", "azul", "palma"],
    teacherNote: "Esta lección trabaja los grupos con L al final de sílaba. El trabalenguas del caracol es muy popular. Nombres con E inicial: Elsa, Elsita, Elisa, Elena, Eloísa.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 22 — GRUPOS -R (ar, er, ir, or, ur)
  // Página 35 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 22,
    title: "Grupos -r",
    subtitle: "ar · er · ir · or · ur",
    type: "ending",
    letter: "r_ending",
    mainWord: "ar-di-lla",
    mainEmoji: "🐿️",
    color: "#2ECC71",
    colorLight: "#D5F5E3",
    board: {
      letter: null,
      custom: ["ar","er","ir","or","ur"],
    },
    pillar: [
      { n: 1,  word: "árbol",    syllables: ["ár","bol"],         emoji: "🌳" },
      { n: 2,  word: "arco",     syllables: ["ar","co"],          emoji: "🏹" },
      { n: 3,  word: "arma",     syllables: ["ar","ma"],          emoji: null },
      { n: 4,  word: "orgulloso",syllables: ["or","gu","llo","so"], emoji: null },
      { n: 5,  word: "Ernesto",  syllables: ["Er","nes","to"],    emoji: "👦" },
      { n: 6,  word: "carta",    syllables: ["car","ta"],         emoji: "✉️" },
      { n: 7,  word: "tarde",    syllables: ["tar","de"],         emoji: "🌆" },
      { n: 8,  word: "corto",    syllables: ["cor","to"],         emoji: null },
      { n: 9,  word: "largo",    syllables: ["lar","go"],         emoji: null },
    ],
    rails: [
      { text: "ar-mar  al  sol-da-do" },
      { text: "Cor-tar  le-ña." },
      { text: "La-var  la  cor-ba-ta." },
      { text: "Sa-lir  a  ju-gar." },
      { text: "to-car  la  cor-ne-ta." },
      { text: "Ju-gar  al  a-ro." },
      { text: "Pi-llar  u-na  ar-di-lla." },
      { text: "na-dar  por  el  mar." },
      { text: "Par-tir  u-na  tor-ta." },
      { text: "ba-jar  la  cor-ti-na." },
      { text: "e-char-se  a  dor-mir." },
    ],
    newWords: ["ardilla", "árbol", "carta", "corbata", "corneta", "soldado"],
    teacherNote: "Los rieles de esta lección son infinitivos de verbos, excelente para practicar acciones cotidianas. Nombres: Arturo, Avelino, Amadeo.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 23 — GRUPOS CON N (pan, pen, pin, pon, pun)
  // Página 36 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 23,
    title: "Grupos -n",
    subtitle: "pan · pen · pin · pon · pun",
    type: "ending",
    letter: "n_ending",
    mainWord: "pan",
    mainEmoji: "🍞",
    color: "#F39C12",
    colorLight: "#FDEBD0",
    board: {
      letter: null,
      custom: ["pan","pen","pin","pon","pun"],
    },
    pillar: [
      { n: 1,  word: "pan",      syllables: ["pan"],              emoji: "🍞" },
      { n: 2,  word: "canto",    syllables: ["can","to"],         emoji: "🎵" },
      { n: 3,  word: "menta",    syllables: ["men","ta"],         emoji: "🌿" },
      { n: 4,  word: "tinta",    syllables: ["tin","ta"],         emoji: "🖊️" },
      { n: 5,  word: "lente",    syllables: ["len","te"],         emoji: "🔍" },
      { n: 6,  word: "banco",    syllables: ["ban","co"],         emoji: "🏦" },
      { n: 7,  word: "tonto",    syllables: ["ton","to"],         emoji: null },
      { n: 8,  word: "punto",    syllables: ["pun","to"],         emoji: "•" },
      { n: 9,  word: "candado",  syllables: ["can","da","do"],    emoji: "🔒" },
      { n: 10, word: "ventana",  syllables: ["ven","ta","na"],    emoji: "🪟" },
      { n: 11, word: "pintura",  syllables: ["pin","tu","ra"],    emoji: "🎨" },
      { n: 12, word: "linterna", syllables: ["lin","ter","na"],   emoji: "🔦" },
    ],
    rails: [
      { text: "El  pan  es  a-li-men-to." },
      { text: "El  mon-te  es  al-to." },
      { text: "la  man-ta  es  de  la-na." },
      { text: "El  ban-co  es  de  ma-de-ra." },
      { text: "la  tin-ta  man-cha." },
      { text: "el  ja-bón  la-va  las  ma-nos." },
      { text: "el  me-lón  es-tá  ver-de." },
      { text: "el  li-món  es  a-ma-ri-llo." },
    ],
    newWords: ["pan", "jabón", "melón", "limón", "bastón", "cajón", "patín"],
    teacherNote: "Palabras con tilde al final (agudas): cajón, limón, melón, jabón, patín, bastón. Nombres: Oscar, Olga, Alfonso.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 24 — GRUPOS CON M (am, em, im, om, um)
  // Página 37 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 24,
    title: "Grupos -m",
    subtitle: "am · em · im · om · um",
    type: "ending",
    letter: "m_ending",
    mainWord: "em-bu-do",
    mainEmoji: "🔩",
    color: "#F39C12",
    colorLight: "#FDEBD0",
    board: {
      letter: null,
      custom: ["am","em","im","om","um"],
    },
    pillar: [
      { n: 1,  word: "campo",      syllables: ["cam","po"],          emoji: "🌾" },
      { n: 2,  word: "campana",    syllables: ["cam","pa","na"],     emoji: "🔔" },
      { n: 3,  word: "campesino",  syllables: ["cam","pe","si","no"], emoji: "👨‍🌾" },
      { n: 4,  word: "bombero",    syllables: ["bom","be","ro"],     emoji: "🚒" },
      { n: 5,  word: "embarrado",  syllables: ["em","ba","rra","do"], emoji: null },
      { n: 6,  word: "embudo",     syllables: ["em","bu","do"],      emoji: "🔩" },
      { n: 7,  word: "embustero",  syllables: ["em","bus","te","ro"], emoji: null },
      { n: 8,  word: "importante", syllables: ["im","por","tan","te"], emoji: null },
      { n: 9,  word: "campo verde",    syllables: [], emoji: "🌿" },
      { n: 10, word: "campana de metal", syllables: [], emoji: "🔔" },
      { n: 11, word: "embudo de lata",  syllables: [], emoji: null },
      { n: 12, word: "bombero embarrado", syllables: [], emoji: "🚒" },
    ],
    rails: [
      { text: "En  el  cam-po  se  to-ca  la  cam-pa-na  por  la  ma-ña-na  pa-ra  que  los  cam-pe-si-nos  se  le-van-ten." },
    ],
    newWords: ["campana", "campo", "bombero", "embudo", "campesino", "importante"],
    teacherNote: "La frase larga es para trabajo de fluidez lectora. El texto de la campana en el campo es una de las frases más memorables del libro.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 25 — DIPTONGOS (au, ai, ei, oi...)
  // Página 38 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 25,
    title: "Diptongos",
    subtitle: "au · ai · ei · bai · vai...",
    type: "diphthong",
    letter: "diphthong_au_ai",
    mainWord: "au-to",
    mainEmoji: "🚗",
    color: "#9B59B6",
    colorLight: "#E8DAEF",
    board: null,
    pillar: [
      { n: 1,  word: "auto",      syllables: ["au","to"],          emoji: "🚗" },
      { n: 2,  word: "jaula",     syllables: ["jau","la"],         emoji: "🔒" },
      { n: 3,  word: "laurel",    syllables: ["lau","rel"],        emoji: "🌿" },
      { n: 4,  word: "bautizo",   syllables: ["bau","ti","zo"],    emoji: "⛪" },
      { n: 5,  word: "Aurora",    syllables: ["Au","ro","ra"],     emoji: "🌅" },
      { n: 6,  word: "Laura",     syllables: ["Lau","ra"],         emoji: "👩" },
      { n: 7,  word: "Paulina",   syllables: ["Pau","li","na"],    emoji: "👩" },
      // diptongos ai/ei
      { n: 1,  word: "caimán",    syllables: ["cai","mán"],        emoji: "🐊" },
      { n: 2,  word: "aire",      syllables: ["ai","re"],          emoji: "💨" },
      { n: 3,  word: "baile",     syllables: ["bai","le"],         emoji: "💃" },
      { n: 4,  word: "naipe",     syllables: ["nai","pe"],         emoji: "🃏" },
      { n: 5,  word: "vaina",     syllables: ["vai","na"],         emoji: "🌿" },
      { n: 6,  word: "taimado",   syllables: ["tai","ma","do"],    emoji: null },
      { n: 1,  word: "peineta",   syllables: ["pei","ne","ta"],    emoji: "💇" },
      { n: 2,  word: "peinado",   syllables: ["pei","na","do"],    emoji: "💈" },
      { n: 3,  word: "peinador",  syllables: ["pei","na","dor"],   emoji: null },
      { n: 4,  word: "afeitado",  syllables: ["a","fei","ta","do"], emoji: "🪒" },
      { n: 5,  word: "reina",     syllables: ["rei","na"],         emoji: "👑" },
    ],
    rails: [
      { text: "El  cai-mán  es  un  a-ni-mal  que  vi-ve  en  los  rí-os  jun-to  a  las  sel-vas." },
      { text: "mi  pa-pá  se  a-fei-ta  con  na-va-ja.  Los  ni-ños  no  de-ben  to-mar  nun-ca  la  na-va-ja  del  pa-pá,  por-que  se  cor-tan  los  de-dos." },
    ],
    newWords: ["auto", "caimán", "reina", "baile", "neumático", "deuda", "Europa"],
    teacherNote: "También se introducen: neumático, deuda, Europa (eu). El caimán es muy motivador para los niños.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 26 — GRUPOS ia, ie, io (piano, viaje, radio)
  // Página 39 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 26,
    title: "Grupos ia, ie, io",
    subtitle: "piano · viaje · radio...",
    type: "diphthong",
    letter: "ia_ie_io",
    mainWord: "pia-no",
    mainEmoji: "🎹",
    color: "#9B59B6",
    colorLight: "#E8DAEF",
    board: null,
    pillar: [
      { n: 1,  word: "piano",    syllables: ["pia","no"],          emoji: "🎹" },
      { n: 2,  word: "viaje",    syllables: ["via","je"],          emoji: "✈️" },
      { n: 3,  word: "copia",    syllables: ["co","pia"],          emoji: "📄" },
      { n: 4,  word: "media",    syllables: ["me","dia"],          emoji: "🧦" },
      { n: 5,  word: "rabia",    syllables: ["ra","bia"],          emoji: null },
      { n: 6,  word: "lluvia",   syllables: ["llu","via"],         emoji: "🌧️" },
      { n: 7,  word: "familia",  syllables: ["fa","mi","lia"],     emoji: "👨‍👩‍👧" },
      { n: 8,  word: "Amalia",   syllables: ["A","ma","lia"],      emoji: "👩" },
      // ie
      { n: 1,  word: "siete",    syllables: ["sie","te"],          emoji: "7️⃣" },
      { n: 2,  word: "dieta",    syllables: ["die","ta"],          emoji: "🥗" },
      { n: 3,  word: "miedo",    syllables: ["mie","do"],          emoji: "😨" },
      { n: 4,  word: "nieve",    syllables: ["nie","ve"],          emoji: "❄️" },
      { n: 5,  word: "riego",    syllables: ["rie","go"],          emoji: "💧" },
      { n: 6,  word: "tierra",   syllables: ["tie","rra"],         emoji: "🌍" },
      { n: 7,  word: "pieza",    syllables: ["pie","za"],          emoji: "🧩" },
      { n: 8,  word: "viejo",    syllables: ["vie","jo"],          emoji: "👴" },
      // io
      { n: 1,  word: "gaviota",  syllables: ["ga","vio","ta"],     emoji: "🐦" },
      { n: 2,  word: "violeta",  syllables: ["vio","le","ta"],     emoji: "💜" },
      { n: 3,  word: "patio",    syllables: ["pa","tio"],          emoji: "🏡" },
      { n: 4,  word: "labio",    syllables: ["la","bio"],          emoji: "💋" },
      { n: 5,  word: "radio",    syllables: ["ra","dio"],          emoji: "📻" },
      { n: 6,  word: "canario",  syllables: ["ca","na","rio"],     emoji: "🐦" },
      { n: 7,  word: "indio",    syllables: ["in","dio"],          emoji: null },
      { n: 8,  word: "furioso",  syllables: ["fu","rio","so"],     emoji: null },
    ],
    rails: [
      { text: "A-ma-lia  via-jó  en  un  dí-a  de  llu-via." },
      { text: "An-to-nio  via-ja-rá  a  Es-pa-ña." },
      { text: "Es-pa-ña  es-tá  en  Eu-ro-pa." },
      { text: "En  el  in-vier-no  cae  mu-cha  nie-ve." },
      { text: "Los  a-vio-nes  tie-nen  a-las." },
      { text: "La  ga-vio-ta  vi-ve  en  el  mar." },
      { text: "La  tie-rra  es  re-don-da  co-mo  el  sol." },
    ],
    newWords: ["piano", "viaje", "familia", "lluvia", "gaviota", "canario", "España", "Europa"],
    teacherNote: "Esta lección es rica en vocabulario geográfico y natural. La frase 'La tierra es redonda como el sol' introduce conceptos de ciencias.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 27 — GRUPOS ue, ua, uo (rueda, guanaco)
  // Página 40 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 27,
    title: "Grupos ue, ua",
    subtitle: "rueda · avión · guanaco...",
    type: "diphthong",
    letter: "ue_ua",
    mainWord: "rue-da",
    mainEmoji: "🛞",
    color: "#9B59B6",
    colorLight: "#E8DAEF",
    board: null,
    pillar: [
      { n: 1,  word: "rueda",    syllables: ["rue","da"],          emoji: "🛞" },
      { n: 2,  word: "suela",    syllables: ["sue","la"],          emoji: "👟" },
      { n: 3,  word: "muela",    syllables: ["mue","la"],          emoji: "🦷" },
      { n: 4,  word: "fuego",    syllables: ["fue","go"],          emoji: "🔥" },
      { n: 5,  word: "cuero",    syllables: ["cue","ro"],          emoji: "🧥" },
      { n: 6,  word: "pañuelo",  syllables: ["pa","ñue","lo"],     emoji: "🧣" },
      { n: 7,  word: "escuela",  syllables: ["es","cue","la"],     emoji: "🏫" },
      // ua
      { n: 1,  word: "guanaco",  syllables: ["gua","na","co"],     emoji: "🦙" },
      { n: 2,  word: "agua",     syllables: ["a","gua"],           emoji: "💧" },
      { n: 3,  word: "guano",    syllables: ["gua","no"],          emoji: null },
      { n: 4,  word: "lengua",   syllables: ["len","gua"],         emoji: "👅" },
      { n: 5,  word: "suave",    syllables: ["sua","ve"],          emoji: null },
      { n: 6,  word: "peruano",  syllables: ["pe","rua","no"],     emoji: "🇵🇪" },
      { n: 7,  word: "guapo",    syllables: ["gua","po"],          emoji: "😎" },
      { n: 8,  word: "estatua",  syllables: ["es","ta","tua"],     emoji: "🗿" },
    ],
    rails: [
      { text: "El  gua-na-co  vi-ve  en  la  cor-di-lle-ra  de  Los  An-des." },
      { text: "Los  a-vio-nes  vue-lan  a  mu-cha  al-tu-ra." },
      { text: "Los  ni-ños  no  de-ben  ju-gar  con  fue-go.  El  fue-go  que-ma  la  ro-pa.  Los  ni-ños  llo-ran  cuan-do  se  que-man.  Las  que-ma-du-ras  due-len  mu-cho." },
    ],
    newWords: ["rueda", "guanaco", "escuela", "fuego", "avión", "pañuelo"],
    teacherNote: "También se presentan los días de la semana: lunes, martes, miércoles, jueves, viernes, sábado, domingo. El texto sobre el fuego tiene un mensaje de seguridad importante.",
    extras: {
      diasSemana: ["lunes","martes","miércoles","jueves","viernes","sábado","domingo"],
    },
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 28 — LA Y
  // Página 41 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 28,
    title: "La Y",
    subtitle: "",
    type: "consonant",
    letter: "y",
    mainWord: "pa-ya-so",
    mainEmoji: "🤡",
    color: "#E67E22",
    colorLight: "#FDEBD0",
    board: {
      letter: "y",
      topLeft: "ya", topRight: "ye",
      bottomLeft: "yi", bottomCenter: "yo", bottomRight: "yu",
    },
    pillar: [
      { n: 1,  word: "rey",     syllables: ["rey"],              emoji: "👑" },
      { n: 2,  word: "buey",    syllables: ["buey"],             emoji: "🐂" },
      { n: 3,  word: "carey",   syllables: ["ca","rey"],         emoji: "🐢" },
      { n: 4,  word: "yema",    syllables: ["ye","ma"],          emoji: "🥚" },
      { n: 5,  word: "mayo",    syllables: ["ma","yo"],          emoji: "📅" },
      { n: 6,  word: "joya",    syllables: ["jo","ya"],          emoji: "💎" },
      { n: 7,  word: "yugo",    syllables: ["yu","go"],          emoji: null },
      { n: 8,  word: "yeso",    syllables: ["ye","so"],          emoji: null },
      { n: 9,  word: "payaso",  syllables: ["pa","ya","so"],     emoji: "🤡" },
    ],
    rails: [
      { text: "Yo  voy  a  ju-gar." },
      { text: "Yo  es-toy  muy  con-ten-to." },
      { text: "mi  pa-pá  y  mi  ma-má  se  rí-en  de  mi  ga-to  que  se  ca-yó  al  a-gua  y  se  mo-jó." },
      { text: "En  ye-ma  y  en  ma-yo  de-be  po-ner-se  es-ta  Y,  lo  mis-mo  que  en  jo-ya,  yu-go,  ye-so  y  pa-ya-so." },
      { text: "Yo  co-mo  y  tú  co-mes,  pa-pá  y  ma-má  co-men,  y  to-dos  co-me-mos  fi-de-os  y  ta-lla-ri-nes  por-que  son  muy  bue-nos,  y  yo  no  mien-to  y  se  a-ca-bó  el  cuen-to." },
    ],
    newWords: ["payaso", "rey", "yema", "joya", "Yolanda"],
    teacherNote: "La Y tiene dos usos: como vocal (en 'rey', 'buey') y como consonante (en 'yema', 'payaso'). La frase final es humorística y muy querida por los niños.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 29 — C con E e I (ce, ci) = mismo sonido que Z
  // Página 42 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 29,
    title: "Ce y Ci",
    subtitle: "za · ce · ci · zo · zu",
    type: "consonant",
    letter: "ce_ci",
    mainWord: "ce-bo-lla",
    mainEmoji: "🧅",
    color: "#2ECC71",
    colorLight: "#D5F5E3",
    board: {
      letter: null,
      custom: ["za","ce","ci","zo","zu"],
      note: "Ce y Ci suenan igual que za, zo, zu en español latinoamericano",
    },
    pillar: [
      { n: 1,  word: "zapato",   syllables: ["za","pa","to"],      emoji: "👟" },
      { n: 2,  word: "zorro",    syllables: ["zo","rro"],          emoji: "🦊" },
      { n: 3,  word: "cebolla",  syllables: ["ce","bo","lla"],     emoji: "🧅" },
      { n: 4,  word: "ceniza",   syllables: ["ce","ni","za"],      emoji: null },
      { n: 5,  word: "cerrojo",  syllables: ["ce","rro","jo"],     emoji: "🔒" },
      { n: 6,  word: "cemento",  syllables: ["ce","men","to"],     emoji: "🏗️" },
      { n: 7,  word: "cebada",   syllables: ["ce","ba","da"],      emoji: "🌾" },
      { n: 8,  word: "docena",   syllables: ["do","ce","na"],      emoji: "1️⃣2️⃣" },
      { n: 9,  word: "calcetín", syllables: ["cal","ce","tín"],    emoji: "🧦" },
      { n: 10, word: "cacerola", syllables: ["ca","ce","ro","la"], emoji: "🍲" },
      // ci
      { n: 1,  word: "cigarro",  syllables: ["ci","ga","rro"],     emoji: null },
      { n: 2,  word: "cocina",   syllables: ["co","ci","na"],      emoji: "🍳" },
      { n: 3,  word: "ciruela",  syllables: ["ci","rue","la"],     emoji: "🍑" },
      { n: 4,  word: "racimo",   syllables: ["ra","ci","mo"],      emoji: "🍇" },
      { n: 5,  word: "bocina",   syllables: ["bo","ci","na"],      emoji: "📯" },
      // Ci-
      { n: 1,  word: "cinta",    syllables: ["cin","ta"],          emoji: "🎀" },
      { n: 2,  word: "circo",    syllables: ["cir","co"],          emoji: "🎪" },
      { n: 3,  word: "cielo",    syllables: ["cie","lo"],          emoji: "☁️" },
      { n: 4,  word: "ciego",    syllables: ["cie","go"],          emoji: null },
      { n: 5,  word: "sucio",    syllables: ["su","cio"],          emoji: null },
    ],
    rails: [
      { text: "El  cis-ne  na-da  en  el  la-go." },
      { text: "me  gus-tan  las  ce-re-zas  muy  dul-ces." },
      { text: "ocho  diez  cin-co  seis  on-ce" },
      { text: "do-ce  u-no  sie-te  dos  nue-ve" },
      { text: "ca-tor-ce  quin-ce  vein-te  cien  mil" },
    ],
    newWords: ["cebolla", "cisne", "cocina", "circo", "cielo", "cereza", "calcetín"],
    teacherNote: "Esta lección también introduce los números: uno, dos, cinco, seis, siete, ocho, nueve, diez, once, doce, catorce, quince, veinte, cien, mil.",
    extras: {
      numeros: ["uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez","once","doce","trece","catorce","quince","veinte","cien","mil"],
    },
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 30 — LA G (ga, gue, gui, go, gu)
  // Páginas 30-31 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 30,
    title: "La G",
    subtitle: "ga · gue · gui · go · gu",
    type: "consonant",
    letter: "g",
    mainWord: "ga-to",
    mainEmoji: "🐱",
    color: "#3498DB",
    colorLight: "#D6EAF8",
    board: {
      letter: "g",
      topLeft: "ga", topRight: "gue",
      bottomLeft: "gui", bottomCenter: "go", bottomRight: "gu",
    },
    pillar: [
      { n: 1,  word: "gallo",    syllables: ["ga","llo"],          emoji: "🐓" },
      { n: 2,  word: "garra",    syllables: ["ga","rra"],          emoji: "🦁" },
      { n: 3,  word: "goma",     syllables: ["go","ma"],           emoji: "🪱" },
      { n: 4,  word: "miga",     syllables: ["mi","ga"],           emoji: "🍞" },
      { n: 5,  word: "amiga",    syllables: ["a","mi","ga"],       emoji: "👫" },
      { n: 6,  word: "lago",     syllables: ["la","go"],           emoji: "🏞️" },
      { n: 7,  word: "soga",     syllables: ["so","ga"],           emoji: "🪢" },
      { n: 8,  word: "gallina",  syllables: ["ga","lli","na"],     emoji: "🐔" },
      { n: 9,  word: "gotera",   syllables: ["go","te","ra"],      emoji: "💧" },
      { n: 10, word: "gusano",   syllables: ["gu","sa","no"],      emoji: "🐛" },
      { n: 11, word: "galleta",  syllables: ["ga","lle","ta"],     emoji: "🍪" },
      { n: 12, word: "goloso",   syllables: ["go","lo","so"],      emoji: null },
      { n: 13, word: "laguna",   syllables: ["la","gu","na"],      emoji: "🌊" },
      // gue, gui
      { n: 1,  word: "guitarra", syllables: ["gui","ta","rra"],    emoji: "🎸" },
      { n: 2,  word: "guerra",   syllables: ["gue","rra"],         emoji: null },
      { n: 3,  word: "guiso",    syllables: ["gui","so"],          emoji: "🍲" },
      { n: 4,  word: "águila",   syllables: ["á","gui","la"],      emoji: "🦅" },
      { n: 5,  word: "aguilucho",syllables: ["a","gui","lu","cho"], emoji: "🦅" },
    ],
    rails: [
      { text: "ma-rí-a,  da-me  u-na  ga-lle-ta." },
      { text: "la  la-gu-na  se  se-có." },
      { text: "la  a-gu-ja  pi-ca  la  ma-no." },
      { text: "Pepe,  no  a-pa-gue  la  ve-la." },
      { text: "la  ca-rre-ta  si-gue  su  ca-mi-no." },
      { text: "mi  a-mi-go  me  re-ga-ló  u-na  gui-ta-rra." },
      { text: "e-sa  a-ve  de  ra-pi-ña  se  lla-ma  á-gui-la.  Se  lle-va  u-na  bo-rre-gui-ta  ro-ba-da  de  su  re-ba-ño." },
      { text: "mi-ra,  Pe-ri-co,  e-se  mo-no  go-ri-la;  mi-ra  su  ma-no  pe-lu-da." },
    ],
    newWords: ["gato", "guitarra", "águila", "laguna", "galleta", "gallina"],
    teacherNote: "La G suena suave con a, o, u. Con e e i necesita la u muda: gue, gui. La Ü (con diéresis) suena: cigüeña, vergüenza. Esta lección aparece antes de las páginas de grupos en el libro.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 31 — ISLA / MAYÚSCULAS M y N
  // Página 43 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 31,
    title: "Mayúsculas M y N",
    subtitle: "MA ME MI MO MU · NE NO NA NU NI",
    type: "consonant",
    letter: "M_N_mayusc",
    mainWord: "Is-la",
    mainEmoji: "🏝️",
    color: "#1ABC9C",
    colorLight: "#D1F2EB",
    board: {
      letter: null,
      custom: ["MA","ME","MI","MO","MU","NE","NO","NA","NU","NI"],
    },
    pillar: [
      { n: 1,  word: "isla es una porción de tierra rodeada de agua por todas partes", syllables: [], emoji: "🏝️" },
      { n: 2,  word: "Isla",    syllables: ["Is","la"],           emoji: "🏝️" },
      { n: 3,  word: "Italia",  syllables: ["I","ta","lia"],      emoji: "🇮🇹" },
      { n: 4,  word: "Isidoro", syllables: ["I","si","do","ro"],  emoji: "👦" },
      { n: 5,  word: "Isabel",  syllables: ["I","sa","bel"],      emoji: "👩" },
      { n: 6,  word: "Irma",    syllables: ["Ir","ma"],           emoji: "👩" },
    ],
    rails: [
      { text: "Mi  a-mi-ga  se  lla-ma  Mer-ce-des." },
      { text: "Mar-ta  tam-bién  es  muy  bue-na  a-mi-ga." },
      { text: "Mis  com-pa-ñe-ras  son:  Ma-rí-a  y  Ma-til-de." },
      { text: "La  ve-ci-na  de  mi  ca-sa  tie-ne  u-na  ni-ñi-ta  que  se  lla-ma  Ne-na." },
      { text: "Ni-co-lás,  Nar-ci-sa,  Ni-ca-nor." },
    ],
    newWords: ["isla", "Italia", "Isidoro", "Isabel", "Irma", "Mercedes"],
    teacherNote: "Esta lección trabaja las mayúsculas de M y N, y nombres propios con I inicial. También introduce la definición de 'isla'.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 32 — LA H (muda)
  // Página 44 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 32,
    title: "La H",
    subtitle: "¡La H no suena!",
    type: "consonant",
    letter: "h",
    mainWord: "ho-ja",
    mainEmoji: "🍃",
    color: "#27AE60",
    colorLight: "#D5F5E3",
    board: {
      letter: "h",
      topLeft: "ha", topRight: "he",
      bottomLeft: "hi", bottomCenter: "ho", bottomRight: "hu",
    },
    pillar: [
      { n: 1,  word: "hacha",    syllables: ["ha","cha"],          emoji: "🪓" },
      { n: 2,  word: "hoja",     syllables: ["ho","ja"],           emoji: "🍃" },
      { n: 3,  word: "hijo",     syllables: ["hi","jo"],           emoji: "👦" },
      { n: 4,  word: "humo",     syllables: ["hu","mo"],           emoji: "💨" },
      { n: 5,  word: "hilo",     syllables: ["hi","lo"],           emoji: "🧵" },
      { n: 6,  word: "hoyo",     syllables: ["ho","yo"],           emoji: null },
      { n: 7,  word: "helado",   syllables: ["he","la","do"],      emoji: "🍦" },
      { n: 8,  word: "hebilla",  syllables: ["he","bi","lla"],     emoji: null },
      // hue-
      { n: 1,  word: "huevo",    syllables: ["hue","vo"],          emoji: "🥚" },
      { n: 2,  word: "hueso",    syllables: ["hue","so"],          emoji: "🦴" },
      { n: 3,  word: "horno",    syllables: ["hor","no"],          emoji: "🔥" },
      { n: 4,  word: "hermano",  syllables: ["her","ma","no"],     emoji: "👦" },
      { n: 5,  word: "hormiga",  syllables: ["hor","mi","ga"],     emoji: "🐜" },
      { n: 6,  word: "Hernán",   syllables: ["Her","nán"],         emoji: "👦" },
      { n: 7,  word: "Hilda",    syllables: ["Hil","da"],          emoji: "👩" },
      { n: 8,  word: "Héctor",   syllables: ["Héc","tor"],         emoji: "👦" },
      // otros
      { n: 1,  word: "buho",     syllables: ["bu","ho"],           emoji: "🦉" },
      { n: 2,  word: "ahijado",  syllables: ["a","hi","ja","do"],  emoji: null },
      { n: 3,  word: "ahumado",  syllables: ["a","hu","ma","do"],  emoji: null },
      { n: 4,  word: "almohada", syllables: ["al","mo","ha","da"], emoji: "🛏️" },
    ],
    rails: [
      { text: "El  pan  se  ha-ce  con  ha-ri-na." },
      { text: "El  bu-ho  es  un  a-ve  que  duer-me  en  el  dí-a  y  vue-la  por  la  no-che.  El  bu-ho  co-me  sa-pos  y  ra-to-nes." },
    ],
    newWords: ["hoja", "huevo", "horno", "hormiga", "buho", "almohada"],
    teacherNote: "La H es completamente muda en español. El texto del búho es educativo: animal nocturno. Nombres con H: Hernán, Hilda, Héctor.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 33 — PL (pla, ple, pli, plo, plu)
  // Página 45 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 33,
    title: "PL",
    subtitle: "pla · ple · pli · plo · plu",
    type: "blend",
    letter: "pl",
    mainWord: "plu-ma",
    mainEmoji: "🪶",
    color: "#2980B9",
    colorLight: "#D6EAF8",
    board: {
      letter: "pl",
      topLeft: "pla", topRight: "ple",
      bottomLeft: "pli", bottomCenter: "plo", bottomRight: "plu",
    },
    pillar: [
      { n: 1,  word: "plato",    syllables: ["pla","to"],          emoji: "🍽️" },
      { n: 2,  word: "platillo", syllables: ["pla","ti","llo"],    emoji: "🍽️" },
      { n: 3,  word: "plomo",    syllables: ["plo","mo"],          emoji: "⚫" },
      { n: 4,  word: "plaza",    syllables: ["pla","za"],          emoji: "🏙️" },
      { n: 5,  word: "plazuela", syllables: ["pla","zue","la"],    emoji: null },
      { n: 6,  word: "plata",    syllables: ["pla","ta"],          emoji: "🥈" },
      { n: 7,  word: "pluma",    syllables: ["plu","ma"],          emoji: "🪶" },
      { n: 8,  word: "plumero",  syllables: ["plu","me","ro"],     emoji: "🧹" },
    ],
    rails: [
      { text: "ni-ño  a-pli-ca-do." },
      { text: "ta-za  con  pla-ti-llo." },
      { text: "ba-la  de  plo-mo." },
      { text: "me-da-lla  de  pla-ta." },
      { text: "so-pla  el  vien-to." },
      { text: "plu-ma  de  pa-lo-ma." },
      { text: "pla-ti-llo  de  lo-za." },
      { text: "plá-ta-no  ma-du-ro." },
      { text: "En  o-to-ño  so-pla  el  vien-to  y  los  ár-bo-les  de  la  pla-za  se  que-dan  sin  ho-jas." },
      { text: "El  plo-mo  es  u-no  de  los  me-ta-les  más  pe-sa-dos  que  se  co-no-cen." },
    ],
    newWords: ["pluma", "plata", "plaza", "plato", "plátano", "plomero"],
    teacherNote: "Primera lección de grupos consonánticos con L. Introduce conceptos de materiales (plata, plomo) y naturaleza (pluma de paloma).",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 34 — BL (bla, ble, bli, blo, blu)
  // Página 46 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 34,
    title: "BL",
    subtitle: "bla · ble · bli · blo · blu",
    type: "blend",
    letter: "bl",
    mainWord: "sa-ble",
    mainEmoji: "⚔️",
    color: "#2980B9",
    colorLight: "#D6EAF8",
    board: {
      letter: "bl",
      topLeft: "bla", topRight: "ble",
      bottomLeft: "bli", bottomCenter: "blo", bottomRight: "blu",
    },
    pillar: [
      { n: 1,  word: "blusa",    syllables: ["blu","sa"],          emoji: "👔" },
      { n: 2,  word: "cable",    syllables: ["ca","ble"],          emoji: "🔌" },
      { n: 3,  word: "sable",    syllables: ["sa","ble"],          emoji: "⚔️" },
      { n: 4,  word: "tabla",    syllables: ["ta","bla"],          emoji: "🪵" },
      { n: 5,  word: "tablero",  syllables: ["ta","ble","ro"],     emoji: "📋" },
      { n: 6,  word: "oblea",    syllables: ["o","ble","a"],       emoji: "🍪" },
      { n: 7,  word: "neblina",  syllables: ["ne","bli","na"],     emoji: "🌫️" },
      { n: 8,  word: "sablazo",  syllables: ["sa","bla","zo"],     emoji: null },
      { n: 9,  word: "hablador", syllables: ["ha","bla","dor"],    emoji: "🗣️" },
    ],
    rails: [
      { text: "co-lor  blan-co" },
      { text: "ca-ma  blan-da" },
      { text: "dí-a  nu-bla-do" },
      { text: "sa-ble  lar-go" },
      { text: "blu-sa  blan-ca" },
      { text: "ca-ble  fir-me" },
      { text: "ta-bla  de  ro-ble" },
      { text: "ta-ble-ro  pin-ta-do" },
      { text: "tem-blor  fuer-te" },
      { text: "El  ro-ble  es  un  ár-bol  muy  al-to  y  su  ma-de-ra  es  muy  du-ra." },
      { text: "La  ser-pien-te  es  un  a-ni-mal  muy  te-mi-ble.  A  ve-ces  tie-ne  pe-le-as  te-rri-bles  con  a-ni-ma-les  fe-ro-ces." },
    ],
    newWords: ["sable", "blusa", "tabla", "blanco", "neblina", "roble", "serpiente"],
    teacherNote: "La serpiente aparece en la lectura final como tema de ciencias naturales.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 35 — GL (gla, gle, gli, glo, glu)
  // Página 47 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 35,
    title: "GL",
    subtitle: "gla · gle · gli · glo · glu",
    type: "blend",
    letter: "gl",
    mainWord: "i-gle-sia",
    mainEmoji: "⛪",
    color: "#2980B9",
    colorLight: "#D6EAF8",
    board: {
      letter: "gl",
      topLeft: "gla", topRight: "gle",
      bottomLeft: "gli", bottomCenter: "glo", bottomRight: "glu",
    },
    pillar: [
      { n: 1,  word: "globo",    syllables: ["glo","bo"],          emoji: "🎈" },
      { n: 2,  word: "iglesia",  syllables: ["i","gle","sia"],     emoji: "⛪" },
      { n: 3,  word: "regla",    syllables: ["re","gla"],          emoji: "📏" },
      { n: 4,  word: "niño glotón", syllables: [], emoji: "😋" },
    ],
    rails: [
      { text: "los  ni-ños  que  to-do  lo  quie-ren  co-mer  son  glo-to-nes." },
      { text: "En  to-das  las  i-gle-sias  hay  cam-pa-nas." },
      { text: "In-gla-te-rra  es  un  pa-ís  de  Eu-ro-pa." },
      { text: "Hay  glo-bos  que  se  e-le-van  muy  al-to." },
      { text: "Mu-chos  glo-bos  pa-san  por  las  nu-bes." },
    ],
    newWords: ["iglesia", "globo", "regla", "glotón", "Inglaterra"],
    teacherNote: "Nombres con GL: Globo, Glorieta, Gustavo, Guillermo.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 36 — FL (fla, fle, fli, flo, flu)
  // Página 48 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 36,
    title: "FL",
    subtitle: "fla · fle · fli · flo · flu",
    type: "blend",
    letter: "fl",
    mainWord: "flo-re-ro",
    mainEmoji: "💐",
    color: "#2980B9",
    colorLight: "#D6EAF8",
    board: {
      letter: "fl",
      topLeft: "fla", topRight: "fle",
      bottomLeft: "fli", bottomCenter: "flo", bottomRight: "flu",
    },
    pillar: [
      { n: 1,  word: "flecha",   syllables: ["fle","cha"],         emoji: "🏹" },
      { n: 2,  word: "flaco",    syllables: ["fla","co"],          emoji: null },
      { n: 3,  word: "flojo",    syllables: ["flo","jo"],          emoji: null },
      { n: 4,  word: "rifle",    syllables: ["ri","fle"],          emoji: null },
      { n: 5,  word: "inflado",  syllables: ["in","fla","do"],     emoji: "🎈" },
      { n: 6,  word: "flores",   syllables: ["flo","res"],         emoji: "🌸" },
      { n: 7,  word: "flecos",   syllables: ["fle","cos"],         emoji: null },
      { n: 8,  word: "flauta",   syllables: ["flau","ta"],         emoji: "🎵" },
    ],
    rails: [
      { text: "Los  ni-ños  fla-cos,  que  no  tie-nen  ga-nas  de  co-mer,  de-ben  ir  a  ver  al  mé-di-co." },
      { text: "Fe-de-ri-co  jue-ga  con  un  glo-bo  y  con  u-na  flau-ta." },
      { text: "El  pi-ca-flor  es  un  pa-ja-ri-to  muy  chi-co  que  se  a-li-men-ta  só-lo  del  ju-go  de  las  flo-res." },
      { text: "Los  ni-ños  flo-jos  no  me-re-cen  re-ga-los.  Los  re-ga-los  son  pa-ra  los  ni-ños  a-pli-ca-dos." },
    ],
    newWords: ["florero", "flauta", "flecha", "flores", "picaflor", "Federico"],
    teacherNote: "Nombres: Fernando, Fermín, Florencia. El picaflor (colibrí) es muy conocido en Chile y América del Sur.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 37 — CL (cla, cle, cli, clo, clu)
  // Página 49 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 37,
    title: "CL",
    subtitle: "cla · cle · cli · clo · clu",
    type: "blend",
    letter: "cl",
    mainWord: "an-cla",
    mainEmoji: "⚓",
    color: "#2980B9",
    colorLight: "#D6EAF8",
    board: {
      letter: "cl",
      topLeft: "cla", topRight: "cle",
      bottomLeft: "cli", bottomCenter: "clo", bottomRight: "clu",
    },
    pillar: [
      { n: 1,  word: "clavo",    syllables: ["cla","vo"],          emoji: "🔨" },
      { n: 2,  word: "clase",    syllables: ["cla","se"],          emoji: "🏫" },
      { n: 3,  word: "clavel",   syllables: ["cla","vel"],         emoji: "🌹" },
      { n: 4,  word: "tecla",    syllables: ["te","cla"],          emoji: "🎹" },
      { n: 5,  word: "claro",    syllables: ["cla","ro"],          emoji: null },
      { n: 6,  word: "ancla",    syllables: ["an","cla"],          emoji: "⚓" },
      { n: 7,  word: "Clotilde", syllables: ["Clo","til","de"],    emoji: "👩" },
      { n: 8,  word: "bicicleta",syllables: ["bi","ci","cle","ta"], emoji: "🚲" },
    ],
    rails: [
      { text: "Los  bu-ques  tie-nen  an-cla." },
      { text: "El  pia-no  tie-ne  mu-chas  te-clas." },
      { text: "Los  cla-ve-les  son  flo-res  muy  lin-das.  Hay  mu-chas  cla-ses  de  cla-ve-les:  hay  cla-ve-les  blan-cos;  hay  cla-ve-les  ro-jos;  hay  cla-ve-les  ro-sa-dos,  y  de  mu-chas  cla-ses  más." },
      { text: "La  ga-lli-na  clue-ca  pi-ca  a  los  ni-ños  que  mo-les-tan  a  los  po-lli-tos." },
    ],
    newWords: ["ancla", "clavel", "bicicleta", "clase", "tecla", "claveles"],
    teacherNote: "La gallina clueca aparece en la lectura final, concepto de cuidado maternal en los animales.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 38 — PR (pra, pre, pri, pro, pru)
  // Página 50 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 38,
    title: "PR",
    subtitle: "pra · pre · pri · pro · pru",
    type: "blend",
    letter: "pr",
    mainWord: "pre-so",
    mainEmoji: "🔒",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "pr",
      topLeft: "pra", topRight: "pre",
      bottomLeft: "pri", bottomCenter: "pro", bottomRight: "pru",
    },
    pillar: [
      { n: 1,  word: "preso",      syllables: ["pre","so"],           emoji: "🔒" },
      { n: 2,  word: "premio",     syllables: ["pre","mio"],          emoji: "🏆" },
      { n: 3,  word: "primo",      syllables: ["pri","mo"],           emoji: "👦" },
      { n: 4,  word: "compro",     syllables: ["com","pro"],          emoji: "🛒" },
      { n: 5,  word: "temprano",   syllables: ["tem","pra","no"],     emoji: "⏰" },
      { n: 6,  word: "profesor",   syllables: ["pro","fe","sor"],     emoji: "👨‍🏫" },
      { n: 7,  word: "problema",   syllables: ["pro","ble","ma"],     emoji: "❓" },
      { n: 8,  word: "apretado",   syllables: ["a","pre","ta","do"],  emoji: null },
      { n: 9,  word: "preguntón",  syllables: ["pre","gun","tón"],    emoji: "🤔" },
      { n: 10, word: "primavera",  syllables: ["pri","ma","ve","ra"], emoji: "🌸" },
    ],
    rails: [
      { text: "Los  po-li-cí-as  lle-van  pre-sos  y  en-cie-rran  a  to-dos  los  que  se  por-tan  mal." },
      { text: "En  pri-ma-ve-ra  flo-re-cen  los  ár-bo-les  y  se  lle-nan  de  ho-jas." },
      { text: "Los  ni-ños  de-ben  le-van-tar-se  tem-pra-no.  Lo  pri-me-ro  que  de-be  ha-cer  un  ni-ño  es  a-se-ar-se;  ce-pi-llar-se  los  dien-tes,  la-var-se  bien  con  ja-bón  y  pei-nar-se." },
      { text: "Un  ni-ño  bien  lim-pio  me-re-ce  pre-mio." },
    ],
    newWords: ["preso", "premio", "primavera", "profesor", "temprano", "problema"],
    teacherNote: "La lección del aseo personal es muy importante pedagógicamente. Las cuatro estaciones se mencionan por primera vez.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 39 — TR (tra, tre, tri, tro, tru)
  // Página 51 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 39,
    title: "TR",
    subtitle: "tra · tre · tri · tro · tru",
    type: "blend",
    letter: "tr",
    mainWord: "tri-go",
    mainEmoji: "🌾",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "tr",
      topLeft: "tra", topRight: "tre",
      bottomLeft: "tri", bottomCenter: "tro", bottomRight: "tru",
    },
    pillar: [
      { n: 1,  word: "trigo",    syllables: ["tri","go"],          emoji: "🌾" },
      { n: 2,  word: "trapo",    syllables: ["tra","po"],          emoji: "🧹" },
      { n: 3,  word: "traje",    syllables: ["tra","je"],          emoji: "👔" },
      { n: 4,  word: "catre",    syllables: ["ca","tre"],          emoji: "🛏️" },
      { n: 5,  word: "estrecho", syllables: ["es","tre","cho"],    emoji: null },
      { n: 6,  word: "cuatro",   syllables: ["cua","tro"],         emoji: "4️⃣" },
      { n: 7,  word: "estrellas",syllables: ["es","tre","llas"],   emoji: "⭐" },
      { n: 8,  word: "trompo",   syllables: ["trom","po"],         emoji: "🎵" },
      { n: 9,  word: "potranca", syllables: ["po","tran","ca"],    emoji: "🐴" },
      { n: 10, word: "tronco",   syllables: ["tron","co"],         emoji: "🌳" },
      { n: 11, word: "patrón",   syllables: ["pa","trón"],         emoji: null },
    ],
    rails: [
      { text: "El  a-ño  tie-ne  cua-tro  es-ta-cio-nes:  pri-ma-ve-ra,  ve-ra-no,  o-to-ño  e  in-vier-no." },
      { text: "En  la  pri-ma-ve-ra  los  ár-bo-les  se  lle-nan  de  flo-res.  En  el  ve-ra-no  ma-du-ra  el  tri-go.  En  el  o-to-ño  se  ca-en  las  ho-jas  de  los  ár-bo-les.  En  el  in-vier-no  llue-ve  mu-cho  y  cae  nie-ve  en  al-gu-nas  par-tes." },
    ],
    newWords: ["trigo", "tronco", "estrellas", "cuatro", "estaciones", "primavera"],
    teacherNote: "Esta lección explica las 4 estaciones del año de forma hermosa. Nombres: Teresa, Tomasa, Timoteo.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 40 — BR (bra, bre, bri, bro, bru)
  // Página 52 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 40,
    title: "BR",
    subtitle: "bra · bre · bri · bro · bru",
    type: "blend",
    letter: "br",
    mainWord: "ca-bra",
    mainEmoji: "🐐",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "br",
      topLeft: "bra", topRight: "bre",
      bottomLeft: "bri", bottomCenter: "bro", bottomRight: "bru",
    },
    pillar: [
      { n: 1,  word: "brazo",    syllables: ["bra","zo"],          emoji: "💪" },
      { n: 2,  word: "libro",    syllables: ["li","bro"],          emoji: "📚" },
      { n: 3,  word: "cobre",    syllables: ["co","bre"],          emoji: "🟠" },
      { n: 4,  word: "timbre",   syllables: ["tim","bre"],         emoji: "🔔" },
      { n: 5,  word: "hombre",   syllables: ["hom","bre"],         emoji: "👨" },
      { n: 6,  word: "pobre",    syllables: ["po","bre"],          emoji: null },
      { n: 7,  word: "sombrero", syllables: ["som","bre","ro"],    emoji: "🎩" },
      { n: 8,  word: "culebra",  syllables: ["cu","le","bra"],     emoji: "🐍" },
    ],
    rails: [
      { text: "La  ca-bra  vi-ve  en  los  ce-rros  y  se  a-li-men-ta  de  yer-bas.  Con  le-che  de  ca-bra  se  ha-cen  muy  ri-cos  que-sos." },
      { text: "Los  me-ses  del  a-ño  son:  E-ne-ro,  Fe-bre-ro,  Mar-zo,  A-bril,  Ma-yo,  Ju-nio,  Ju-lio,  A-gos-to,  Se-tiem-bre,  Oc-tu-bre,  No-viem-bre  y  Di-ciem-bre." },
    ],
    newWords: ["cabra", "libro", "sombrero", "brazo", "cobre", "hombre"],
    teacherNote: "Esta lección presenta los 12 meses del año. El cobre es muy relevante para Chile (mayor exportador mundial). Nombres: Braulio, Benito, Gabriel, Brasil.",
    extras: {
      mesesAno: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
    },
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 41 — CR (cra, cre, cri, cro, cru)
  // Página 53 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 41,
    title: "CR",
    subtitle: "cra · cre · cri · cro · cru",
    type: "blend",
    letter: "cr",
    mainWord: "Cruz",
    mainEmoji: "✝️",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "cr",
      topLeft: "cra", topRight: "cre",
      bottomLeft: "cri", bottomCenter: "cro", bottomRight: "cru",
    },
    pillar: [
      { n: 1,  word: "crema",   syllables: ["cre","ma"],           emoji: "🍦" },
      { n: 2,  word: "cruda",   syllables: ["cru","da"],           emoji: null },
      { n: 3,  word: "lacre",   syllables: ["la","cre"],           emoji: null },
      { n: 4,  word: "recreo",  syllables: ["re","cre","o"],       emoji: "⚽" },
      { n: 5,  word: "cráter",  syllables: ["crá","ter"],          emoji: "🌋" },
      { n: 6,  word: "Cruz",    syllables: ["Cruz"],               emoji: "✝️" },
      { n: 7,  word: "Cristal", syllables: ["Cris","tal"],         emoji: "💎" },
    ],
    rails: [
      { text: "El  vol-cán  es  u-na  mon-ta-ña  por  don-de  sa-le  fue-go." },
      { text: "La  bo-ca  del  vol-cán  se  lla-ma  crá-ter." },
      { text: "Por  el  crá-ter  sa-le  hu-mo  y  la-va  de-rre-ti-da." },
      { text: "Cris-pín  tie-ne  u-na  ca-bra  le-che-ra." },
      { text: "La  le-che  cru-da  sue-le  ser  da-ñi-na." },
      { text: "La  cre-ma  de  le-che  es  muy  bue-na." },
      { text: "des-pués  del  re-cre-o  voy  a  es-cri-bir." },
      { text: "Cris-pín  tie-ne  el  pe-lo  cres-po." },
    ],
    newWords: ["cruz", "cráter", "volcán", "crema", "cristal", "recreo"],
    teacherNote: "El volcán es tema importante en Chile (país volcánico). La imagen principal es una cruz ornamental.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 42 — DR (dra, dre, dri, dro, dru)
  // Página 54 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 42,
    title: "DR",
    subtitle: "dra · dre · dri · dro · dru",
    type: "blend",
    letter: "dr",
    mainWord: "go-lon-dri-na",
    mainEmoji: "🐦",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "dr",
      topLeft: "dra", topRight: "dre",
      bottomLeft: "dri", bottomCenter: "dro", bottomRight: "dru",
    },
    pillar: [
      { n: 1,  word: "madre",      syllables: ["ma","dre"],            emoji: "👩" },
      { n: 2,  word: "padre",      syllables: ["pa","dre"],            emoji: "👨" },
      { n: 3,  word: "piedra",     syllables: ["pie","dra"],           emoji: "🪨" },
      { n: 4,  word: "cuadro",     syllables: ["cua","dro"],           emoji: "🖼️" },
      { n: 5,  word: "Pedro",      syllables: ["Pe","dro"],            emoji: "👦" },
      { n: 6,  word: "madruga",    syllables: ["ma","dru","ga"],       emoji: "🌅" },
      { n: 7,  word: "ladrillo",   syllables: ["la","dri","llo"],      emoji: "🧱" },
      { n: 8,  word: "cuadrado",   syllables: ["cua","dra","do"],      emoji: "◼️" },
      { n: 9,  word: "almendra",   syllables: ["al","men","dra"],      emoji: "🌰" },
      { n: 10, word: "madrina",    syllables: ["ma","dri","na"],       emoji: "👩" },
      { n: 11, word: "padrino",    syllables: ["pa","dri","no"],       emoji: "👨" },
      { n: 12, word: "golondrina", syllables: ["go","lon","dri","na"], emoji: "🐦" },
    ],
    rails: [
      { text: "Las  go-lon-dri-nas  son  u-nas  a-ve-ci-tas  muy  de-li-ca-das.  Cuan-do  lle-ga  el  in-vier-no  vue-lan  mu-cho  has-ta  lle-gar  don-de  ha-ce  ca-lor.  A-tra-vie-san  los  ma-res  en  rá-pi-do  vue-lo  y  sin  per-der-se." },
      { text: "Las  go-lon-dri-nas  se  a-li-men-tan  de  mos-qui-tos  que  ca-zan  du-ran-te  el  vue-lo." },
    ],
    newWords: ["golondrina", "madre", "padre", "piedra", "ladrillo", "almendra"],
    teacherNote: "La golondrina es un ave migratoria conocida en toda América. El texto es hermoso y educativo sobre migración animal. Nombres: Delia, Domingo, Daniel.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 43 — FR (fra, fre, fri, fro, fru)
  // Página 55 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 43,
    title: "FR",
    subtitle: "fra · fre · fri · fro · fru",
    type: "blend",
    letter: "fr",
    mainWord: "fru-ta",
    mainEmoji: "🍎",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "fr",
      topLeft: "fra", topRight: "fre",
      bottomLeft: "fri", bottomCenter: "fro", bottomRight: "fru",
    },
    pillar: [
      { n: 1,  word: "fruta",    syllables: ["fru","ta"],          emoji: "🍎" },
      { n: 2,  word: "fresa",    syllables: ["fre","sa"],          emoji: "🍓" },
      { n: 3,  word: "frito",    syllables: ["fri","to"],          emoji: "🍳" },
      { n: 4,  word: "afrecho",  syllables: ["a","fre","cho"],     emoji: null },
      { n: 5,  word: "azufre",   syllables: ["a","zu","fre"],      emoji: null },
      { n: 6,  word: "Alfredo",  syllables: ["Al","fre","do"],     emoji: "👦" },
    ],
    rails: [
      { text: "La  fru-ta  es  ri-ca.  To-dos  es-ta-mos  muy  con-ten-tos  cuan-do  hay  bas-tan-te  fru-ta.  Hay  fru-ta  que  es  muy  fra-gan-te  cuan-do  es-tá  bien  ma-du-ra.  La  fru-ta  es  bue-na  pa-ra  la  sa-lud." },
      { text: "Cuan-do  los  ár-bo-les  fru-ta-les  es-tán  en-fer-mos  hay  que  e-char-les  a-zu-fre  pa-ra  sa-nar-los.  Tam-bién  hay  que  e-char-les  sa-li-tre  pa-ra  que  den  mu-cha  fru-ta  y  de  bue-na  ca-li-dad." },
      { text: "El  a-zu-fre  es  a-ma-ri-llo  y  de  mal  o-lor.  En  los  vol-ca-nes  hay  mu-cho  a-zu-fre.  La  pól-vo-ra  se  ha-ce  con  a-zu-fre,  sa-li-tre  y  car-bón.  En  Chi-le  hay  mu-cho  a-zu-fre,  sa-li-tre  y  car-bón." },
    ],
    newWords: ["fruta", "fresa", "azufre", "salitre", "carbón", "fragante"],
    teacherNote: "Texto muy informativo sobre agricultura y química natural. Menciona recursos naturales de Chile: azufre, salitre, carbón.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 44 — GR (gra, gre, gri, gro, gru)
  // Página 56 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 44,
    title: "GR",
    subtitle: "gra · gre · gri · gro · gru",
    type: "blend",
    letter: "gr",
    mainWord: "ti-gre",
    mainEmoji: "🐯",
    color: "#8E44AD",
    colorLight: "#E8DAEF",
    board: {
      letter: "gr",
      topLeft: "gra", topRight: "gre",
      bottomLeft: "gri", bottomCenter: "gro", bottomRight: "gru",
    },
    pillar: [
      { n: 1,  word: "grasa",     syllables: ["gra","sa"],          emoji: null },
      { n: 2,  word: "grano",     syllables: ["gra","no"],          emoji: "🌾" },
      { n: 3,  word: "grito",     syllables: ["gri","to"],          emoji: "😱" },
      { n: 4,  word: "gruta",     syllables: ["gru","ta"],          emoji: "🗻" },
      { n: 5,  word: "tigre",     syllables: ["ti","gre"],          emoji: "🐯" },
      { n: 6,  word: "peligro",   syllables: ["pe","li","gro"],     emoji: "⚠️" },
      { n: 7,  word: "sangre",    syllables: ["san","gre"],         emoji: "🩸" },
      { n: 8,  word: "negro",     syllables: ["ne","gro"],          emoji: "⚫" },
      { n: 9,  word: "granizo",   syllables: ["gra","ni","zo"],     emoji: "🌨️" },
      { n: 10, word: "vinagre",   syllables: ["vi","na","gre"],     emoji: "🫙" },
      { n: 11, word: "engrudo",   syllables: ["en","gru","do"],     emoji: "🪣" },
      { n: 12, word: "caligrafía",syllables: ["ca","li","gra","fí","a"], emoji: "✍️" },
    ],
    rails: [
      { text: "El  ti-gre  es  un  a-ni-mal  fe-roz.  El  ti-gre  vi-ve  en  las  sel-vas;  se  co-me  a  o-tros  a-ni-ma-les  y  le  gus-ta  ver  co-rrer  san-gre.  Es-te  a-ni-mal  es  muy  pe-li-gro-so.  En  Á-fri-ca  hay  ti-gres.  Los  in-dios  ne-gros  ca-zan  los  ti-gres  con  gran-des  lan-zas." },
      { text: "El  ti-gre  es  de  co-lor  a-ma-ri-llo  y  tie-ne  su  cuer-po  man-cha-do  con  ra-yas  ne-gras.  Los  bi-go-tes  son  muy  lar-gos  y  tie-ne  gran-des  col-mi-llos." },
      { text: "El  ti-gre  es  un  a-ni-mal  car-ní-vo-ro,  por-que  se  a-li-men-ta  de  car-ne.  El  ga-to  se  pa-re-ce  mu-cho  al  ti-gre." },
    ],
    newWords: ["tigre", "peligro", "caligrafía", "sangre", "vinagre", "granizo"],
    teacherNote: "Texto extenso sobre el tigre como animal carnívoro. Introduce concepto de 'carnívoro'. Nombres: Gregorio, Graciela.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 45 — K
  // Página 57 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 45,
    title: "La K",
    subtitle: "ka · ke · ki · ko · ku",
    type: "consonant",
    letter: "k",
    mainWord: "ki-lo",
    mainEmoji: "⚖️",
    color: "#7F8C8D",
    colorLight: "#F2F3F4",
    board: {
      letter: "k",
      topLeft: "ka", topRight: "ke",
      bottomLeft: "ki", bottomCenter: "ko", bottomRight: "ku",
    },
    pillar: [
      { n: 1,  word: "kilo",      syllables: ["ki","lo"],              emoji: "⚖️" },
      { n: 2,  word: "kiosco",    syllables: ["kios","co"],            emoji: "🏪" },
      { n: 3,  word: "kilómetro", syllables: ["ki","ló","me","tro"],   emoji: "📏" },
      { n: 4,  word: "kaki",      syllables: ["ka","ki"],              emoji: "🎨" },
      { n: 5,  word: "kárate",    syllables: ["ká","ra","te"],         emoji: "🥋" },
    ],
    rails: [
      { text: "En  e-se  pa-que-te  hay  va-rias  co-sas:  un  ki-lo  de  que-so,  un  po-qui-to  de  té,  un  ki-lo  de  ca-fé  y  un  ki-lo  de  pan." },
      { text: "Mi  ca-mi-sa  es  de  co-lor  ka-ki  y  me  que-da  chi-ca." },
      { text: "El  ga-llo  can-ta:  ki-ki-ri-kí." },
      { text: "En  el  kios-ko  ven-den  re-vis-tas  y  ci-ga-rros." },
      { text: "Ki-ló-me-tro.  Un  ki-ló-me-tro  tie-ne  mil  me-tros." },
    ],
    newWords: ["kilo", "kiosco", "kilómetro", "kaki"],
    teacherNote: "La K se usa poco en español nativo pero aparece en palabras de origen extranjero. El pingüino aparece en la página siguiente (güe, güi).",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 46 — X
  // Página 58 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 46,
    title: "La X",
    subtitle: "ax · ex · ix · ox · ux",
    type: "consonant",
    letter: "x",
    mainWord: "ex-a-men",
    mainEmoji: "📝",
    color: "#7F8C8D",
    colorLight: "#F2F3F4",
    board: {
      letter: "x",
      topLeft: "ax", topRight: "ex",
      bottomLeft: "ix", bottomCenter: "ox", bottomRight: "ux",
    },
    pillar: [
      { n: 1,  word: "examen",    syllables: ["e","xa","men"],          emoji: "📝" },
      { n: 2,  word: "éxito",     syllables: ["é","xi","to"],           emoji: "🏆" },
      { n: 3,  word: "excursión", syllables: ["ex","cur","sión"],       emoji: "🏔️" },
      { n: 4,  word: "expreso",   syllables: ["ex","pre","so"],         emoji: "🚂" },
      { n: 5,  word: "taxi",      syllables: ["tax","i"],               emoji: "🚕" },
      { n: 6,  word: "Félix",     syllables: ["Fé","lix"],              emoji: "👦" },
    ],
    rails: [
      { text: "E-se  ni-ño  se  lla-ma  Fé-lix  y  dió  un  ex-a-men  con  mu-cho  é-xi-to." },
      { text: "Mi  a-mi-go  Ca-lix-to  fué  a  u-na  ex-cur-sión  y  se  ex-tra-vió  en  el  ex-tre-mo  de  un  bos-que  muy  ex-ten-so." },
      { text: "Los  tre-nes  ex-pre-sos  son  los  más  rá-pi-dos." },
      { text: "Cuan-do  un  ni-ño  no  co-no-ce  el  sig-ni-fi-ca-do  de  al-gu-na  pa-la-bra  nue-va,  de-be  pe-dir-le  al  pro-fe-sor  que  se  lo  ex-pli-que." },
    ],
    newWords: ["examen", "éxito", "excursión", "extraviado", "expreso", "explicar"],
    teacherNote: "La X tiene varios sonidos en español: 'ks' (examen), 'gs', o 's' (en algunos países). Félix, Calixto son nombres con X.",
  },

  // ══════════════════════════════════════════════════════
  // LECCIÓN 47 — PINGÜINO (GÜE, GÜI) y GE/GI=JE/JI
  // Páginas 59-60 del PDF
  // ══════════════════════════════════════════════════════
  {
    id: 47,
    title: "Pingüino y Gitanos",
    subtitle: "güe · güi · ge · gi",
    type: "consonant",
    letter: "gu_diéresis",
    mainWord: "pin-güi-no",
    mainEmoji: "🐧",
    color: "#34495E",
    colorLight: "#EAECEE",
    board: {
      letter: null,
      custom: ["ja","ge","gi","jo","ju"],
      note: "ge y gi suenan igual que je y ji",
    },
    pillar: [
      { n: 1,  word: "jarro",     syllables: ["ja","rro"],          emoji: "🏺" },
      { n: 2,  word: "Josefina",  syllables: ["Jo","se","fi","na"], emoji: "👩" },
      { n: 3,  word: "jinete",    syllables: ["ji","ne","te"],      emoji: "🏇" },
      { n: 4,  word: "jefe",      syllables: ["je","fe"],           emoji: "👨‍💼" },
      { n: 5,  word: "general",   syllables: ["ge","ne","ral"],     emoji: "🎖️" },
      { n: 6,  word: "gigante",   syllables: ["gi","gan","te"],     emoji: "🏔️" },
      { n: 7,  word: "generoso",  syllables: ["ge","ne","ro","so"], emoji: null },
      { n: 8,  word: "gelatina",  syllables: ["ge","la","ti","na"], emoji: "🍮" },
      { n: 9,  word: "girasol",   syllables: ["gi","ra","sol"],     emoji: "🌻" },
      { n: 10, word: "gitano",    syllables: ["gi","ta","no"],      emoji: null },
    ],
    rails: [
      { text: "Los  pin-güi-nos  son  a-ves  que  vi-ven  en  las  o-ri-llas  del  mar  y  don-de  ha-ce  mu-cho  frí-o." },
      { text: "Es-tos  pá-ja-ros  ca-mi-nan  muy  des-pa-cio  y  no  pue-den  vo-lar  por-que  tie-nen  las  a-las  de-ma-sia-do  cor-tas.  Pe-ro  en  cam-bio,  con  es-tas  a-le-tas  pue-den  na-dar  muy  bien  de-ba-jo  del  a-gua  y  pes-car  mu-chos  pe-ces." },
      { text: "En  la  An-tár-ti-ca  chi-le-na  y  ar-gen-ti-na  hay  mu-chos  pin-güi-nos." },
      { text: "Los  gi-ta-nos  son  gen-te  va-ga-bun-da  que  no  tie-nen  ca-sa.  Tie-nen  un  je-fe  que  man-da  a  to-da  la  tri-bu." },
    ],
    newWords: ["pingüino", "gitano", "cigüeña", "vergüenza", "gelatina", "girasol", "general"],
    teacherNote: "La Ü (con diéresis) indica que la U sí se pronuncia: pingüino, cigüeña, vergüenza. GE y GI suenan igual que JE y JI.",
  },

]; // fin de SILABARIO_DATA

// ══════════════════════════════════════════════════════
// LECTURAS Y CUENTOS
// Páginas 61-75 del PDF
// Estos textos aparecen al final del libro para lectura fluida
// ══════════════════════════════════════════════════════

const SILABARIO_READINGS = [
  {
    id: "el_pan",
    title: "El Pan",
    page: 61,
    emoji: "🍞",
    summary: "Juanito aprende de su mamá cómo se hace el pan: de la tierra viene el trigo, del trigo la harina, de la harina el pan.",
    moraleja: "Para hacer pan se necesita harina; para harina, trigo; para trigo, tierra. Sin tierra y sin trabajo no puede haber pan.",
  },
  {
    id: "la_codicia",
    title: "La Codicia",
    page: 62,
    emoji: "🪣",
    summary: "Oscar quería tener más bolitas que los demás niños. Compró tantas que se le rompió el bolsillo y las perdió todas.",
    moraleja: "La codicia castiga: Oscar se quedó sin jugar, sin bolitas y sin comer dulces.",
  },
  {
    id: "el_lobo_pastor",
    title: "El Lobo Pastor",
    page: 63,
    emoji: "🐺",
    summary: "Un lobo se disfrazó de pastor para llegar al pueblo Redil y comerse los cabritos. Una cabrita inteligente lo engañó enviándolo por un puente roto.",
    moraleja: "La astucia puede vencer a la fuerza bruta. El lobo se ahogó.",
  },
  {
    id: "el_tren",
    title: "El Tren",
    page: 65,
    emoji: "🚂",
    type: "poem",
    summary: "Poema sobre un trencito de madera que corre por el riel, con humo de algodón y el niño como dueño en su sueño.",
  },
  {
    id: "la_desobediencia",
    title: "La Desobediencia",
    page: 66,
    emoji: "😰",
    summary: "Renato desobedeció a su mamá y siguió a un organillero, se perdió en la ciudad y pasó mucho miedo hasta que su mamá lo encontró.",
    moraleja: "Los niños deben obedecer a sus padres para estar seguros.",
  },
  {
    id: "carta_marinita",
    title: "Carta de una niñita a una amiga",
    page: 68,
    emoji: "✉️",
    type: "letter",
    summary: "Margarita le escribe a su amiga Inés contándole que ya sabe leer y escribir, y que le regalaron una muñeca.",
  },
  {
    id: "contestacion_marinita",
    title: "Contestación",
    page: 69,
    emoji: "📬",
    type: "letter",
    summary: "Inés le responde a Margarita diciéndole que su hermano abrió la carta, y que estuvo enferma y no pudo ir al teatro.",
  },
  {
    id: "las_cartas",
    title: "Las Cartas",
    page: 70,
    emoji: "📮",
    type: "poem",
    summary: "Poema sobre cómo escribir una carta correctamente: letra clara, dirección exacta, no abrir cartas ajenas.",
  },
  {
    id: "carta_patricio",
    title: "Carta de un niño a un amigo",
    page: 71,
    emoji: "🚂",
    type: "letter",
    summary: "Patricio le escribe a Juan diciéndole que quiere ser maquinista de tren para manejar una locomotora.",
  },
  {
    id: "contestacion_patricio",
    title: "Contestación de Juan",
    page: 72,
    emoji: "⛵",
    type: "letter",
    summary: "Juan le responde que él quiere ser capitán de buque pero su mamá no quiere. Su hermanita quiere un hermano dueño de una dulcería.",
  },
  {
    id: "paises_hispanoamericanos",
    title: "Los Países Hispanoamericanos",
    page: 73,
    emoji: "🌎",
    summary: "Texto educativo sobre México, Cuba, República Dominicana, América Central, Venezuela, Colombia, Ecuador, Perú, Bolivia, Paraguay, Uruguay, Argentina, Chile y España.",
  },
  {
    id: "el_gigante",
    title: "El Gigante",
    page: 59,
    emoji: "🏔️",
    summary: "En un país de enanos llegó un gigante de buen genio. Los enanos jugaban con él. Un día le robaron el reloj mientras dormía. El gigante perdonó y regaló tela de su bolsillo.",
    moraleja: "La bondad puede existir en quien parece diferente o intimidante.",
  },
];

// ══════════════════════════════════════════════════════
// PAÍSES HISPANOAMERICANOS (del texto final del libro)
// Para la sección de banderas que aparece en páginas 2 y 83
// ══════════════════════════════════════════════════════

const PAISES_HISPANOAMERICANOS = [
  { nombre: "Argentina",           emoji: "🇦🇷", capital: "Buenos Aires",  curiosidad: "Produce mucha carne y trigo. La pampa es inmensa." },
  { nombre: "Bolivia",             emoji: "🇧🇴", capital: "Sucre / La Paz",curiosidad: "Tiene minas de oro, plata y estaño." },
  { nombre: "Chile",               emoji: "🇨🇱", capital: "Santiago",       curiosidad: "El país más largo y angosto del mundo. Produce cobre, salitre y vino." },
  { nombre: "Colombia",            emoji: "🇨🇴", capital: "Bogotá",         curiosidad: "Tiene el café más suave y perfumado del mundo." },
  { nombre: "Costa Rica",          emoji: "🇨🇷", capital: "San José",       curiosidad: "País de América Central con mucha naturaleza." },
  { nombre: "Cuba",                emoji: "🇨🇺", capital: "La Habana",      curiosidad: "Gran isla con palmas y caña de azúcar." },
  { nombre: "Ecuador",             emoji: "🇪🇨", capital: "Quito",          curiosidad: "Tiene animales únicos en las Islas Galápagos." },
  { nombre: "El Salvador",         emoji: "🇸🇻", capital: "San Salvador",   curiosidad: "El país más pequeño de América Central." },
  { nombre: "España",              emoji: "🇪🇸", capital: "Madrid",         curiosidad: "Nuestra Madre Patria. Cristóbal Colón descubrió América en 1492." },
  { nombre: "Guatemala",           emoji: "🇬🇹", capital: "Guatemala",      curiosidad: "País de América Central con rica cultura maya." },
  { nombre: "Honduras",            emoji: "🇭🇳", capital: "Tegucigalpa",    curiosidad: "País de América Central con muchas playas." },
  { nombre: "México",              emoji: "🇲🇽", capital: "Ciudad de México",curiosidad: "Quien sabe leer y escribir debe enseñar a otro." },
  { nombre: "Nicaragua",           emoji: "🇳🇮", capital: "Managua",        curiosidad: "Tiene el único lago del mundo con tiburones." },
  { nombre: "Panamá",              emoji: "🇵🇦", capital: "Ciudad de Panamá",curiosidad: "Tiene el canal más grande hecho por el hombre." },
  { nombre: "Paraguay",            emoji: "🇵🇾", capital: "Asunción",       curiosidad: "Cultiva la yerba mate de buena calidad." },
  { nombre: "Perú",                emoji: "🇵🇪", capital: "Lima",           curiosidad: "El tren más alto del mundo está aquí. 'Vale un Perú'." },
  { nombre: "República Dominicana",emoji: "🇩🇴", capital: "Santo Domingo",  curiosidad: "Parte de una isla al lado de Cuba." },
  { nombre: "Uruguay",             emoji: "🇺🇾", capital: "Montevideo",     curiosidad: "Famoso por sus carnes en conserva y hermosas playas." },
  { nombre: "Venezuela",           emoji: "🇻🇪", capital: "Caracas",        curiosidad: "Rica en petróleo. Nació aquí el Libertador Simón Bolívar." },
];

// ══════════════════════════════════════════════════════
// EXPORTAR (si se usa con módulos ES6 o Node)
// ══════════════════════════════════════════════════════
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SILABARIO_DATA, SILABARIO_READINGS, PAISES_HISPANOAMERICANOS };
}
