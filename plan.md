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

# Plan de presentación personal para MEDAILAB

Fecha: 6 de noviembre de 2026. Estado: enfoque revisado con las indicaciones del ponente y nuevas fuentes.

Título confirmado: **Life of ~~Brian~~ Chris: Robótica, IA y Agricultura Digital**. En Slidev, «Brian» debe conservar el tachado como texto editable y accesible.

## Estado actual · primer borrador generado

Por indicación posterior del usuario se amplió el recorrido a **18 diapositivas visuales**, para recortar sobre una versión tangible. Sustituye el límite inicial de ocho pantallas de las secciones siguientes, que conservan el esquema de partida. El contenido vigente, tiempos y notas están en `scripts/story.mjs` y `content/guion.md`.

Entregas: `outputs/life-of-chris.html` (autónomo e interactivo) y `outputs/life-of-chris.pdf` (18 páginas). Planificación de 525 s, **8:45**, pendiente de ensayo. Se utilizó la API IPS de Presentation Studio para proyecto, requisitos, storyboard, generación y validación estructural; el empaquetado autónomo adapta el enfoque de SEMH2026. La compilación web de Slidev quedó bloqueada por permisos de resolución de dependencias; no bloquea la apertura del HTML entregado. Alcance de pruebas y pendientes en `README.md`.

## 1. Encargo y alcance

Preparar una presentación interactiva de diez minutos de Christian Rueda-Ayala para compartir su trayectoria y su trabajo durante una estancia en MEDAILAB, Universidad de Murcia. Usar `C:/Users/christianr/Desktop/AI_tools/presentation-studio` como herramienta de producción y `C:/Users/christianr/Desktop/semh2026/presentation` como referencia de experiencia de presentación.

Esta primera entrega contiene el plan y las tareas. La generación del deck, el guion completo y las exportaciones pertenecen a las fases siguientes. Toda la producción del nuevo proyecto se guardará en `press_medailab`; las herramientas y SEMH2026 se consultan como referencias.

## 2. Objetivo y audiencia

Audiencia de partida: investigadores y estudiantes del grupo anfitrión, con conocimientos de IA y especialidades diversas. Es una hipótesis de trabajo hasta concretar asistentes y contexto de la sesión.

Objetivo: que el grupo conozca a Christian como persona e investigador, comprenda el hilo que conecta su formación con su trabajo actual y encuentre un punto concreto de conversación o colaboración durante la estancia.

Mensaje: «Mi recorrido conecta mecatrónica, robótica e IA; hoy aplico esa experiencia a la agricultura digital».

Tres actos: mecatrónica y robótica; IA y aplicaciones médicas; agricultura digital como actividad actual. El tono será informal, autobiográfico y con humor inspirado en *Life of Brian*. La película da el marco de la portada y de algunas transiciones; los ejemplos concretos y las fotografías sostienen el relato. La experiencia docente se integrará mediante los trabajos dirigidos pertinentes. El cierre se concentra en DIGinvasive y, sobre todo, DIGITALWEEDS (Momentum); la estancia proporciona el contexto de la charla y una breve invitación final.

No presentar la trayectoria como un abandono lineal de la agricultura hasta llegar al presente: el trabajo de fin de carrera ya trataba identificación de cultivos y malezas por visión artificial. La robótica, la salud y la agricultura se entrecruzan. Contar cómo se amplían las herramientas y cómo la agricultura acaba siendo el foco actual.

Al terminar, la audiencia debería poder explicar un problema de investigación de Christian, distinguir un resultado de un trabajo en desarrollo y proponer una conversación vinculada a la estancia. La invitación concreta se redactará cuando se conozcan sus objetivos.

## 3. Evidencia disponible y lagunas

### Fuentes locales consultadas

