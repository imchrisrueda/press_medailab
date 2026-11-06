# Revisión actual · v2 · 20 diapositivas

La revisión del 6 de noviembre amplía formación y experiencia, incorpora logos y países, añade recortes auténticos ampliables y refuerza el contraste. Tiempo previsto: **9:40**; pendiente de ensayo. Esta revisión sustituye el estado anterior de 18 diapositivas que se conserva debajo como historial.

- [x] Contrastar formación UTE/UPM/UCO/UMU y experiencia CAR/NIBIO/UTE/UIDE/PUCE/INIA-CSIC.
- [x] Extraer logos de documentos locales y registrar procedencia.
- [x] Incorporar recortes originales de artículo, memoria de TFM, manuscrito y CV.
- [x] Reescribir transiciones y reforzar el tramo de agricultura digital.
- [x] Generar HTML autónomo con ampliación de recortes y PDF de respaldo.
- [x] Comprobar ambos temas, navegación, notas y ampliación de recortes.
- [ ] Ensayar y seleccionar recortes de contenido con el ponente.

Detalles de las decisiones: [sources/revision-v2.md](sources/revision-v2.md). Se mantiene la limitación de compilación nativa Slidev descrita en README; los entregables comprobados son HTML autónomo y PDF.

---

# Tareas · Presentación personal MEDAILAB

Actualizado: 6 de noviembre de 2026.

Plan rector: [plan.md](plan.md). `[x]` indica trabajo realizado; `[ ]` indica trabajo pendiente. Los estados actuales corresponden exclusivamente a la fase de planificación.

## Primera generación · estado vigente

Esta sección actualiza la lista inicial: el usuario autorizó ampliar a unas 16 pantallas y se produjo un borrador de **18**. Las tareas de ocho pantallas y tres estados médicos del plan inicial quedan sustituidas por el recorrido actual, con pantallas separadas.

- [x] Crear proyecto, requisitos, storyboard y Markdown modular con la API IPS de Presentation Studio.
- [x] Generar 18 pantallas con fuentes, notas y tiempos previstos; guardar guion en `content/guion.md`.
- [x] Integrar las cinco fotografías, plantas y figura espectral de SEMH2026, captura pública de DIGinvasive y collages conceptuales.
- [x] Guardar procedencia y prompt del nuevo collage médico.
- [x] Generar HTML autónomo con navegación, índice, notas, temas y pantalla completa.
- [x] Ejecutar revisión de 36 vistas (18×2 temas) con Chrome y comprobar navegación/índice/notas en dos formatos de ventana.
- [x] Inspeccionar visualmente todas las pantallas y corregir encuadres; repetir capturas después de modificar estilos.
- [x] Generar PDF real desde Chrome y verificar 18 páginas con texto.
- [x] Escribir instrucciones de apertura, edición y regeneración en `README.md`.
- [ ] Resolver el build web de Slidev: bloqueado por `EPERM` al resolver dependencias bajo la restricción de permisos del entorno.
- [ ] Completar la revisión del render Slidev cuando pueda compilarse; las capturas actuales corresponden al HTML autónomo.
- [ ] Inspeccionar el PDF mediante un renderizador independiente.
- [ ] Ensayar con el ponente, revisar el guion y decidir cortes sobre las 18 pantallas.
- [ ] Incorporar fotografías médicas originales y diploma del premio si se quieren sustituir las ilustraciones/rótulos.
- [ ] Cerrar atribuciones institucionales y requisitos de financiación de la versión final.

Las listas siguientes conservan el desglose de planificación inicial; esta sección refleja lo ejecutado y las limitaciones de esta entrega.

## 0. Preparación realizada

### Ajuste de enfoque confirmado

