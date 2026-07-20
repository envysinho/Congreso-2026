# Contenido

> Define el modelo de contenido de la landing del congreso. Documento vivo. Se complementa con `docs/PRODUCT.md`, `docs/DESIGN.md`, `docs/STACK.md` y `docs/ADR-*.md`.

---

## 1. Fuente de Referencia

La referencia inicial es la pagina del ano anterior:

- **URL:** https://ciisic-vii.episundc.pe/
- **Edicion referencial:** VII CIISIC 2025
- **Uso permitido en este proyecto:** extraer estructura, jerarquia, tono y tipos de secciones.
- **Uso no permitido sin confirmacion:** copiar fechas, horarios, sede, ponentes, comites, precios, formularios o enlaces como si fueran datos vigentes.

## 2. Estado de Datos

| Estado | Significado |
| ------ | ----------- |
| Confirmado | Dato valido para la landing actual. |
| Pendiente | Dato requerido, todavia no definido. |
| Heredado 2025 | Dato observado en la pagina anterior; solo sirve como referencia. |

## 3. Identidad del Evento

| Campo | Estado | Contenido |
| ----- | ------ | --------- |
| Nombre corto | Confirmado | `VIII CIISIC`. Confirmado el 2026-07-19. |
| Nombre completo | Pendiente | A definir. Referencia anterior: `VII Congreso Internacional de Ingenieria de Sistemas e Investigacion Cientifica`. |
| Edicion | Confirmado | VIII. Confirmada el 2026-07-19. |
| Ano | Pendiente | A definir. |
| Organizador principal | Pendiente | A definir. Referencia anterior: Facultad de Ingenieria - UNDC. |
| Unidad academica | Pendiente | A definir. |
| Lema o bajada | Pendiente | A definir. Referencia anterior: "La ingenieria de sistemas impulsa la innovacion y la investigacion cientifica, construyendo soluciones que transforman el futuro." |

## 4. Objetivo de la Landing

| Campo | Estado | Contenido |
| ----- | ------ | --------- |
| Objetivo principal | Pendiente | A definir: inscripciones, difusion institucional, postulacion de papers, agenda del evento u otro. |
| CTA principal | Pendiente | A definir. Referencia anterior: `Registro` / `Inscripciones`. |
| CTA secundario | Pendiente | A definir: ver cronograma, call for papers, ponentes, ubicacion u otro. |
| Conversion esperada | Pendiente | A definir: envio de formulario, contacto por WhatsApp, descarga de bases, visita a plataforma externa. |

## 5. Audiencias

| Audiencia | Estado | Necesidad principal |
| --------- | ------ | ------------------- |
| Estudiantes | Pendiente | A definir. |
| Docentes e investigadores | Pendiente | A definir. |
| Profesionales del sector | Pendiente | A definir. |
| Ponentes / autores | Pendiente | A definir. |
| Auspiciadores / instituciones aliadas | Pendiente | A definir. |

## 6. Navegacion Propuesta

La navegacion base toma como referencia la pagina anterior, pero se ajustara cuando el contenido real este cerrado.

| Item | Estado | Destino esperado |
| ---- | ------ | ---------------- |
| Inicio | Confirmado | Hero de la landing. |
| Acerca de | Pendiente | Resumen del congreso, proposito y organizadores. |
| Cronograma | Pendiente | Agenda por dia, hora y bloque. |
| Call for Papers | Pendiente | Bases, fechas, ejes tematicos y envio. |
| Ponentes | Pendiente | Lista de conferencistas confirmados. |
| Sede | Pendiente | Ciudad, direccion, mapa e indicaciones. |
| Contacto | Pendiente | Correo, WhatsApp, redes y responsables. |
| Inscripciones | Pendiente | CTA principal hacia formulario o plataforma. |

## 7. Secciones de la Landing

### Hero

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Titulo | Pendiente | Nombre completo del congreso. |
| Kicker | Pendiente | Nombre corto, edicion o categoria del evento. |
| Bajada | Pendiente | Promesa del evento en 1-2 frases. |
| Fecha visible | Pendiente | Dia(s), mes y ano. |
| Lugar visible | Pendiente | Ciudad, sede o modalidad. |
| CTA principal | Pendiente | Inscribirse / Registrarse / Participar. |
| CTA secundario | Pendiente | Ver cronograma / Enviar paper / Ver ponentes. |
| Visual principal | Pendiente | Foto real, collage, video corto o imagen institucional. |
| Contador | Pendiente | Solo si existe fecha confirmada. |

**Implementación provisional (2026-07-19):** el hero presenta el concepto editorial `El futuro no se espera. Se diseña.` y mantiene el nombre completo del congreso como descriptor institucional. Los CTA apuntan a secciones internas mientras no exista un enlace oficial de registro. Fecha y sede se comunican explícitamente como pendientes; no se muestra contador hasta contar con una fecha confirmada.

### Acerca del Congreso

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Descripcion breve | Pendiente | Que es el congreso y por que importa. |
| Organizacion | Pendiente | Universidad, facultad, escuela, comites. |
| Enfoque academico | Pendiente | Investigacion, innovacion, tecnologia, sistemas u otros ejes. |
| Cifras | Pendiente | Ediciones, ponentes, participantes, paises, papers u otros datos verificables. |