| Fuente | Uso previsto | Precaución |
|---|---|---|
| `C:/Users/christianr/Documents/codex/2026-08-10/referenced-chatgpt-conversation-this-is-an/outputs/base_factual_cv_christian_rueda_ayala_2026-08-10_v3.md` | Perfil, formación, docencia, experiencia internacional y proyectos | Base consolidada de agosto; contrastar los estados vigentes en noviembre |
| `C:/Users/christianr/Desktop/semh2026/presentation/semh2026_contenido_diapositivas.md` y `semh2026_guion_oral.md` | Caso espectral y trayectoria doctoral | Mantener la separación entre resultados foliares, bandas simuladas y objetivos en campo |
| `C:/Users/christianr/Desktop/semh2026/presentation/semh2026_ips/` | Markdown modular, CSS, notas, exportaciones y documentación de controles | Referencia técnica, no plantilla de identidad institucional |
| `semh2026_ips/reports/captures/offline-dark-01.png` dentro de la referencia | Portada inspeccionada visualmente | La revisión visual completa de la referencia sigue pendiente |
| `C:/Users/christianr/Desktop/diginvasive_doc/output/qa_editables_intermediate_sources/01_resumen_institucional/01_dossier_tecnico_plataforma.md` | Caso de desarrollo geoespacial DIGinvasive y atribución técnica | Expediente sujeto a validación institucional; seleccionar evidencia pública o autorizada |
| `C:/Users/christianr/Desktop/documentacion_momentum_2026/README.md` | Localización de documentación DigitalWeeds/Momentum | Es una guía documental, no evidencia de resultados de investigación |
| `C:/Users/christianr/Desktop/AI_tools/presentation-studio/README.md`, `docs/WORKFLOWS.md` y `docs/ESTADO_LOCAL_2026-11-06.md` | Flujo IPS/Slidev y límites de exportación | Distinguir capacidades implementadas, demostrativas y experimentales |
| `C:/Users/christianr/Downloads/CMNT24_2025/Entrega_Comision_MNT24_INIA_01/` | Memoria DIGITALWEEDS 2025, objetivos, actividades y evidencias | El documento del comité fechado en 2026 describe la anualidad 2025; no acredita por sí solo avances nuevos de 2026 |
| Artículos de prótesis en Mutis y Data and Metadata | Aplicaciones médicas, control neuronal y comparación de controladores | Referencias y límites en `sources/enfoque_y_evidencias.md`; distinguir fecha de congreso y publicación |
| `src/DSC04890.JPG`, `src/DSC_0047.JPG`, `src/DSC_0047_1.JPG`, `src/DSC_0147.JPG`, `src/DSC_0173.JPG` | Cinco fotografías aportadas e inspeccionadas | Describir lo visible; fecha, personas y campaña concreta pendientes de identificación |
| Confirmación del ponente en esta conversación | Premio al mejor trabajo presentado en SEMH2026 | No confundir con el premio al mejor póster EWRS 2025; denominación oficial pendiente de diploma o programa |
| `C:/Users/christianr/Documents/CVN/cv_CRA2020.pdf` | Contraste directo de formación, robótica médica, publicaciones y trabajos dirigidos | Contiene información hasta 2025 pese a su nombre; discrepancia de fecha final PUCE con la base consolidada |
| `C:/Users/christianr/Desktop/tracework/tracework` | Vault de Obsidian: avances 2026 y plan del TFM del 04/11/2026 | Usar actividades y evidencias fechadas; los informes mensuales heredados tienen cobertura parcial. Síntesis en `sources/cv_y_avances_2026.md` |

La base del CV permite seleccionar hitos en mecatrónica (UTE), automática y robótica (UPM), percepción artificial, experiencias en NIBIO, docencia en Ecuador e investigación en INIA-CSIC. También documenta el doctorado en UCO y el máster de IA en UMU. Las fechas y el estado final se cotejarán antes de escribirlos en pantalla.

No asumir acceso íntegro a conversaciones anteriores: reconstruir el contexto con fuentes comprobables. Existe una diferencia entre la descripción contractual de 2024 en la base del CV y el dossier DIGinvasive; resolverla si se utilizan esas fechas o categorías. Para la charla bastará probablemente «INIA-CSIC desde 2024», tras contraste.

### Datos que hay que concretar para el contenido final

