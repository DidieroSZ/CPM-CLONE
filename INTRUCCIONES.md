Quiero que realices un REDISEÑO COMPLETO del proyecto actual de CPM.

No estás limitado a conservar la estructura actual del proyecto.

Puedes modificar, reorganizar, reemplazar, crear o eliminar archivos y componentes cuando sea necesario para conseguir un resultado visual y técnicamente mejor.

Sin embargo, existen reglas fundamentales que DEBES respetar:

1. Mantener la identidad y el lenguaje de diseño de CPM.
2. Mantener el lenguaje y stack de desarrollo actual del proyecto.
3. Mantener el código simple, modular, reutilizable y escalable.
4. Utilizar GSAP para las animaciones.
5. Utilizar Lucide para los iconos.
6. Utilizar INFO.md como fuente de información del proyecto.
7. Utilizar las 4 imágenes proporcionadas como referencias visuales y estructurales.
8. Mostrar siempre la información relevante de CPM.
9. Priorizar una experiencia moderna, profesional y visualmente consistente.
10. Evitar sobreingeniería.

==================================================
FASE 0 — NO MODIFICAR NADA
==================================================

Antes de modificar cualquier archivo debes analizar completamente el proyecto.

NO comiences todavía el desarrollo.

Primero analiza:

- estructura actual
- componentes existentes
- pages
- views
- router
- services
- utils
- estilos
- assets
- fuentes
- variables CSS
- dependencias
- package.json
- configuración de Vite
- implementación actual de Lit
- sistema de navegación
- código reutilizable
- componentes que puedan rescatarse
- componentes que deban reemplazarse
- funcionalidades existentes

También debes leer y analizar completamente:

INFO.md

INFO.md contiene información relevante de CPM y debe utilizarse como fuente principal para determinar qué contenido debe aparecer en el sitio.

==================================================
FASE 1 — ANALIZAR LAS 4 REFERENCIAS
==================================================

Analiza las 4 imágenes proporcionadas antes de comenzar a desarrollar.

NO copies literalmente ninguna de ellas.

Utilízalas como referencias para estudiar:

- estructura
- composición
- jerarquía
- navegación
- hero
- distribución de contenido
- uso de imágenes
- cards
- grids
- botones
- tipografía
- espacios
- composición editorial
- interacción
- animaciones
- comportamiento responsive
- ritmo visual
- transiciones
- elementos decorativos
- llamadas a la acción

Debes identificar patrones comunes entre las 4 referencias.

Determina qué elementos pueden ser adaptados al lenguaje visual de CPM.

NO copies:

- branding
- logos
- textos
- identidad visual
- diseños completos
- código
- componentes específicos
- colores que entren en conflicto con CPM

Las referencias son inspiración.

El resultado final debe seguir siendo un sitio de CPM.

==================================================
FASE 2 — ANALIZAR EL LENGUAJE VISUAL DE CPM
==================================================

Antes de diseñar el nuevo sitio debes identificar qué hace que el proyecto actual se vea como CPM.

Analiza especialmente:

- paleta de colores
- tipografías
- tamaños
- pesos
- espaciados
- formas
- bordes
- radios
- botones
- cards
- fondos
- imágenes
- patrones
- composición
- estilo deportivo
- estilo editorial
- identidad visual
- tono general

El nuevo diseño puede evolucionar significativamente.

Puede ser mucho más moderno.

Puede cambiar completamente la estructura de las páginas.

Puede cambiar la distribución de las secciones.

Puede reemplazar componentes existentes.

Puede reorganizar la arquitectura.

Pero NO debe perder el lenguaje visual de CPM.

La meta es:

"CPM rediseñado"

y NO:

"otro sitio inspirado en las referencias".

==================================================
FASE 3 — ANALIZAR INFO.MD
==================================================

INFO.md debe utilizarse para determinar el contenido real del sitio.

Identifica:

- información institucional
- información de las carreras
- eventos
- fechas
- ubicaciones
- categorías
- beneficios
- llamados a la acción
- información importante
- datos relevantes
- información de contacto
- cualquier otro contenido disponible

Utiliza esta información para determinar las secciones necesarias.

