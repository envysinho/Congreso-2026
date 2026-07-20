# Diseño

> Sistema de diseño del proyecto. Define cómo se ve, cómo se comporta y cómo se construye visualmente. Se complementa con `docs/AGENTS.md`, `docs/PRODUCT.md`, `docs/STACK.md` y `docs/ADR-*.md`.

---

## 1. Principios de diseño

- **Responsivo primero.** Mobile-first. Todo se valida en mobile antes que en desktop.
- **Moderno, sin estridencias.** Identidad visual contemporánea, sin decoraciones gratuitas.
- **Sistema sobre improvisación.** Tokens, componentes reutilizables, cero copy-paste con variaciones.
- **Suave por defecto.** Nada debe sentirse trabado, con lag o con bugs visuales. La performance es criterio de diseño.
- **Mínimo necesario.** Si no fue pedido o requerido, no se agrega. Cada elemento gana su lugar.

## 2. Identidad visual

- **Carácter:** moderno, limpio, directo.
- **Logo:** a definir.
- **Tono visual general:** a definir con referencia (moodboard).

## 3. Color

> Tokens en CSS (variables), nunca hex hardcodeados en componentes.

- **Primario provisional (2026-07-19):** azul eléctrico `#3B82F6`, usado en marca, títulos destacados y CTA. Debe sustituirse por el azul institucional oficial cuando sea confirmado.
- **Estado activo:** verde `#22C55E`, reservado para selección de ponentes, indicadores activos y estados positivos.
- **Secundario:** a definir.
- **Semánticos:** éxito, advertencia, error, info — a definir.
- **Neutros:** escala de grises a definir.
- **Contraste:** WCAG mínimo AA en todo par texto/fondo.
- **Modo oscuro:** a definir si aplica.

### Regla dura

Si un color no está en el sistema, no se usa. No se inventan variantes en el momento.

## 4. Tipografía

- **Familia principal:** **Inter Variable**.
- **Instalación:** `@fontsource-variable/inter` (paquete npm, sin Google Fonts).
- **Escala tipográfica:** a definir (sugerencia: 1.25 o 1.333 — modular scale).
- **Pesos a usar:** a definir (sugerencia inicial: 400, 500, 600, 700).
- **Line-height base:** a definir.
- **Letter-spacing:** a definir (Inter funciona bien con 0 o `-0.01em` en headings grandes).
- **Fallback stack:** `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

## 5. Espaciado y escala

- **Unidad base:** a decidir (recomendado: 4px).
- **Escala sugerida:** 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **Regla:** los espaciados verticales y horizontales entre secciones siguen la escala. No se inventan valores intermedios.

## 6. Layout y grid

- **Enfoque:** mobile-first.
- **Breakpoints sugeridos:**
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px
  - `xl`: 1280px
  - `2xl`: 1536px
- **Contenedor máximo:** a definir.
- **Columnas por breakpoint:** a definir.
- **Gutter:** a definir.

## 7. Componentes

> Filosofía: **componentes reutilizables, no sobrecodear.** Un botón se define una vez y se compone.

### Átomos
- Botón (primario, secundario, ghost, destructivo)
- Input / Textarea
- Badge / Tag
- Icono
- Link

### Moléculas
- Card
- Form field (label + input + mensaje de error)
- Nav item
- Modal / Dialog
- Toast

### Organismos
- Header / Navbar
- Footer
- Sección (contenedor reusable para bloques de página)

### Regla dura

- Cada componente vive en un solo lugar. Se importa, no se duplica.
- Variantes por props, no por copy-paste.

## 8. Iconografía

- **Set:** a definir (recomendado: Lucide, por consistencia y tamaño de bundle).
- **Tamaño base:** 16px / 20px / 24px.
- **Color:** hereda del texto o usa tokens del sistema. Nunca hex directo.
- **Stroke:** a definir según el set elegido.

## 9. Imagery y rendimiento

> La velocidad de carga es parte del diseño, no un detalle técnico.

- **Formatos preferidos:** AVIF → WebP → fallback JPG/PNG.
- **Atributos obligatorios:**
  - `width` y `height` definidos (evita layout shift).
  - `loading="lazy"` en imágenes below the fold.
  - `fetchpriority="high"` en la imagen LCP.
  - `alt` descriptivo (o `alt=""` si es decorativa).
- **Responsive:** `srcset` + `sizes` cuando la imagen cambia de tamaño entre breakpoints.
- **En Astro:** usar el componente `<Image />` de `astro:assets` para transformación automática.
- **Regla:** ninguna imagen sin optimizar llega a producción.

## 10. Movimiento

- **Duración base:** a definir (sugerencia: 150ms para micro, 250ms para transiciones).
- **Easing:** a definir (sugerencia: `cubic-bezier(0.4, 0, 0.2, 1)`).
- **Reduce motion:** respetar `prefers-reduced-motion: reduce` y desactivar animaciones no esenciales.
- **Regla:** si la animación puede trabar el scroll o causar jank, se revisa o se elimina.

## 11. Accesibilidad

- **Objetivo:** WCAG 2.1 AA mínimo.
- **Foco visible:** outline claro en todos los interactivos.
- **Contraste:** 4.5:1 texto normal, 3:1 texto grande.
- **HTML semántico:** `<button>` para acciones, `<a>` para navegación, headings jerárquicos.
- **Navegación por teclado:** todo interactivo debe ser operable sin mouse.
- **Imágenes:** `alt` correcto, decorativas con `alt=""`.
- **Movimiento:** respeta `prefers-reduced-motion`.

## 12. Voz y tono

- **Tono general:** a definir (sugerencia: directo, profesional, sin solemnidad).
- **Voz del producto en UI:** a definir.
- **Errores:** a definir (sugerencia: explica qué pasó y qué hacer, sin culpar al usuario).

## 13. Anti-patrones de diseño

- **Colores fuera del sistema.** Si no está como token, no se usa. Asumimos esta interpretación de "fuera de gama".
- **Hex hardcodeados** en componentes. Solo tokens.
- **Agregar elementos no pedidos.** Si no fue requerido, no se incluye.
- **Sobrecodear.** Si hay un componente, se reusa. No se duplica con variaciones.
- **Imágenes sin optimizar** o sin `width`/`height`.
- **Animaciones que traban** o distraen sin propósito.
- **Inconsistencia entre páginas** (espaciado, tipografía, color).
- **Librerías de UI de más.** Una solución propia antes de sumar dependencia.
- **CSS frameworks pesados** (Tailwind, Bootstrap) salvo decisión explícita en ADR.

---

## Stack visual acordado

- **CSS:** CSS normal (no Tailwind, no CSS-in-JS, no preprocesador innecesario).
- **Componentes:** `.astro` por defecto. `.tsx` cuando se necesite estado o interactividad compleja.
- **Tipografía:** Inter Variable vía `@fontsource-variable/inter`.
- **Imágenes:** `<Image />` de `astro:assets`.

---

## Convenciones

- Este doc se actualiza antes de tomar decisiones de stack visual.
- Si una sección cambia de "a definir" a contenido real, se marca con fecha.
- Todo componente nuevo se documenta en la sección 7.