- Objetivo y ventana de estancia localizados en el acta del 04/11/2026: trabajo de clasificación y generación sintética con Raquel Martínez; noviembre, ventana prevista 1–28. Concretar solo cambios posteriores o detalles necesarios para el guion.
- Estado actual del doctorado, máster/TFM y proyectos que deban aparecer.
- Una motivación o anécdota personal que Christian quiera contar; el marco humorístico y el título ya están confirmados.
- Avances 2026 contrastados en Obsidian: campañas, procesamiento geomático, automatización parcial y análisis espectral; el plan actual de IA consta el 04/11. Queda pendiente cualquier resultado posterior al plan o evidencia de entrenamiento/validación ya ejecutados.
- Perfil de asistentes, idioma definitivo (por defecto, español), fecha y si los diez minutos incluyen preguntas.
- Retrato y fotografías seleccionadas, logos oficiales y contacto profesional final.

La búsqueda de materiales y el prototipo visual pueden avanzar mientras se resuelven estos puntos. No atribuir a MEDAILAB líneas, resultados, personas u objetivos sin evidencia. Si se incorpora información externa del grupo, verificarla entonces en fuentes institucionales.

## 4. Relato y escaleta propuesta

Título confirmado: **Life of ~~Brian~~ Chris: Robótica, IA y Agricultura Digital**.

Ocho diapositivas principales, con 8:00 de exposición y 2:00 de margen dentro de los diez minutos. El margen absorbe pausas, interacción e imprevistos; no implica prometer un turno completo de preguntas. Si la sesión incluye preguntas, reservar parte del margen antes de la frase final. Si hay un turno posterior formal, adaptarse al formato del anfitrión.

| Nº | Tiempo | Propósito y contenido | Recurso visual / interacción propuesta |
|---|---|---|---|
| 1 | 0:00–0:30 | Life of ~~Brian~~ Chris | Collage generado inspirado en comedia británica y título editable; presentación personal breve |
| 2 | 0:30–1:35 | Empecé por la mecatrónica | UTE, UPM, robótica y percepción; incluir los primeros trabajos agrícolas |
| 3 | 1:35–3:10 | También hubo prótesis… y datos de salud | Tres estados: robótica y rehabilitación; señales y dispositivos; IA en salud. Incluir los siete trabajos dirigidos y los trabajos de prótesis/brazo asistencial con rótulos breves |
| 4 | 3:10–3:50 | Y las plantas seguían ahí | Experiencia en visión agrícola y transición al foco actual en INIA-CSIC; fotografía de trabajo con dron |
| 5 | 3:50–4:55 | DIGinvasive: poner el problema en el mapa | Plataforma de vigilancia geoespacial, aportación técnica propia y crédito colectivo; captura autorizada |
| 6 | 4:55–6:00 | DIGITALWEEDS: qué quiero conseguir | Propósito y cuatro objetivos en pocas palabras, con fotografía del problema en campo |
| 7 | 6:00–7:40 | DIGITALWEEDS: lo que he hecho y lo que sigue en Murcia | Estado 1: campañas 2026, procesamiento reproducible e hito SEMH2026. Estado 2: plan del TFM, clasificador → generación sintética → filtro y expertos; mostrarlo como trabajo por desarrollar |
| 8 | 7:40–8:00 | Continuará… en agricultura digital | Foto de campo, contacto e invitación breve a conversar en MEDAILAB |
| — | 8:00–10:00 | Margen de exposición y diálogo según formato | Sin añadir contenido obligatorio |

La agricultura digital ocupa 4:30 de los ocho minutos; el capítulo médico, 1:35. Este último se organiza en tres estados automáticos dentro de la diapositiva 3, activados con un único avance: aproximadamente 35 s para robótica y rehabilitación, 35 s para señales y dispositivos, y 25 s para IA en salud. Mostrar todos los ámbitos mediante rótulos breves y dejar títulos completos, estudiantes y fechas en notas. En movimiento reducido y PDF, reunir los ámbitos en una composición estática legible. La diapositiva 6 explica el proyecto y la 7 sus avances, con dos estados progresivos para evitar saturación. La estancia es el contexto y una breve invitación final; el desenlace se concentra en el trabajo agrícola actual.

Para cada caso: problema → contribución de Christian → evidencia → límite o siguiente paso. Los dos proyectos agrícolas reciben el mayor desarrollo. Las referencias médicas completas y el detalle metodológico pasan a notas o a un máximo de dos diapositivas de apoyo.

### Contenido del capítulo médico

