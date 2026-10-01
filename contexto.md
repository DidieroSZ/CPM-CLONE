Quiero que trabajes en este proyecto como un desarrollador frontend senior, pero manteniendo una implementación simple, clara, modular y fácil de mantener.

IMPORTANTE:
Antes de modificar cualquier archivo, analiza completamente el proyecto actual, su estructura, componentes existentes, estilos, sistema de navegación, dependencias y convenciones de desarrollo.

También analiza las 2 imágenes de referencia que te proporcionaré. Estas imágenes corresponden a sitios similares y deben utilizarse únicamente como REFERENCIA VISUAL Y ESTRUCTURAL.

No quiero una copia literal de ninguno de los sitios.

==================================================
1. OBJETIVO
==================================================

Quiero mejorar y completar el sitio de CPM utilizando:

- La estructura y código existente del proyecto.
- El lenguaje visual que ya tiene CPM.
- La información disponible en INFO.md.
- Las 2 imágenes de referencia.

El resultado debe sentirse como una evolución natural del sitio actual de CPM, como un proyecto nuevo o una plantilla diferente.

La prioridad es:

1. Mantener la identidad visual de CPM.
2. Mantener la arquitectura y estilo de desarrollo existentes.
3. Utilizar las referencias para inspiración visual y estructural.
4. Crear una interfaz moderna, limpia y profesional.
5. Mantener el código simple, modular y escalable.
6. Evitar componentes excesivamente grandes o complejos.
7. Evitar sobreingeniería.

==================================================
2. ANÁLISIS PREVIO OBLIGATORIO
==================================================

Antes de modificar archivos:

1. Analiza toda la estructura actual del proyecto.
2. Identifica cómo están organizados los componentes.
3. Identifica cómo se manejan actualmente las páginas y vistas.
5. Identifica cómo se manejan los estilos.
6. Identifica las dependencias instaladas.
7. Identifica si ya existe GSAP.
8. Identifica si ya existe Lucide.
10. Lee completamente INFO.md.
11. Analiza las 2 imágenes de referencia.
12. Analiza el lenguaje visual actual de CPM.
13. Identifica colores, tipografías, espaciados, formas, bordes, botones, cards, layouts y patrones visuales existentes.


==================================================
3. REFERENCIAS VISUALES
==================================================

Las 2 imágenes proporcionadas son referencias de sitios similares.

Úsalas para analizar:

- composición
- jerarquía visual
- distribución de contenido
- estructura de las secciones
- comportamiento del hero
- uso de imágenes
- cards
- botones
- navegación
- transiciones
- espacios negativos
- composición editorial
- interacción
- ritmo visual
- animaciones
- responsive design

NO copies literalmente:

- textos
- logos
- branding
- colores específicos si no corresponden con CPM
- componentes completos
- layouts completos
- código
- identidad visual de otros sitios

La referencia debe servir para inspirar la experiencia y estructura, pero el resultado debe seguir siendo claramente CPM.

==================================================
4. INFO.md
==================================================

Utiliza INFO.md como fuente principal para comprender el contenido y la información que debe tener el sitio.

Analiza:

- información de CPM
- objetivos
- eventos
- carreras
- fechas
- información institucional
- llamados a la acción
- datos relevantes
- contenido disponible

Utiliza esa información para determinar:

- qué secciones necesita la página
- qué contenido debe mostrarse
- qué información debe tener cada sección
- qué contenido debe convertirse en cards
- qué información necesita jerarquía visual

NO inventes información importante que no esté disponible.

Si falta contenido secundario necesario para una composición visual, puedes utilizar textos breves y genéricos como placeholders, pero no inventes datos reales de CPM.

==================================================
5. ARQUITECTURA OBLIGATORIA
==================================================

Todo el código JavaScript debe respetar esta organización:

components/
→ Componentes pequeños y reutilizables de UI.

views/
→ Secciones grandes de la interfaz.

pages/
→ Pantallas completas asociadas a rutas.

