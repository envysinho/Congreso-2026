# Perfil del Diseñador Web

> Documento vivo. Define quién es el diseñador, cómo trabaja y qué espera de los agentes IA que lo asisten. Se complementa con el resto de markdowns en `docs/`.

---

## 1. Identidad

- Diseñador web moderno con criterio de **UI-UX** y de **frontend/backend**.
- Piensa en producto y en sistema, no en pantallas aisladas.
- Domina **Astro** como framework principal y elige librerías por justificación, no por moda.
- Documenta mientras construye, no después.
- Delega a los agentes IA lo ejecutable; retiene las decisiones de diseño, arquitectura y producto.

## 2. Principios rectores

- **Preguntar antes de ejecutar.** Ningún cambio se hace sobre supuestos. Si falta contexto, se pregunta.
- **Claridad antes que velocidad.** Una pregunta bien hecha ahorra cinco iteraciones.
- **El orden es esencial.** Estructura > estilo > detalle. Se respeta la jerarquía.
- **Lo pequeño y verificable gana.** Cambios chicos, commiteados, probados.
- **El contexto es oro.** Sin contexto suficiente, el agente no puede trabajar bien.
- **Decisiones explícitas.** Toda elección de stack, librería o patrón queda escrita en este repo.
- **Lo que no se documenta, no existe.** Un agente nuevo debe poder reconstruir el "por qué" desde `docs/`.

## 3. Forma de trabajar con IA

### El diseñador
- Define el problema y el criterio de aceptación antes de pedir una solución.
- Delega con borde claro: objetivo, restricciones, formato de salida, criterios visuales si aplica.
- Revisa la diff: código, sí; pero también jerarquía, espaciado, consistencia, accesibilidad.
- Mantiene la propiedad del diseño visual, de la arquitectura y de las decisiones de producto.

### El agente IA
- Es un par junior-senior: ejecuta rápido, pregunta cuando hay ambigüedad real.
- No inventa URLs, datos, ni dependencias. Si no sabe, lo dice.
- No ejecuta comandos `npm` salvo pedido explícito del diseñador.
- Mantiene los CSS separados en `src/styles/`; no usa bloques `<style>` dentro de componentes Astro salvo pedido explícito.
- Mantiene los scripts separados en `src/scripts/`; no usa bloques `<script>` dentro de componentes Astro salvo pedido explícito.
- Prefiere editar archivos existentes antes que crear nuevos.
- Comenta código solo cuando aporta. Cero comentarios decorativos por defecto.
- Antes de modificar nada, confirma el plan si el cambio toca más de un archivo o afecta diseño.
- Devuelve un resumen accionable al final de cada tarea.

## 4. Loop de trabajo

1. **Definir** el objetivo de la iteración (1-3 frases).
2. **Acordar** el alcance con el agente: qué se hace, qué no, qué criterios de diseño aplican.
3. **Construir** en cambios chicos.
4. **Verificar** (lint, typecheck, build y, cuando aplica, **revisión visual**).
5. **Documentar** lo que cambió en el `docs/` correspondiente.
6. **Cerrar** con un commit claro cuando aplica.

## 5. Lo que el diseñador hace y lo que no

| Hace                                                | No hace                                       |
| --------------------------------------------------- | --------------------------------------------- |
| Decide el "qué", el "por qué" y el "cómo se ve"     | Delegar el "qué" sin entenderlo              |
| Escribe criterios de aceptación (incluye UI-UX)     | Aceptar la primera respuesta del agente       |
| Revisa diffs: código, diseño, accesibilidad         | Commitear sin leer ni mirar                   |
| Pide contexto cuando falta                          | Asumir que el agente "ya sabe"               |
| Corrige al agente con feedback específico           | Reformular la misma queja tres veces         |
| Mantiene los docs al día                            | Dejar docs desactualizados "para después"    |
| Valida coherencia visual entre páginas              | Aceptar estilos copy-paste entre componentes  |

## 6. Anti-patrones a evitar

- Pedirle al agente que "haga el proyecto entero" sin descomponer.
- Escribir prompts vagos y quejarse de resultados vagos.
- Stack de moda sin justificación documentada.
- README genérico de starter. Si está, se reemplaza.
- Commits tipo `fix`, `wip`, `update` sin contexto.
- **Diseño:** mezclar 3 librerías de UI/estilos sin criterio.
- **Diseño:** inconsistencias de espaciado, tipografía o color entre secciones similares.
- **Diseño:** accesibilidad como "lo vemos al final".
- **Código:** magia sin leer. Si el agente lo escribió, el diseñador lo entiende.

## 7. Métricas de progreso (no vanity)

- ¿Un agente nuevo puede entender el proyecto leyendo solo `docs/`?
- ¿La última decisión de stack tiene un `docs/ADR-*.md` o nota en el doc correspondiente que la justifique?
- ¿El `pnpm build` pasa en limpio desde el clone?
- ¿Hay menos de N TODOs abiertos en el código en cualquier momento?
- ¿Las páginas comparten sistema de diseño (tokens, tipografía, espaciado)?

## 8. Estado del proyecto

> Esta sección se actualiza a medida que el proyecto "congreso" se define. Sirve de ancla para los markdowns complementarios.

- **Dominio:** a definir → `docs/PRODUCT.md`
- **Stack y arquitectura:** a definir → `docs/STACK.md`
- **Sistema de diseño:** a definir → `docs/DESIGN.md`
- **Decisiones (ADR):** a poblar → `docs/ADR-*.md`
- **Despliegue:** a definir
- **Audiencia:** a definir

## 9. Markdowns complementarios

El presente doc trabaja junto a:

- `docs/PRODUCT.md` — qué es, para quién, problema que resuelve.
- `docs/STACK.md` — framework, librerías, estructura de carpetas.
- `docs/DESIGN.md` — tokens, tipografía, color, componentes, accesibilidad.
- `docs/ADR-*.md` — Architecture Decision Records, uno por decisión relevante.
- `docs/CONTENT.md` — modelo de contenido (páginas, secciones, copy).

> La lista se completa a medida que se asignen los markdowns.

---

## Convenciones de los markdowns en `docs/`

- Un documento, un tema. Si crece, se parte.
- Títulos en `##` para secciones, `###` para subsecciones. No más profundo sin razón.
- Tablas para comparaciones, listas para acciones, prosa para razonamiento.
- Todo doc tiene fecha de última actualización al pie si es volátil.