- [x] Fijar **Life of ~~Brian~~ Chris: Robótica, IA y Agricultura Digital** y el tono informal inspirado en la película.
- [x] Reorganizar el relato con aplicaciones médicas y 4:30 de foco agrícola en ocho minutos de exposición.
- [x] Leer ficha del comité y memoria anual DIGITALWEEDS 2025 del expediente indicado; condensar objetivos y avances.
- [x] Localizar referencias primarias de dos trabajos de control de prótesis.
- [x] Registrar el premio SEMH2026 confirmado por Christian y distinguirlo de EWRS 2025.
- [x] Inspeccionar las cinco fotografías de `src/` y proponer usos.
- [x] Identificar los TFM de Data Science señalados por el ponente: Bryan Criollo (bioequivalencia de metformina) y Priscila Guartatanga (enfermedades ocupacionales); retirar la búsqueda basada en una supuesta reutilización de datos de prótesis.
- [x] Ampliar el inventario médico a los siete trabajos dirigidos del CV y las cuatro contribuciones/publicaciones de prótesis y robótica asistencial; registrar páginas, estudiantes y fechas.
- [x] Planificar el capítulo médico con presencia de todos sus ámbitos, incluyendo ambos TFM, rehabilitación, conteo celular, EMG, exoesqueleto y monitoreo de adultos mayores.
- [ ] Implementar los tres estados visuales del capítulo médico y condensar el guion a 1:35, con títulos completos y atribuciones en notas.
- [ ] Revisar los metadatos del segundo artículo médico; distinguir congreso y publicación.
- [x] Contrastar el PDF del CV aportado y localizar el vault activo de Obsidian.
- [x] Incorporar avances de DIGITALWEEDS 2026 desde actividades y capturas del vault; documentar sus límites en `sources/cv_y_avances_2026.md`.
- [x] Incorporar el plan de estancia/TFM acordado con Raquel Martínez el 04/11/2026, distinguiendo planificación y resultados.
- [ ] Contrastar cualquier resultado nuevo de entrenamiento, generación sintética o validación posterior al acta del 04/11 antes de presentarlo como conseguido.
- [ ] Localizar denominación oficial, diploma o foto del premio SEMH2026 para acompañar la confirmación del ponente.
- [ ] Confirmar campaña, fecha, especie y personas de las fotos cuando sea necesario para los pies.
- [x] Generar, inspeccionar y guardar el borrador de portada en `assets/life-of-chris-cover-v1.png`, con prompt y procedencia al lado.
- [x] Registrar fuentes y límites en `sources/enfoque_y_evidencias.md`.
- [ ] Componer el título editable y el tachado de Brian en Slidev.

### Preparación anterior

- [x] Comprobar el workspace de destino y las rutas aportadas.
- [x] Leer las instrucciones y el README de Presentation Studio y las instrucciones IPS.
- [x] Consultar el flujo de producción, los límites de exportación y el estado local documentado de la herramienta.
- [x] Leer la guía de presentaciones y la metodología local «El arte de presentar».
- [x] Revisar contenido, especificación, README, entrada Slidev y estilos de SEMH2026.
- [x] Inspeccionar visualmente una captura de portada de la referencia en modo oscuro.
- [x] Localizar y leer perfil, formación y experiencia de la base factual del CV de agosto de 2026.
- [x] Localizar documentación de DIGinvasive y DigitalWeeds/Momentum; leer su contexto inicial.
- [x] Redactar plan, escaleta de ocho minutos y propuesta visual específica para esta visita.

## 1. Base factual y materiales · Prioridad alta

- [ ] Inventariar fuentes en `sources/` con ruta, fecha, afirmaciones respaldadas y límites de uso.
- [ ] Contrastar la vigencia de afiliación, doctorado y máster/TFM; resolver las diferencias contractuales si aparecen en el relato.
- [ ] Seleccionar cuatro o cinco hitos del CV que expliquen el recorrido, incluida la experiencia docente/internacional pertinente.
- [ ] Revisar los proyectos recientes y elegir dos casos principales; definir la contribución personal y el crédito colectivo en cada uno.
- [ ] Elegir una única evidencia científica de SEMH2026 y conservar unidades, fuente e interpretación correcta.
- [ ] Verificar qué captura pública o autorizada de DIGinvasive puede utilizarse y qué estado representa.
- [x] Concretar el objetivo y el trabajo de la estancia con el acta del TFM del 04/11/2026; el guion final sigue pendiente.
- [ ] Concretar audiencia, fecha, idioma y distribución de preguntas si afectan al formato final.
- [ ] Seleccionar retrato, fotos de campo/laboratorio y logos originales; registrar procedencia y atribuciones.
- [ ] Elegir contacto profesional y enlaces finales; excluir datos personales innecesarios.

Aceptación: cada afirmación central tiene fuente y estado; las lagunas siguen identificadas sin inventar contenido.

## 2. Narrativa y guion · Depende de 1