router/
→ Lógica de navegación y renderizado de páginas.

services/
→ Lógica relacionada con datos, APIs o servicios.

utils/
→ Funciones auxiliares y utilidades reutilizables.

No coloques archivos JavaScript fuera de estas categorías salvo que la arquitectura existente realmente lo requiera y exista una justificación clara.

==================================================
6. ESTRUCTURA DE COMPONENTES
==================================================

Cada componente, view o page debe estar organizado en su propia carpeta.

Ejemplo:

components/
└── counter/
    ├── counter.js
    └── counter.css

components/
└── button/
    ├── button.js
    └── button.css

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

El nombre de la carpeta, el archivo JS y el archivo CSS debe ser consistente.

Ejemplo:

hero/
├── hero.js
└── hero.css

No mezcles los estilos de múltiples componentes en archivos gigantes si pueden mantenerse separados de manera sencilla.

==================================================
7. COMPONENTES
==================================================

Los componentes deben ser pequeños y reutilizables.

Evita crear componentes gigantes que contengan:

- demasiada lógica
- demasiadas condiciones
- demasiados elementos HTML
- demasiados estilos
- múltiples responsabilidades

Si un componente empieza a crecer demasiado, analiza si una parte puede convertirse en otro componente pequeño.

Ejemplo:

En lugar de:

race-section.js

con cientos de líneas,

preferir:

race-card/
race-list/
race-filter/
race-section/

pero solamente cuando realmente aporte valor.

NO dividas todo innecesariamente.

La prioridad es encontrar un equilibrio entre:

- reutilización
- simplicidad
- legibilidad
- escalabilidad

==================================================
8. LENGUAJE DE DESARROLLO
==================================================

Mantén exactamente el lenguaje de desarrollo actual del proyecto.

Si el proyecto utiliza:

- JavaScript vanilla
- LitElement
- HTML
- CSS
- Vite

continúa utilizando esas tecnologías.

NO migres a:

- TypeScript
- React
- Vue
- Angular
- otro framework

salvo que ya exista en el proyecto.

No introduzcas una nueva arquitectura.

No cambies el stack.

No agregues abstracciones innecesarias.

==================================================
9. LIT / WEB COMPONENTS
==================================================

Si el proyecto utiliza LitElement:

- Mantén Web Components.
- Mantén componentes reactivos.
- Utiliza properties para estado.
- Mantén render() simple y declarativo.
- Evita manipular el DOM manualmente cuando Lit pueda resolverlo.
- Utiliza correctamente connectedCallback y disconnectedCallback.
- Limpia listeners, timers y animaciones cuando el componente se destruya.
- Evita meter lógica de negocio dentro de render().

Mantén el estilo de implementación que ya existe en el proyecto.

==================================================
10. GSAP
==================================================

Utiliza GSAP para las animaciones del sitio.

Las animaciones deben ser:

- elegantes
- modernas
- suaves
- sutiles
- consistentes con el lenguaje visual de CPM

Puedes utilizar GSAP para:

- entradas de elementos
- hero animations
- reveal animations
- scroll animations
- microinteracciones
- transiciones
- hover interactions
- números o contadores cuando tenga sentido

Evita animar absolutamente todo.

No quiero una página sobrecargada de animaciones.

Prioriza:

- jerarquía
- fluidez
- rendimiento
- intención visual

Si GSAP ya está instalado, reutiliza la implementación existente.

No agregues otra librería de animaciones.

==================================================
11. ICONOS
==================================================

Utiliza Lucide para los iconos.

No crees iconos SVG manualmente si existe un icono equivalente en Lucide.

No utilices emojis como sustituto de iconos de UI.

Mantén un estilo de iconografía consistente.

Utiliza iconos principalmente para:

- navegación
- botones
- acciones
- indicadores
- información secundaria
- elementos interactivos

Los iconos no deben utilizarse solamente como decoración innecesaria.

