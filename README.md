# Platform-ui exercice:
https://platform-ui.herokuapp.com
### Running App:
Clone the project (git clone git@github.com:suxxus/exercise-platform-ui.git)
- npm install

##### run the app locally
- npm start
- open http://localhost:5000

### development
- npm start
- npm run dev

rnning test
npm test

### Overview:

##### Motivación:
Hace para una entrevista de trabajo, como desarrollador FRONT-END, recibí un ejercicio se instaba a que el aspirante al puesto, creará una pequeña aplicación (webapp). Supongo que sería un modo de evaluar los conocimientos técnicos del desarrollador.

Me llegaron unas pautas mínimas que debía cumplir la aplicación y básicamente dejan total libertad de acción para la realización del mismo.

Pues llegado a ese punto me pareció bueno tomarlo como un ejercicio para desarrollar una app que tuviese como base para experimentar diferentes metodologías de trabajo y que me sirva como base para poder probar cosas nuevas que luego pudiese llevar al trabajo que realizamos en el dia a dia.

### Pautas del ejercicio:
Transformar la interfaz de usuario provista en una interfaz completamente funcional. Se trata de un pequeño componente  capaz de crear/editar/borrar métricas.

### Interacciones que deben ser implementadas:

- modo edición
- renombrar la métrica
- eliminar la métrica
- rear una nueva métrica


#### requisitos que deben cumplir:

- Browser support: IE10+, latest 2 versions of Chrome, Firefox, Safari, Opera
- Libertad total en el uso de framework/librería de javascript
- Un plus si se utilizaba un preprocesador para CSS (less/sass/stylus, etc)

### diseño funcional
#### Main view ####
```
company logo
edit mode                user account
+----------+ +----------+ +---------+
| metric   | | metric   | | metric  |
| name     | | name     | | name    |
+----------+ +----------+ +---------+
+----------+ +----------+ +---------+
| metric   | | metric   | | create  |
| name     | | name     | | metric  |
+----------+ +----------+ +---------+
```
----
#### Edition mode ####
```
company logo
exit edit mode        user account
+----------+ +----------+ +----------+
| metric   | | metric   | | metric   |
| name     | | name     | | name     |
|         x| |         x| |         x|
+----------+ +----------+ +----------+
+----------+ +----------+ +----------+
| metric   | | metric   | | create   |
| name     | | name     | | metric   |
|         x| |         x| |         x|
+----------+ +----------+ +--------- +
```
----
#### Interactions ####
```
+----------+              +----------+      each metric has different metadata could be nothing
| metric   |  on hover    | metric   |      or
| name     |              | name     |      monthly/resolution
+----------+              +----------+      or
                                            162 updates
                                            monthly/resolution
                                            or
                                            Limit reached
                                            162 updates
                                            monthly/resolution
```
----
#### Edition mode interactions ####
```
+----------+                +----------+     The metric name becomes editable
| metric   |  on click      | metric   |     Press enter to save
| name     |                | name     |
+----------+                +----------+
+----------+                +----------+     The metric name should change state
| metric   |  on hover      | metric   |
| name     |                | name     |
+----------+                +----------+
+----------+                +----------+     Delete button should change state
|          |  on hover      |          |
|        x |                |         X|
+----------+                +----------+
+----------+                                Removes the metric box
|          |  on click
|        x |
+----------+

 create        on click                     click on "create new metric"
 new metric                                 Adds a new metric box to the list with
                                            editable name focused
```
### Tecnología

> Para su implementación se utilizaron las siguientes tecnologías:

* React
* Redux (to organize the application code)
* Gulp
* Browserify (bundling)
* Eslint (para mantener una coherencia en el código)
* Tapejs (unit testing)
* skin-deep (Test assertion helpers for use with React's shallowRender test utils)
* Babel (for ES6)
* Ramdajs (practical functional library, data immutable)
* jade (for templating)
* sass
* bourbon (mixin library for sass)
* Express
* Freddie (front-end developer server)
* Browsersync (gulp)
* Travis CI (continuous integration)
* Heroku (Deploy)


### Cómo se organiza el resultado del ejercicio

La home está compuesta por 4 secciones principales:

Components Layout (HTML - CSS)
Catálogo de componentes cada uno de los componentes que integran la aplicación maquetados por separado, Cada uno lleva asociado su código HTML, para poder ser utilizado a la hora de hacer el componente en React.
Al tratarse de un layout responsive, su ancho es del 100% el contenedor padre determinará su ancho final.
Algunos de estos componentes llevan asociados un javascript muy simple que sirve para ver su comportamiento, es solo de prueba, no siendo factible su utilización en el componente React.

Metric component layout (HTML - CSS)
El componente metric, compuesto por los sub-componentes del catálogo.


Main layout (HTML - CSS)
El layout de la app


Platform-ui
La aplicación completamente funcional


Secciones secundarias
link to readme


link to clone repo from github (html, css)
link to clone repo from github, (webapp)



### Proceso:

  necesidades -> diseño funcional -> layout -> style -> script -> deploy

##### Diseño gráfico
Mis conocimientos de UX y diseño gráfico no son muy profundos, así que procuró realizar un diseño   simple, utilizando algunos componentes que brinda la librería bourbon. Este aspecto es muy mejorable, tanto a nivel de experiencia de usuario como diseño visual. Ambos procesos son de suma importancia a la hora de desarrollar la app.


##### Layout
Con respecto a el marcado, quería realizar pequeños componentes que tuvieran pocas líneas de código, que fueran fáciles de modificar sin que afectara demasiado a los cambios que indefectiblemente deberán realizarse en el componente React a posteriori. Me decante por jade para los templates. Existe mucha controversia con jade, pero para este proyecto, sus ventajas a la hora de componentizar son de gran ayuda, características como “includes”, “mixins”, “extend”, etc, son para tener en cuenta a la hora de comenzar. De todos modos es un tema en el que sigo investigando, quiero conocer alternativas posibles, que faciliten la tarea entre maquetador y desarrollador.

##### Style
Para css, existen algunos desarrolladores que se inclinan por la inclusión de los estilos en línea, no estoy muy convencido de esa opción. Las desventajas de separar la presentación del estilo, me gustan, y por otro lado me parece más ventajoso darle independencia al maquetador. Así que cada componente tiene su correspondiente archivo .sass completamente independiente. Debido a la dependencia de Bourbon Css, los componentes se extienden para adaptarlos según sea necesario


### Diseño de la app

##### Task runner
dev
para el desarrollo, se hace sobre node, las tareas necesarias se configuran con gulp .Se utiliza Browser-sync (test en navegadores), actualmente configurado para dos entornos uno de desarrollo(3500). Y otro entorno de pre(4500).

dist
realiza las tareas de lint, minificado y copiado de archivos finales, para deploy


Travis-ci
Integración continua, asociado a github, cada vez que se realiza un push al repo, corre las tareas install, postinstall y los test unitarios

Heroku
Asociado al repo de la aplicación, luego de finalizada las tareas de travis-ci,  realiza automáticamente un deploy desde master.

Si se tiene heroku instalado, se puede correr heroku de forma local para comprobar su correcto funcionamiento antes de realizar un deploy.

npm run dist →>  heroku local -->  open http://localhost:4711



#### To do:
login form
implement redux-route
implelemt shouldComponentUpdate



Algunos enlaces que me sirven de ayuda:
