# Stack

> Stack técnico del proyecto. Define con qué se construye, cómo se organiza y bajo qué reglas. Se complementa con `docs/AGENTS.md`, `docs/PRODUCT.md`, `docs/DESIGN.md` y `docs/ADR-*.md`.

---

## 1. Framework

- **Framework principal:** **Astro**.
- **Razón:** sitios rápidos por defecto (islands, SSR/SSG según ruta), buen soporte de `.astro` y `.tsx`, deploy flexible.
- **Decisión registrada en:** ADR cuando se formalice.

## 2. Lenguaje

- **Lenguaje:** **TypeScript** (estricto, con `tsconfig.json` ya en el repo).
- **Convención:** todo archivo nuevo en `.ts`/`.tsx`/`.astro` tipado. Sin `any` salvo justificación explícita.

## 3. Package manager

- **Package manager:** **pnpm**.
- **Lockfile:** `pnpm-lock.yaml` ya presente, no se commitea `package-lock.json` ni `yarn.lock`.
- **Workspace:** `pnpm-workspace.yaml` ya presente, se usa si el proyecto se vuelve monorepo.

## 4. Estructura de carpetas

```
/
├── docs/                 # Markdowns de directrices (AGENTS, PRODUCT, DESIGN, STACK, ADR-*)
├── public/               # Assets estáticos servidos tal cual (favicon, robots.txt)
├── src/
│   ├── assets/
│   │   ├── images/       # Imágenes procesadas por astro:assets
│   │   └── fonts/        # Fuentes locales servidas desde el repo
│   ├── components/       # Componentes .astro y .tsx reutilizables
│   ├── pages/            # Rutas del sitio (file-based routing)
│   ├── scripts/          # Scripts JS/TS de cliente o build
│   ├── styles/           # CSS global, tokens, reset
│   ├── content/          # Content collections (si aplica)
│   └── lib/              # Utilidades, helpers, lógica compartida
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

> Las subcarpetas se crean cuando hace falta, no por anticipado. Las actuales existen o se crearán en ese orden.

## 5. Componentes

- **Por defecto:** `.astro` (sin JS en cliente).
- **Cuando se necesita `.tsx`:** estado, interactividad compleja, o librería que lo requiera.
- **Ubicación:** `src/components/`. Subcarpetas por dominio si crece (`src/components/ui/`, `src/components/sections/`).
- **Regla:** un componente, un archivo. Sin archivos `index.ts` barril salvo necesidad real.

## 6. Estilos

- **CSS normal.** Sin Tailwind, sin CSS-in-JS, sin preprocesador.
- **Organización:**
  - `src/styles/tokens.css` — variables de color, espaciado, tipografía.
  - `src/styles/global.css` — reset, base, layout helpers.
  - Estilos por componente: dentro del propio `.astro` o `.tsx` (scoped).
- **Regla:** los tokens se consumen vía `var(--token)`. Nunca hex en componentes.
- **Tipografía:** Inter Variable, instalada vía `@fontsource-variable/inter`. Se importa una vez en el layout.

## 7. Contenido y datos

> Decisión pendiente.

- **Opciones posibles:**
  - Markdown con content collections de Astro.
  - CMS headless (Sanity, Contentful, Payload, Strapi).
  - API externa.
  - Datos estáticos en `/src/lib` o `/data`.
- **Criterio de elección:** frecuencia de actualización, quién edita, costo de mantenimiento.

## 8. Estado y data fetching

> Solo si aplica.

- **Estado cliente:** preferir URL state o almacenamiento local antes que stores globales.
- **Si hace falta store global:** decidir librería y justificar en ADR.
- **Data fetching en build:** `getStaticPaths` o content collections.
- **Data fetching en runtime:** endpoints de Astro (`src/pages/api/`) si hay backend.

## 9. Imágenes y assets

- **Procesamiento:** `astro:assets` (`<Image />`, `<Picture />`).
- **Ubicación de fuentes locales:** `src/assets/fonts/`.
- **Ubicación de imágenes:** `src/assets/images/`.
- **Imágenes que no se procesan** (favicon, etc.): `public/`.

## 10. Variables de entorno

- **Prefijo público:** `PUBLIC_` (convención de Astro para exponer al cliente).
- **Archivo:** `.env` local, no commiteado. `.env.example` commiteado como referencia.
- **Tipado:** declarar las vars en un `src/env.d.ts` o equivalente para que TS las reconozca.

## 11. Linting y formato

> Decisión pendiente.

- **Candidatos:**
  - **ESLint** con config moderna (flat config).
  - **Prettier** para formato.
  - **Stylelint** para CSS.
- **Criterio:** mínimo que asegure consistencia, sin sobrecargar.
- **Regla:** los agentes IA deben pasar el linter antes de cerrar una tarea.

## 12. Testing

> Decisión pendiente.

- **Opciones según necesidad:**
  - Unit: Vitest.
  - Component: Storybook o Testing Library si hay `.tsx`.
  - E2E: Playwright.
- **Principio:** testear lo que aporta, no por cubrir porcentaje.

## 13. Performance budgets

- **HTML por ruta:** objetivo a definir (recomendado: < 30KB gzipped).
- **JS por ruta:** objetivo a definir (recomendado: < 50KB gzipped para páginas de contenido).
- **Imágenes:** AVIF/WebP, sin servir originales.
- **Métricas objetivo (Core Web Vitals):** a definir (sugerencia: LCP < 2.5s, CLS < 0.1, INP < 200ms).
- **Verificación:** Lighthouse en CI o revisión manual antes de release.

## 14. Deploy

> Decisión pendiente.

- **Candidatos:**
  - **Vercel** — buena DX, soporte nativo de Astro.
  - **Netlify** — similar.
  - **Cloudflare Pages** — edge, muy rápido.
  - **Static hosting propio** (S3, Nginx).
- **Modo de build:** `astro build` → `dist/`.
- **Variables de entorno en deploy:** mismas que locales, configuradas en el panel del provider.

## 15. Decisiones registradas (ADR)

> Toda decisión relevante de stack se documenta como ADR en `docs/ADR-XXXX-nombre.md`.

- ADR a crear (cuando se formalicen):
  - Elección de fuente de contenido (markdown vs CMS).
  - Librería de linter/format.
  - Estrategia de testing.
  - Provider de deploy.
  - Cualquier librería adicional sumada al stack.

---

## Stack actual (resumen)

| Capa                | Elegido                  | Estado      |
| ------------------- | ------------------------ | ----------- |
| Framework           | Astro                    | Confirmado  |
| Lenguaje            | TypeScript               | Confirmado  |
| Package manager     | pnpm                     | Confirmado  |
| Componentes         | `.astro` + `.tsx`        | Confirmado  |
| Estilos             | CSS normal               | Confirmado  |
| Tipografía          | Inter Variable           | Confirmado  |
| Imágenes            | `astro:assets`           | Confirmado  |
| Contenido / datos   | a decidir                | Pendiente   |
| Linter / formato    | a decidir                | Pendiente   |
| Testing             | a decidir                | Pendiente   |
| Deploy              | a decidir                | Pendiente   |

---

## Convenciones

- Este doc se actualiza **antes** de sumar una nueva dependencia al `package.json`.
- Toda dependencia nueva justifica: problema que resuelve, alternativas consideradas, costo.
- Los ADRs referencian secciones de este doc.
