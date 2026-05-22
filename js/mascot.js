/* ============================================
   MASCOTA — Duende animado
   ============================================ */

const MASCOT_MESSAGES = {
  welcome:  ["¡Hola! ¡Vamos a leer!", "¡Bienvenido al Silabario!", "¡Hoy vamos a aprender!"],
  correct:  ["¡Muy bien! ⭐", "¡Eso es! 🎉", "¡Correcto! ¡Eres genial!"],
  wrong:    ["¡Casi! Inténtalo de nuevo 😊", "¡No te rindas!", "¡Tú puedes!"],
  complete: ["¡Lo lograste! 🏆", "¡Fantástico! ¡Eres un lector!", "¡Increíble! ¡Sigue así!"],
  idle:     ["¿Seguimos leyendo?", "¡Toca una lección!", "¡Yo te ayudo a leer!"],
};

let _mascotTimeout = null;

function createMascotSVG() {
  return `
<svg viewBox="0 0 80 100" xmlns="http://www.w3.org/2000/svg" class="mascot-svg animate-float" id="mascot-svg">
  <!-- Gorro -->
  <polygon points="40,5 20,35 60,35" fill="#27AE60"/>
  <circle cx="40" cy="5" r="4" fill="#F1C40F"/>
  <rect x="18" y="33" width="44" height="6" rx="3" fill="#1A8A4A"/>
  <!-- Cara -->
  <ellipse cx="40" cy="58" rx="22" ry="22" fill="#F0D080"/>
  <!-- Orejas -->
  <ellipse cx="18" cy="56" rx="6" ry="8" fill="#F0D080"/>
  <ellipse cx="62" cy="56" rx="6" ry="8" fill="#F0D080"/>
  <!-- Ojos -->
  <circle cx="33" cy="52" r="5" fill="white"/>
  <circle cx="47" cy="52" r="5" fill="white"/>
  <circle cx="34" cy="53" r="3" fill="#2C3E50"/>
  <circle cx="48" cy="53" r="3" fill="#2C3E50"/>
  <circle cx="35" cy="52" r="1" fill="white"/>
  <circle cx="49" cy="52" r="1" fill="white"/>
  <!-- Mejillas -->
  <ellipse cx="28" cy="62" rx="5" ry="3" fill="#E8A080" opacity="0.6"/>
  <ellipse cx="52" cy="62" rx="5" ry="3" fill="#E8A080" opacity="0.6"/>
  <!-- Boca sonrisa -->
  <path d="M33 67 Q40 74 47 67" stroke="#A07040" stroke-width="2.5" fill="none" stroke-linecap="round"/>
  <!-- Nariz -->
  <ellipse cx="40" cy="62" rx="3" ry="2" fill="#D4A060"/>
  <!-- Cuerpo -->
  <ellipse cx="40" cy="88" rx="18" ry="14" fill="#27AE60"/>
  <!-- Botones -->
  <circle cx="40" cy="82" r="2" fill="#1A8A4A"/>
  <circle cx="40" cy="90" r="2" fill="#1A8A4A"/>
  <!-- Manos -->
  <ellipse cx="22" cy="82" rx="5" ry="4" fill="#F0D080" transform="rotate(-20,22,82)"/>
  <ellipse cx="58" cy="82" rx="5" ry="4" fill="#F0D080" transform="rotate(20,58,82)"/>
</svg>`;
}

function initMascot(container) {
  if (!container) return;
  container.innerHTML = `
    <div class="mascot-bubble" id="mascot-bubble"></div>
    ${createMascotSVG()}
  `;

  const svg = container.querySelector('#mascot-svg');
  if (svg) {
    svg.addEventListener('click', () => {
      showMascotMessage(pickRandom(MASCOT_MESSAGES.idle), 3000);
      speakInstruction(pickRandom(MASCOT_MESSAGES.idle)).catch(() => {});
    });
  }

  setTimeout(() => showMascotMessage(pickRandom(MASCOT_MESSAGES.welcome), 4000), 1200);
}

function showMascotMessage(text, duration = 3000) {
  const bubble = document.getElementById('mascot-bubble');
  if (!bubble) return;
  clearTimeout(_mascotTimeout);
  bubble.textContent = text;
  bubble.classList.add('visible');
  _mascotTimeout = setTimeout(() => bubble.classList.remove('visible'), duration);
}

function mascotCelebrate() {
  showMascotMessage(pickRandom(MASCOT_MESSAGES.correct), 3000);
  const svg = document.getElementById('mascot-svg');
  if (svg) {
    svg.style.animation = 'celebrate 0.6s ease-in-out';
    setTimeout(() => { svg.style.animation = 'float 3s ease-in-out infinite'; }, 700);
  }
}

function mascotEncourage() {
  showMascotMessage(pickRandom(MASCOT_MESSAGES.wrong), 2500);
}

function mascotComplete() {
  showMascotMessage(pickRandom(MASCOT_MESSAGES.complete), 4000);
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