Por ejemplo, dependiendo del contenido disponible, pueden existir:

- Hero
- Próximas carreras
- Información de carrera
- Calendario
- Eventos
- Categorías
- Inscripciones
- Beneficios
- Información institucional
- Estadísticas
- Noticias
- Galería
- FAQ
- Contacto

NO crees secciones solamente porque sean comunes en sitios modernos.

Cada sección debe tener una razón.

Debe existir una relación entre:

REFERENCIAS
+
INFO.md
+
IDENTIDAD CPM
+
CONTENIDO EXISTENTE

==================================================
FASE 4 — DEFINIR LA NUEVA EXPERIENCIA
==================================================

Una vez analizado todo lo anterior, determina una nueva arquitectura visual.

Tienes libertad para rediseñar completamente el proyecto.

Puedes:

- cambiar el orden de las secciones
- crear nuevas views
- crear nuevas pages
- reorganizar componentes
- eliminar componentes obsoletos
- modificar componentes existentes
- crear nuevos componentes
- modificar el router
- reorganizar servicios
- reorganizar utilidades
- modificar estilos
- crear nuevos patrones SVG
- crear nuevos elementos visuales
- reutilizar assets
- incorporar nuevas imágenes cuando sea necesario

Pero cada cambio debe tener una razón.

==================================================
FASE 5 — PRESENTAR EL PLAN
==================================================

ANTES de comenzar a modificar archivos, debes mostrarme un plan.

El plan debe incluir:

1. Concepto general del nuevo diseño.
2. Cómo se incorporará el lenguaje visual de CPM.
3. Qué elementos se toman como inspiración de las 4 referencias.
4. Nueva estructura de páginas.
5. Nueva estructura de views.
6. Componentes principales.
7. Qué elementos existentes serán reutilizados.
8. Qué elementos serán reemplazados.
9. Qué elementos serán eliminados.
10. Qué nuevos assets serán necesarios.
11. Estrategia de animaciones GSAP.
12. Uso de Lucide.
13. Estrategia responsive.
14. Cómo se utilizará la información de INFO.md.
15. Nueva estructura de carpetas propuesta.

NO modifiques archivos durante esta fase.

Espera a tener claramente definido el plan antes de iniciar la implementación.

==================================================
FASE 6 — ARQUITECTURA
==================================================

Puedes modificar completamente la estructura actual.

Sin embargo, mantén una arquitectura clara.

La organización preferida es:

components/
views/
pages/
router/
services/
utils/

Donde:

components/
→ componentes pequeños y reutilizables de UI.

views/
→ secciones grandes de la interfaz.

pages/
→ pantallas completas asociadas a rutas.

router/
→ navegación y renderizado de páginas.

services/
→ lógica relacionada con datos, APIs y servicios.

utils/
→ funciones auxiliares y utilidades.

Puedes modificar esta estructura si existe una razón técnica clara.

Pero NO crees una arquitectura innecesariamente compleja.

==================================================
FASE 7 — ESTRUCTURA DE ARCHIVOS
==================================================

Cada componente, view o page debe tener una estructura consistente.

Ejemplo:

components/
└── race-card/
    ├── race-card.js
    └── race-card.css

views/
└── hero/
    ├── hero.js
    └── hero.css

views/
└── upcoming-races/
    ├── upcoming-races.js
    └── upcoming-races.css

pages/
└── home/
    ├── home.js
    └── home.css

Mantén:

nombre de carpeta
=
nombre del JS
=
nombre del CSS

Evita archivos gigantes.

Evita componentes con demasiadas responsabilidades.

==================================================
FASE 8 — MANTENER EL STACK
==================================================

Aunque puedes cambiar completamente la estructura del proyecto:

NO cambies innecesariamente el stack tecnológico.

Si el proyecto utiliza:

- JavaScript vanilla
- LitElement
- Web Components
- Vite
- CSS

mantén ese stack.

NO migres a:

- React
- Vue
- Angular
- TypeScript

salvo que ya formen parte del proyecto y exista una razón clara para utilizarlos.

Mantén el estilo de desarrollo actual.