==================================================
12. IMÁGENES Y RECURSOS
==================================================

Puedes reutilizar las imágenes existentes del proyecto.

También puedes crear o incorporar nuevos recursos visuales cuando sea necesario.

Puedes:

- utilizar imágenes existentes
- crear nuevas imágenes
- crear patrones SVG
- crear fondos abstractos
- utilizar formas geométricas
- utilizar máscaras
- utilizar gradientes
- crear elementos decorativos

Siempre deben respetar la identidad visual de CPM.

No introduzcas recursos visuales que parezcan pertenecer a otra marca.

Si una sección necesita una imagen y existe una imagen adecuada en assets, reutilízala.

Antes de agregar nuevos assets, revisa primero los existentes.

==================================================
13. DISEÑO
==================================================

El diseño debe sentirse:

- moderno
- deportivo
- editorial
- profesional
- dinámico
- limpio
- premium cuando corresponda

Pero debe conservar el lenguaje visual existente de CPM.

NO reemplaces completamente el diseño actual.

Evolución > Rediseño total.

Mantén consistencia en:

- colores
- tipografías
- bordes
- radios
- espaciados
- tamaños
- botones
- cards
- fondos
- imágenes
- iconografía

Si el proyecto ya tiene clases utilitarias o sistemas de diseño, reutilízalos.

No crees otro sistema de diseño paralelo.

==================================================
14. RESPONSIVE
==================================================

Todo lo desarrollado debe funcionar correctamente en:

- desktop
- laptop
- tablet
- mobile

No hagas simplemente una versión desktop y después reduzcas tamaños.

Considera desde el inicio:

- composición
- jerarquía
- navegación
- imágenes
- cards
- grids
- botones
- tipografía
- espaciado

En mobile, prioriza la legibilidad y facilidad de interacción.

==================================================
15. CSS
==================================================

Mantén CSS simple y organizado.

Evita:

- selectores excesivamente complejos
- nesting innecesario
- valores duplicados sin razón
- hacks
- !important salvo que sea realmente necesario
- estilos globales innecesarios

Si el proyecto ya utiliza variables CSS, reutilízalas.

Si existe un sistema de colores o variables globales, extiéndelo en lugar de crear otro.

==================================================
16. DATOS Y LÓGICA
==================================================

La lógica relacionada con datos debe ir en:

services/

Las funciones auxiliares reutilizables deben ir en:

utils/

No coloques lógica de negocio compleja dentro de componentes visuales.

Los componentes deben encargarse principalmente de:

- recibir datos
- mostrar datos
- manejar interacciones de UI

==================================================
17. ROUTER
==================================================

Mantén toda la lógica relacionada con navegación dentro de:

router/

Las páginas deben representar pantallas completas.

Las views deben representar secciones grandes.

Los components deben representar piezas reutilizables.

Mantén clara esta separación.



==================================================
19. COMPLEJIDAD
==================================================

REGLA MUY IMPORTANTE:

La solución más simple que cumpla correctamente el objetivo es preferible a una solución técnicamente más sofisticada.

Evita:

- abstracciones innecesarias
- factories innecesarias
- sistemas de configuración complejos
- estados globales innecesarios
- componentes gigantes
- archivos gigantes
- dependencias adicionales
- patrones de diseño que no aporten valor real

Quiero código que otro desarrollador pueda leer y entender rápidamente.



==================================================
22. RESULTADO ESPERADO
==================================================

El resultado final debe parecer una evolución profesional del sitio actual de CPM.

Debe:

- mantener el branding CPM
- mantener el lenguaje visual
- mantener el lenguaje de desarrollo
- mantener la arquitectura
- utilizar la información de INFO.md
- inspirarse en las 2 referencias
- utilizar componentes pequeños
- ser modular
- ser escalable
- ser responsive
- utilizar GSAP para animaciones
- utilizar Lucide para iconos
- reutilizar código existente
- reutilizar assets existentes
- mantener código sencillo
- evitar sobreingeniería