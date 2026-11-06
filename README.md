# Life of Chris: robótica, IA y agricultura digital

Presentación en español de 20 diapositivas sobre la trayectoria de Christian y su trabajo en robótica, inteligencia artificial y agricultura digital. Incluye una versión interactiva autónoma, un PDF y los materiales de edición y revisión.

## Presentación

Abrir [la presentación interactiva](outputs/life-of-chris.html) en Chrome o Edge. No necesita servidor ni conexión. El [PDF](outputs/life-of-chris.pdf) es el respaldo estático.

20 diapositivas para revisar y recortar. El guion de trabajo está en [content/guion.md](content/guion.md): planificación de 9:40, pendiente de ensayo del ponente. El guion es una propuesta redactada, no declaraciones adicionales confirmadas por Christian.

Controles: flechas, espacio, Enter o clic para avanzar; M para índice; D para claro/oscuro; N para notas; F para pantalla completa; Inicio/Fin y Escape. Pulsa un recorte para ampliarlo (también Enter al enfocarlo); Escape cierra la ampliación. El PDF contiene las pantallas completas y no las notas. La primera versión permanece en outputs/life-of-chris-v1.html y .pdf.

## Edición y generación

`scripts/story.mjs` carga `scripts/story-v2.mjs`, que conserva el contenido, los tiempos y las notas; `scripts/deck.css`, el diseño. Las fuentes IPS/Slidev generadas están en `presentation/slides.md` y `presentation/slides/`.

Desde este directorio, con las dependencias locales de Presentation Studio y del proyecto SEMH2026 disponibles:

```powershell
node --preserve-symlinks --preserve-symlinks-main scripts/generate.mjs
node --preserve-symlinks --preserve-symlinks-main scripts/export-offline.mjs
node --preserve-symlinks --preserve-symlinks-main scripts/review.mjs
```

El generador actualiza los archivos del nuevo deck; editar el contenido maestro antes de regenerar. Los scripts usan rutas de herramientas locales explícitas; el HTML y el PDF entregados son independientes de esas rutas.

## Verificación y pendientes

Se ejecutaron generación y validación estructural IPS, empaquetado autónomo y revisión con Chrome/Playwright. Se inspeccionaron capturas de todas las diapositivas en claro/oscuro; no se detectaron desbordamientos de contenido ni imágenes rotas. Índice, navegación, notas y temas se comprobaron a 1280×720 y 1024×768. La revisión estructural IPS no se usa como certificación visual; la evidencia real está en `reports/captures/` y `reports/browser-review.json`.

El PDF se exportó desde el HTML autónomo con Chrome, no desde Slidev. Se comprobó que contiene 20 páginas de 960×540 puntos, todas con texto. La revisión v2 incluye rasterización independiente con PDFium y revisión de las 20 páginas.

La compilación web de Slidev quedó bloqueada al resolver `@slidev/client` por un error `EPERM` al consultar el directorio padre del usuario. No se modificaron dependencias globales ni la herramienta. El HTML autónomo y su navegación funcionan; no se entrega un build Slidev como validado.

Pendiente: ensayo real, selección de cortes, posibles fotografías originales de robótica médica, requisitos institucionales finales y diploma/denominación oficial del premio. Los collages son ilustraciones conceptuales; las fotografías científicas conservan sus límites de atribución.


La revisión narrativa, instituciones y recortes están documentados en [sources/revision-v2.md](sources/revision-v2.md). El estilo consolidado está en scripts/deck.css; scripts/revision.css conserva los ajustes de la segunda versión.