El rediseño debe ser principalmente:

VISUAL
+
ARQUITECTÓNICO

y no una migración tecnológica.

==================================================
FASE 9 — LIT
==================================================

Si el proyecto utiliza LitElement:

Mantén:

- Web Components
- reactive properties
- render declarativo
- lifecycle methods
- componentes reutilizables

Evita:

- manipulación innecesaria del DOM
- lógica compleja dentro de render()
- componentes monolíticos
- estado global innecesario

Mantén los componentes fáciles de entender.

==================================================
FASE 10 — GSAP
==================================================

GSAP será la librería principal de animaciones.

Utilízalo para crear una experiencia moderna.

Puedes utilizar:

- ScrollTrigger
- timelines
- reveal animations
- hero animations
- stagger
- parallax
- microinteracciones
- hover animations
- counters
- transitions
- entrance animations

Las animaciones deben tener intención.

No quiero:

"animaciones porque sí".

Quiero que las animaciones ayuden a:

- establecer jerarquía
- dirigir la atención
- mejorar la navegación
- generar sensación de movimiento
- reforzar la identidad deportiva de CPM

Mantén las animaciones suaves y profesionales.

También considera:

- performance
- prefers-reduced-motion
- cleanup de animaciones
- lifecycle de Lit

==================================================
FASE 11 — LUCIDE
==================================================

Utiliza Lucide para los iconos.

No crees iconos manualmente si existe un equivalente en Lucide.

Utiliza Lucide para:

- navegación
- botones
- acciones
- indicadores
- flechas
- filtros
- información
- interacción

Mantén consistencia visual.

NO utilices emojis como iconos de interfaz.

==================================================
FASE 12 — DISEÑO MODERNO
==================================================

El nuevo sitio debe sentirse:

- moderno
- deportivo
- dinámico
- editorial
- profesional
- limpio
- premium
- tecnológico cuando corresponda

Debe existir una fuerte jerarquía visual.

Utiliza correctamente:

- espacios negativos
- tipografía
- contraste
- imágenes
- grids
- cards
- líneas
- formas
- patrones
- fondos
- animaciones

Evita saturar la interfaz.

El diseño debe tener respiración.

==================================================
FASE 13 — IDENTIDAD CPM
==================================================

Nunca pierdas el lenguaje visual de CPM.

Aunque cambies completamente el diseño actual:

CPM debe seguir siendo reconocible.

Mantén y evoluciona:

- colores
- tipografías
- personalidad
- estilo deportivo
- composición
- tono visual
- elementos gráficos característicos

Puedes modernizar estos elementos.

Puedes refinarlos.

Puedes reinterpretarlos.

Pero no reemplaces la identidad de CPM por la identidad de las referencias.

==================================================
FASE 14 — IMÁGENES Y ASSETS
==================================================

Puedes:

- reutilizar imágenes existentes
- reorganizar assets
- crear nuevas imágenes
- generar fondos
- crear patrones SVG
- crear formas decorativas
- crear texturas
- utilizar composiciones visuales nuevas

Antes de crear un asset nuevo revisa si ya existe uno reutilizable.

Los nuevos recursos deben mantener la identidad CPM.

==================================================
FASE 15 — INFORMACIÓN RELEVANTE
==================================================

Una regla fundamental:

El sitio debe mostrar información relevante para CPM.

No diseñes una página únicamente basándote en la estética de las referencias.

Cada sección debe responder:

"¿Qué información útil de CPM está mostrando?"

El contenido debe derivarse principalmente de:

INFO.md
+
información existente en el proyecto.

Si una referencia muestra una sección que no tiene sentido para CPM, NO la copies.

Si INFO.md contiene información importante que las referencias no muestran, debes incorporarla si mejora la experiencia.

==================================================
FASE 16 — RESPONSIVE
==================================================

El nuevo diseño debe ser responsive desde el principio.

Debe funcionar correctamente en:

- desktop
- laptop
- tablet
- mobile

No quiero simplemente reducir tamaños en mobile.

La composición debe adaptarse.

Considera:

- navegación
- grids
- imágenes
- tipografía
- botones
- cards
- espaciado
- animaciones
- contenido