- **Control neuronal de una prótesis transfemoral**, Mutis (2023): conexión entre señales musculares y movimiento. Presentar como trabajo de ingeniería y coautoría; no atribuir validación clínica.
- **Design and Comparison of Controllers for a Robotic Transfemoral Prosthesis**: comparación de controladores. El CV cita AENIT 2024; se ha localizado también su publicación en Data and Metadata. Contrastar metadatos antes de fijar el año de publicación.
- **TFM dirigido de Bryan Criollo, PUCE**: «Desarrollo e implementación de un modelo de segmentación en perfiles de disolución utilizando técnicas de machine learning para determinar el factor de similitud (f2) en un estudio de bioequivalencia in vitro para metformina clorhidrato». Ejemplo de IA aplicada al ámbito farmacéutico, confirmado por el ponente para este relato. Condensar en pantalla como «Machine learning para analizar perfiles de disolución de metformina». No atribuirle datos de prótesis ni resultados clínicos.
- **TFM dirigido de Priscila Guartatanga, PUCE**, 01/08/2023–23/04/2024: «Modelo de predicción de enfermedades ocupacionales utilizando técnicas de aprendizaje automático y análisis de datos». Incluir junto al de Bryan en el estado de IA en salud.
- **Rehabilitación de cadera y rodilla**, Diego Miranda, UTE, 2022–2023: sistema mecatrónico para estiramiento muscular y movimiento articular bilateral.
- **Conteo celular en placas tumorales con inmunohistoquímica**, Francisco Estrella, UTE, 2021: integración de un sistema de conteo de marcadores KI.
- **Clasificación de señales electromiográficas con redes neuronales**, Erick Sola, UTE, 2021: movimiento de extremidades inferiores bajo carga.
- **Controlador neuronal de fuerza para un exoesqueleto de extremidad inferior**, César Moya, UTE, 2021.
- **Manilla inteligente para monitoreo y seguimiento de adultos mayores**, Joseline Naranjo, UTE, 2021.
- **Diseño de un brazo robótico asistencial para personas con discapacidad** y **Diseño mecánico de una prótesis transfemoral**, trabajos presentados en CICI 2023.

Agrupación visual: «Prótesis · brazo asistencial · rehabilitación · exoesqueleto»; «Señales EMG · monitoreo de adultos mayores»; «Conteo celular · enfermedades ocupacionales · bioequivalencia». Conservar en notas los siete trabajos dirigidos y las cuatro contribuciones/publicaciones relacionadas. No contarlos como once proyectos independientes: las publicaciones pueden estar vinculadas a desarrollos compartidos. El inventario completo con estudiantes, fechas y páginas del CV está en `sources/cv_y_avances_2026.md`.

### DIGITALWEEDS en pocas palabras

Nombre documentado: **Nuevas herramientas digitales para el control eficiente de malas hierbas invasoras**, programa Momentum.

Propósito: combinar drones, sensores, IA y herramientas geoespaciales para identificar, caracterizar y cartografiar *Amaranthus palmeri* y apoyar su manejo.

Cuatro objetivos condensados desde la memoria: **obtener datos y productos geomáticos; ampliar el entrenamiento con imágenes sintéticas; detectar y cartografiar con IA; llevar la identificación a una app móvil**. Son objetivos del proyecto; no presentar todos como terminados ni afirmar ahorros de herbicida ya demostrados.

Avances documentados en la memoria 2025: revisión del estado del arte; dos campañas experimentales; adquisición multitemporal y firmas espectrales; protocolos de vuelo y calidad; herramientas Multi Altitude Check y Multispectral Imagery Processing Toolkit; trabajo en productos geomáticos y difusión. En ese corte, el procesado multiespectral tenía incidencias de mapeo de bandas. Su resolución y el estado vigente requieren evidencia posterior.

Hito de 2026: presentación del trabajo espectral en SEMH2026 y **premio al mejor trabajo presentado**, confirmado por Christian. Separar el reconocimiento del resultado científico y del premio al mejor póster EWRS 2025. La memoria anual 2025, aunque figure en un expediente fechado en 2026, no acredita por sí sola resultados nuevos de 2026.

El vault sí documenta avances posteriores: vuelos de finales de junio en Cataluña y de julio en CITA Albelda; normalización fenológica; revisión del procesamiento de ortomosaicos y protocolos de comparación; automatización parcial con Orthomation/Palmeri; trabajo espectral en octubre. Condensarlos en «datos de campo y procesamiento reproducible» para el relato oral. La comparación Metashape–PIX4Dmapper es un diseño metodológico, no un ganador experimental demostrado.

