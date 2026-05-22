# 📚 Silabario Hispanoamericano — App Interactiva

Aplicación web para enseñar a leer a niños de 4-6 años, basada en el método del **Silabario Hispanoamericano de Adrián Dufflocq Galdames** (método fónico-sensorial-objetivo-sintético).

---

## ▶️ Cómo abrir la app

### Opción 1 — Abrir directamente (sin instalar nada)
1. Abre el archivo **`index.html`** con Chrome o Edge
2. ¡Listo! La app funciona sin internet (excepto la fuente tipográfica)

### Opción 2 — Con servidor local (recomendado para iPad/tablet en red)
```bash
node server.js
```
Luego abre `http://localhost:3000` en cualquier dispositivo de la misma red WiFi.

---

## 🎓 El método pedagógico

La app respeta estrictamente el método del Silabario:

- **Las vocales primero** — tienen sonido propio, van en la Lección 0
- **Las consonantes son MUDAS** — nunca se pronuncian solas, siempre con una vocal
- **Nunca decir el nombre alfabético** — no "pe", sino el sonido "p" unido a la vocal
- **Tablero** — consonante central rodeada de sus 5 sílabas (pa, pe, pi, po, pu)
- **Pilar** — lista numerada de palabras para practicar lectura
- **Rieles** — frases en rectángulos para leer oraciones completas
- **Progresión estricta** — cada lección solo usa letras ya aprendidas

---

## 📱 Estructura de la app

Cada lección tiene **4 secciones**:

| Sección | Ícono | Descripción |
|---------|-------|-------------|
| Letra   | 📚   | Tablero con la letra y sus sílabas. Tocar para escuchar. |
| Palabras | 📖  | Pilar: lista de palabras con sílabas separadas y emojis. |
| Frases  | 💬   | Rieles: frases completas para leer en voz alta. |
| Juegos  | 🎮   | 3 minijuegos de práctica. |

### Los 3 juegos
1. **¿Cuál suena así?** — Escuchar una sílaba y tocar la correcta
2. **Arma la palabra** — Ordenar las sílabas de una palabra
3. **Toca lo que escuchas** — Escuchar una palabra y tocar la imagen correcta

---

## ⭐ Sistema de progreso

- Cada lección otorga hasta **3 estrellas**
- ⭐ — Completó las 4 secciones
- ⭐⭐ — Además obtuvo ≥70% en los juegos
- ⭐⭐⭐ — Además obtuvo ≥90% sin ayuda extra
- **Las lecciones se desbloquean en orden** — hay que completar una para acceder a la siguiente
- El progreso se guarda automáticamente en el navegador (localStorage)

### Trofeos
- 🎤 **¡Vocalista!** — Completa las vocales
- ⭐ **¡Mis primeras letras!** — Completa lecciones 1-5
- 📚 **¡Lector básico!** — Completa lecciones 1-10
- 🏆 **¡Lector avanzado!** — Completa todas las lecciones
- 🌟 **¡Perfeccionista!** — 5 lecciones seguidas con 3 estrellas

---

## 🗂️ Lecciones implementadas

| # | Letra | Sílabas | Implementada |
|---|-------|---------|:---:|
| 0 | Vocales | a, e, i, o, u | ✅ Completa |
| 1 | P | pa, pe, pi, po, pu | ✅ Completa |
| 2 | L | la, le, li, lo, lu | ✅ Completa |
| 3 | M | ma, me, mi, mo, mu | ✅ Completa |
| 4 | D | da, de, di, do, du | ✅ Completa |
| 5 | T | ta, te, ti, to, tu | ✅ Completa |
| 6 | C | ca, co, cu, que, qui | ✅ Completa |
| 7 | S | sa, se, si, so, su | ✅ Completa |
| 8 | N | na, ne, ni, no, nu | ✅ Completa |
| 9 | J | ja, je, ji, jo, ju | ✅ Completa |
| 10-47 | B, V, F, LL, CH, Ñ, R, RR, Z... | Grupos, diptongos, especiales | ✅ Estructura |

---

## ⚙️ Configuración

Desde el botón ⚙️ en la pantalla principal:
- 🐢▶️🐇 **Velocidad de voz** — lento, normal, rápido
- A / AA / AAA **Tamaño de texto**
- ☀️ / 🌙 **Modo claro / oscuro**
- 👤 **Cambiar nombre y avatar del niño**
- 🔄 **Reiniciar progreso** (con doble confirmación)

---

## 🌐 Compatibilidad

- ✅ Chrome (Windows, Mac, Android)
- ✅ Edge (Windows)
- ✅ Safari (iPhone, iPad)
- ✅ Firefox
- ✅ Funciona offline (sin internet) excepto la fuente tipográfica
- ✅ Optimizado para tablet y móvil (área táctil mínima 56px)

---

## 📁 Estructura de archivos

```
silabario-app/
├── index.html              ← Pantalla principal
├── server.js               ← Servidor local opcional
├── css/
│   ├── styles.css          ← Estilos globales + variables CSS
│   ├── components.css      ← Componentes reutilizables
│   └── animations.css      ← Animaciones CSS
└── js/
    ├── lessons-data.js     ← Datos de las 48 lecciones
    ├── speech.js           ← Web Speech API + efectos de sonido
    ├── progress.js         ← Sistema de estrellas (localStorage)
    ├── mascot.js           ← Duende animado y mensajes
    ├── games.js            ← Los 3 minijuegos
    ├── lesson-view.js      ← Renderizado de la lección
    └── app.js              ← Inicialización y navegación
```

---

## 💡 Consejos para padres y educadores

1. **Siéntese junto al niño** en las primeras lecciones — el método requiere guía adulta
2. **Use el botón "Consejos para adultos"** en cada tablero para ver cómo enseñar esa letra
3. **No saltee lecciones** — el orden es crítico, cada lección construye sobre la anterior
4. **Celebre cada logro** — las estrellas y trofeos son motivación real para el niño
5. **Sesiones cortas** — 15-20 minutos al día son más efectivos que una hora ocasional
6. **La voz del adulto primero** — lea con el niño antes de dejar que lo haga solo
7. **Use el modo lento** si el niño necesita más tiempo para procesar los sonidos

---

*Basado en el Silabario Hispanoamericano de Adrián Dufflocq Galdames, 10ª Edición (1955).*
*App educativa gratuita — sin publicidad, sin datos personales en servidores externos.*