==================================================
FASE 17 — CSS
==================================================

Mantén CSS:

- simple
- legible
- modular
- reutilizable

Evita:

- !important innecesario
- hacks
- selectores excesivamente complejos
- duplicación
- estilos globales innecesarios

Reutiliza las variables CSS existentes.

Si existe un sistema de diseño CPM, evolúcionalo.

No crees un sistema paralelo sin necesidad.

==================================================
FASE 18 — COMPLEJIDAD
==================================================

Esta es una regla fundamental:

NO confundas un rediseño grande con una implementación compleja.

Puedes cambiar todo el proyecto.

Pero el código debe seguir siendo sencillo.

Prefiere:

componentes pequeños
+
responsabilidades claras
+
archivos pequeños
+
reutilización

sobre:

componentes gigantes
+
abstracciones innecesarias
+
arquitecturas complejas

Si una función puede resolverse en 20 líneas claras, no la conviertas en una abstracción de 100 líneas.

==================================================
FASE 19 — DESARROLLO
==================================================

Después de mostrar el plan y tener definido el nuevo diseño, comienza la implementación.

Durante la implementación puedes modificar libremente:

- components
- views
- pages
- router
- services
- utils
- styles
- assets

siempre que sea necesario.

No tengas miedo de reemplazar código existente si la implementación anterior ya no es adecuada para el nuevo diseño.

Sin embargo, antes de eliminar una funcionalidad existente verifica que no sea necesaria.

==================================================
FASE 20 — VALIDACIÓN
==================================================

Al terminar:

1. Ejecuta npm run build.
2. Ejecuta tests si existen.
3. Ejecuta lint si existe.
4. Revisa errores.
5. Corrige los errores encontrados.
6. Revisa imports.
7. Revisa rutas.
8. Revisa componentes.
9. Revisa CSS.
10. Revisa responsive.
11. Revisa animaciones.
12. Revisa que INFO.md haya sido utilizado correctamente.
13. Revisa que la información relevante de CPM esté presente.
14. Revisa que no existan componentes innecesariamente complejos.
15. Revisa que no existan archivos innecesarios.
16. Revisa que el diseño mantenga la identidad CPM.

==================================================
FASE 21 — REGLA DE DECISIÓN
==================================================

Cuando tengas que decidir entre:

A) copiar una solución de las referencias

B) adaptar la idea al lenguaje visual de CPM

SIEMPRE elige B.

Cuando tengas que decidir entre:

A) conservar código existente solamente porque ya existe

B) reemplazarlo porque ya no es adecuado para el nuevo diseño

puedes elegir B.

Cuando tengas que decidir entre:

A) crear una arquitectura sofisticada

B) crear una arquitectura simple y modular

SIEMPRE elige B.

Cuando tengas que decidir entre:

A) agregar una dependencia nueva

B) utilizar una herramienta que ya existe

SIEMPRE elige B, salvo que exista una razón técnica clara.

==================================================
OBJETIVO FINAL
==================================================

Quiero un REDISEÑO COMPLETO de CPM.

No quiero una simple modificación de la página actual.

Quiero que utilices las 4 referencias para replantear:

- experiencia
- composición
- jerarquía
- estructura
- navegación
- secciones
- interacción
- animaciones

pero reinterpretándolo completamente dentro del lenguaje visual de CPM.

El resultado debe sentirse:

"CPM, llevado a un nivel visual y técnico mucho más moderno."

No debe sentirse como una copia de ninguna referencia.

==================================================
PRIMERA ACCIÓN
==================================================

NO MODIFIQUES NADA TODAVÍA.

Primero:

1. Analiza todo el proyecto.
2. Lee INFO.md.
3. Analiza las 4 imágenes.
4. Analiza los assets.
5. Analiza la arquitectura actual.
6. Identifica el lenguaje visual de CPM.
7. Identifica qué debe conservarse.
8. Identifica qué puede cambiarse.
9. Define la nueva experiencia.
10. Define la nueva arquitectura.

Después muéstrame un PLAN DE REDISEÑO COMPLETO.

Cuando el plan esté definido, comienza la implementación.