Conexión con la estancia: el acta del 4 de noviembre con Raquel Martínez plantea un clasificador de imágenes nadir de tres especies, seguido de generación sintética, filtrado por umbrales y evaluación por tres expertos. La posible mejora del clasificador al incorporar las imágenes sintéticas es una extensión por evaluar. Este TFM propio de IA en UMU se distingue de los TFM dirigidos en Data Science en PUCE. Los detalles y fuentes quedan en `sources/cv_y_avances_2026.md`.

En el caso espectral: no convertir R² o η² en exactitud predictiva; distinguir reflectancia foliar, multiespectral simulado e imágenes de campo. Las etapas 2027–2028 de SEMH2026 son objetivos de aquella planificación, no resultados conseguidos.

## 5. Identidad visual propuesta

Dirección revisada: **cartel de comedia y álbum de una trayectoria investigadora**. Portada con collage original inspirado en *Life of Brian*: papel cálido, recortes y una escena absurda que conecte investigador, robot, dron y plantas. Componer el título y el tachado de Brian en Slidev. La imagen generada se trata como ilustración, nunca como fotografía de una experiencia real.

Humor autobiográfico en apertura, transiciones y cierre. No hace falta conocer la película para seguir el relato. En el capítulo médico, mantener el respeto a los usuarios de prótesis. Las fotografías y la evidencia científica sostienen el cuerpo de la charla; los guiños no añaden contenido obligatorio.

| Elemento | Propuesta |
|---|---|
| Formato | 16:9; probar también proyección y ventana 4:3 |
| Fondo claro | Marfil `#F5F2EA`; texto `#172C34` |
| Fondo oscuro | Azul profundo `#101D26`; texto `#F5F2EA` |
| Acentos claros | Azul petróleo `#126C77` y cobre `#9B482D` |
| Acentos oscuros | Turquesa `#6CD4D0` y cobre claro `#F1AD83` |
| Tipografía | Título con carácter de cartel y fuente local disponible; cuerpo sans legible, con Segoe UI como respaldo |
| Composición | Una idea y una imagen o evidencia dominante por pantalla; evitar mosaicos de tarjetas |
| Imágenes | Collage generado para portada; originales de `src/` para trabajo de campo, dron, plantas y ensayo; captura del sistema |
| Identidad institucional | Logos oficiales discretos y proporcionados donde correspondan; verificar requisitos de financiación |
| Movimiento | Transiciones breves; revelados que ayuden a explicar; respetar movimiento reducido |

Son tokens iniciales, no contrastes certificados: comprobar legibilidad y combinaciones reales. No recolorear logos oficiales. No copiar la cabecera de congreso ni su franja de patrocinadores; incorporar las atribuciones pertinentes a cada trabajo.

De SEMH2026 se recuperarán la legibilidad, notas del ponente, avance por clic, índice discreto, doble modalidad y estados estáticos completos. La nueva identidad adopta el tono personal y cómico confirmado.

Las cinco fotos se han inspeccionado: `DSC_0047_1.JPG` muestra preparación de un dron en equipo; `DSC_0147.JPG`, un dron en vuelo sobre un ensayo; `DSC04890.JPG`, disposición de macetas; `DSC_0047.JPG` y `DSC_0173.JPG`, vegetación y malas hierbas en cultivo. Confirmar fecha, campaña, especie y personas antes de escribir pies específicos.

## 6. Interacción y entrega técnica

Motor: Presentation Studio / IPS con Slidev. Antes de implementar, leer el workflow de creación y los contratos vigentes de IPS; inspeccionar dependencias y estado del repositorio sin modificarlo. Usar los recursos locales disponibles; mantener configuración y scripts del nuevo deck dentro de este workspace.

Interacciones previstas: navegación por teclado y clic, índice, tema claro/oscuro, pantalla completa y notas del ponente. Limitar los revelados esenciales a dos o tres momentos. No es necesario añadir vídeo ni una demostración en red para cumplir el encargo.