### Ejes Tematicos

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Lista de ejes | Pendiente | A definir. |
| Descripcion por eje | Pendiente | A definir si aplica. |
| Relacion con papers | Pendiente | Confirmar si los ejes tambien organizan el call for papers. |

### Cronograma

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Dias del evento | Pendiente | A definir. |
| Horarios | Pendiente | A definir. |
| Bloques | Pendiente | Inauguracion, conferencias, talleres, concursos, clausura u otros. |
| Modalidad por bloque | Pendiente | Presencial, virtual o hibrida. |
| Archivo descargable | Pendiente | Confirmar si habra PDF/programa oficial. |

### Call for Papers

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Estado de convocatoria | Pendiente | Abierta, por abrir, cerrada o no aplica. |
| Fecha limite | Pendiente | A definir. |
| Lineas de investigacion | Pendiente | A definir. |
| Requisitos | Pendiente | Formato, extension, idioma, plantilla, revision. |
| Enlace de envio | Pendiente | A definir. |
| Publicacion / indexacion | Pendiente | A definir si aplica. |

### Ponentes

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Ponentes confirmados | Pendiente | A definir. |
| Nombre | Pendiente | A definir por ponente. |
| Afiliacion | Pendiente | A definir por ponente. |
| Pais / ciudad | Pendiente | A definir por ponente si aplica. |
| Tema de ponencia | Pendiente | A definir por ponente. |
| Foto | Pendiente | A definir por ponente. |

### Eventos y Concursos

Referencia anterior observada: comparsa sistemica, conversatorio de investigacion, ponencias magistrales, hackathon, concurso de programacion, torneo e-sports, call for papers, reinado sistemico y juegos deportivos.

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Lista vigente | Pendiente | A definir. |
| Responsable | Pendiente | A definir por evento o concurso. |
| Fecha y hora | Pendiente | A definir por evento o concurso. |
| Bases / reglas | Pendiente | A definir si aplica. |
| CTA | Pendiente | Inscripcion, bases, contacto o detalle. |

### Sede

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Ciudad | Pendiente | A definir. Referencia anterior: San Vicente de Canete. |
| Direccion | Pendiente | A definir. Referencia anterior: Av. Mariscal Benavides N 322. |
| Lugar | Pendiente | A definir. Referencia anterior: Casa de la Cultura. |
| Modalidad | Pendiente | Presencial, virtual o hibrida. |
| Mapa | Pendiente | A definir. |
| Indicaciones | Pendiente | A definir. |

### Memorias / Galeria

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Uso en landing actual | Pendiente | Confirmar si se mostraran memorias del ano anterior. |
| Fotos permitidas | Pendiente | A definir. |
| Titulos | Heredado 2025 | Ponencias, reinado, conferencia de prensa, e-sports, pasacalle, dia 3. |
| Funcion | Pendiente | Prueba social, memoria institucional o seccion secundaria. |

### Comites

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Comite general | Pendiente | A definir. |
| Comite academico | Pendiente | A definir. |
| Comite cientifico | Pendiente | A definir. |
| Comite estudiantil | Pendiente | A definir. |
| Cargos | Pendiente | A definir. |
| Fotos | Pendiente | A definir. |

### Inscripciones

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Modalidad de registro | Pendiente | Formulario externo, pagina interna, WhatsApp u otro. |
| Tipos de entrada | Pendiente | Estudiante, docente, profesional, ponente u otros. |
| Precio | Pendiente | A definir si aplica. |
| Fechas de inscripcion | Pendiente | A definir. |
| Requisitos | Pendiente | A definir. |
| Enlace | Pendiente | A definir. |

### Contacto

| Elemento | Estado | Contenido |
| -------- | ------ | --------- |
| Correo | Pendiente | A definir. |
| WhatsApp | Pendiente | A definir. Referencia anterior: +51 949026908. |
| Facebook | Pendiente | A definir. Referencia anterior: facebook.com/fiundc. |
| TikTok | Pendiente | A definir. Referencia anterior: tiktok.com/@fiundc. |
| Responsable | Pendiente | A definir. |

## 8. Copy Base Provisional

Este copy solo funciona como placeholder editorial. No debe publicarse sin validacion.

### Hero

**Titulo provisional:** Congreso Internacional de Ingenieria de Sistemas e Investigacion Cientifica

**Bajada provisional:** Un encuentro academico para compartir investigacion, tecnologia e innovacion desde la ingenieria de sistemas.

### Acerca de

El congreso reune a estudiantes, docentes, investigadores y profesionales para presentar avances, intercambiar experiencias y fortalecer la comunidad academica vinculada a la ingenieria de sistemas.

### CTA

- Inscribirme
- Ver cronograma
- Enviar paper

## 9. Preguntas Abiertas

- Cual es el nombre oficial y la edicion de este ano?
- Cual es la fecha exacta del congreso?
- La sede sera la misma del ano anterior?
- El evento sera presencial, virtual o hibrido?
- Cual sera el CTA principal de la landing?
- Habra call for papers este ano?
- Ya existen ponentes confirmados?
- Se usaran fotos reales del ano anterior?
- Habra precios o categorias de inscripcion?
- Que redes/contactos oficiales deben aparecer?

---

Ultima actualizacion: 2026-07-19