- [x] Ajustar mensaje nuclear y título al enfoque autobiográfico confirmado; el guion final sigue pendiente.
- [ ] Cerrar ocho diapositivas principales y, solo si hace falta, hasta dos de apoyo.
- [ ] Redactar apertura y cierre literales con voz personal y una invitación específica a conversar.
- [ ] Redactar el guion en tres pistas: visual, verbal y notas de escena; incluir pausas, clics y transiciones.
- [ ] Separar resultados conseguidos, trabajos en marcha y objetivos futuros.
- [ ] Estimar duración y podar hasta ocho minutos; reservar dos de margen.

Aceptación: trayectoria comprensible, capítulo médico y énfasis final en DIGinvasive y DIGITALWEEDS; tono informal y guiños a la película.

## 3. Prototipo visual · Puede avanzar parcialmente junto con 1–2

- [ ] Revisar capturas representativas de contenido y estados interactivos de SEMH2026, además de la portada ya vista.
- [ ] Definir tokens de color, tipografía local y márgenes para el nuevo diseño.
- [ ] Preparar portada, trayectoria y caso científico como prototipo en claro/oscuro.
- [ ] Comprobar el render real, contraste, legibilidad y recorte de fotografías.
- [ ] Fijar la posición discreta de navegación, notas y atribuciones institucionales pertinentes.

Aceptación: identidad propia y composición limpia; la referencia aporta comportamiento y criterios de calidad.

## 4. Implementación IPS/Slidev · Depende de 2–3

- [ ] Leer la skill de creación IPS y los contratos pertinentes antes de generar archivos.
- [ ] Comprobar versiones y dependencias locales; revisar estado del repositorio de herramientas sin alterarlo.
- [ ] Crear el proyecto y scripts dentro de `press_medailab` con referencias reproducibles a la herramienta.
- [ ] Implementar diapositivas modulares, estilos y notas del ponente.
- [ ] Integrar fotografías y evidencias finales con su procedencia.
- [ ] Implementar navegación, índice, pantalla completa, claro/oscuro y dos o tres revelados como máximo.
- [ ] Preparar estados completos para PDF y movimiento reducido.
- [ ] Comprobar y adaptar el empaquetado autónomo de SEMH2026 si es viable; registrar límites concretos si no lo es.

Aceptación: recorrido completo reproducible sin modificar la presentación anterior ni el piloto de IPS.

## 5. Verificación y exportaciones · Depende de 4

- [ ] Compilar el deck y ejecutar los linters/comprobaciones de contenido aplicables.
- [ ] Aplicar build, typecheck y tests del paquete afectado solo si se modifica código de ese paquete.
- [ ] Revisar todas las pantallas y estados en claro/oscuro; guardar capturas en `reports/`.
- [ ] Comprobar 1280×720, 1920×1080 y adaptación a ventana 1024×768.
- [ ] Probar clic, teclado, índice, notas, pantalla completa y repetición/restablecimiento de revelados.
- [ ] Probar movimiento reducido, rutas de recursos y ausencia de errores que impidan el uso.
- [ ] Generar web final y, si se consigue, HTML autónomo; probar este último sin red ni servidor.
- [ ] Exportar PDF real con Slidev, abrirlo y comprobar páginas, fuentes, imágenes y estados completos.
- [ ] Revisar cifras, fechas, nombres, atribuciones y ausencia de detalles internos innecesarios.
- [ ] Registrar pruebas ejecutadas y limitaciones; corregir incidencias antes de entregar.

Aceptación: artefactos abiertos e inspeccionados; ninguna validación estructural se presenta como prueba visual.

## 6. Ensayo y entrega · Depende de 5

- [ ] Hacer una lectura cronometrada con pausas, clics y transiciones.
- [ ] Realizar dos ensayos del ponente y registrar tiempos reales cuando estén disponibles.
- [ ] Ajustar contenido a ocho minutos, conservando dos de margen dentro de los diez.
- [ ] Preparar respuestas breves a preguntas sobre métodos, aportación personal y colaboración.
- [ ] Redactar instrucciones de apertura, controles y respaldo estático.
- [ ] Entregar fuentes editables, presentación interactiva y PDF; indicar cualquier tarea aún pendiente.

Aceptación: la charla puede exponerse con el material entregado y dentro del tiempo disponible.