Entrega objetivo: fuentes editables y web interactiva local. Se intentará además un HTML autónomo equivalente al de SEMH2026, reutilizando su enfoque de empaquetado después de comprobar dependencias y portabilidad. Ese HTML es una capacidad de la implementación de referencia; no se presupone que IPS lo genere automáticamente.

Respaldo: PDF real con el estado completo de cada diapositiva y pósteres cuando proceda. Conservar la información esencial sin animación ni conexión. La ruta demostrativa `exportPresentation` no acredita una exportación PDF real; usar Slidev y comprobar el archivo resultante. No se requiere PowerPoint.

Estructura prevista, a crear durante la implementación:

```text
press_medailab/
  plan.md
  task.md
  sources/                 # Inventario y evidencias seleccionadas
  content/                 # Escaleta y guion de tres pistas
  src/                     # Fotografías originales aportadas, ya disponibles
  presentation/            # slides.md, slides/, estilos y configuración
  assets/                  # Fotografías y recursos autorizados
  scripts/                 # Compilación, empaquetado y revisión
  outputs/                 # Web/HTML y PDF definitivos
  reports/                 # Capturas y verificaciones
```

## 7. Secuencia de trabajo y criterios de paso

1. **Cerrar la base factual.** Inventariar CV, proyectos y recursos; identificar contribuciones propias y contrastar estados. Salida: ficha breve y matriz afirmación–fuente–estado. Paso: ningún dato central sin respaldo o sin marcar pendiente.
2. **Cerrar la narrativa.** Ajustar ocho pantallas, primer y último enunciado, dos casos y conexión real con la estancia. Guion de unas 900–1.050 palabras como punto de partida, subordinado al ensayo. Paso: duración objetivo de ocho minutos con pausas y clics incluidos.
3. **Prototipar el estilo.** Preparar portada, trayectoria y caso científico en claro/oscuro. Paso: inspección del render real, jerarquía clara y fotografías adecuadas.
4. **Construir la presentación.** Implementar el resto en IPS/Slidev; integrar fuentes, notas y estados de impresión. Paso: recorrido completo funcional y fuentes editables organizadas.
5. **Validar y empaquetar.** Revisar contenido, render, interacción y exportaciones reales. Compilar el deck y ejecutar comprobaciones pertinentes de contenido. Si se modifica código de un paquete, aplicar sus gates de build, typecheck y tests. Paso: sin errores que impidan uso y sin afirmar verificaciones no ejecutadas.
6. **Ensayar y entregar.** Medir al menos dos recorridos; retirar contenido antes de reducir tipografía. El ensayo real del ponente queda pendiente hasta que ocurra; una lectura estimada del agente no lo sustituye. Salida: versión presentable, respaldo e instrucciones de apertura.

## 8. Aceptación final

- Se conserva el título exacto y el tachado de Brian, el tono informal y el marco visual de comedia.
- Se incluyen mecatrónica, robótica, aplicaciones médicas e IA; la agricultura digital ocupa la mayor parte del relato.
- DIGinvasive y DIGITALWEEDS están diferenciados; objetivos y avances de Momentum se explican por separado.
- Se incorpora el premio SEMH2026 confirmado por el ponente, distinguiéndolo de EWRS 2025.
- El recorrido principal dura aproximadamente ocho minutos en ensayo, dentro de los diez concedidos.
- Se entiende quién es Christian, qué aporta personalmente en dos trabajos y qué quiere compartir durante la estancia.
- Fechas, afiliaciones, métricas y estados cuentan con fuentes; los objetivos futuros se identifican como tales.
- Los contenidos visibles no incluyen datos personales del CV ajenos a la charla ni detalles internos de los proyectos.
- Claro y oscuro, navegación, índice, notas, revelados y movimiento reducido se comprueban en el artefacto real.
- Texto y recursos no presentan recortes o solapamientos en 1280×720 y 1920×1080; comprobar adaptación a ventana 1024×768.
- La entrega principal abre con instrucciones reproducibles; si se entrega HTML autónomo, se prueba sin red y sin servidor.
- El PDF abre en un lector, contiene las ocho páginas principales y cualquier apoyo identificado, y conserva toda la evidencia esencial.
- Las tareas no ejecutadas o dependientes de información se mantienen pendientes en `task.md`.
