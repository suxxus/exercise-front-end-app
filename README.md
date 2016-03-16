# Platform-ui exercise
***personal exercise to study front-end development technologies***
* Standard ES6 modules using Babel + browserify
* React + jsx + Redux
* gulp

## Demo:
* application: https://platform-ui-app.herokuapp.com/
* layout: https://platform-ui.herokuapp.com/

## Clone the repo & install:
```
git clone git@github.com:suxxus/exercise-front-end-app.git
npm install 
```
## Scripts:
The `package.json` file comes with the following scripts

`npm run <name of script>`
* `start` runs the app  (http://localhost:5000)
* `dist` generates a distribution version, placed at server
* `dev` runs a dev console that reports lint and unit tests. 
* `devb` launch a dev server providing the app at build 
* `test` run provided unit test

## Overview:
### Motivation:
Some time ago, I received an exercise, it's part of the recruitment process  to evaluate the skills as front-end developer, specially oriented at the services that the company offer.

The job was not interested at that time. But I took it as an opportunity to gain knowledge about some technologies that do not use in everyday life , and to do things from the beginning to the end with total freedom.

#### Front end technical exercise description:
> The goal of this exercise is to turn the UI design we provide into a fully functional UI. It’s a small component in charge of creating/editing/deleting metrics corresponding to a
SaaS provider.
All interactions defined in the document should be implemented: 
 * Editing mode toggler 
 * Rename metric 
 * Delete metric 
 * Create new metric
 
#### Prerequisites:
* Browser support: IE10+, latest 2 versions of Chrome, Firefox, Safari, Opera 
* You can use the JavaScript framework/libs of your choice. 
* You don’t need to, but using a CSS pre/postprocessor will be appreciated. 
* You have to use images, but we don’t want them as separate files. 
* There is no time limit, but obviously we’ll take time into account. So please send us your exercise as soon as you’re done. 
* It’s a webapp not a website. If you need to take semantic or architectural decisions, keep it in mind. 
Feel free to surprise us if you want, you put the limit.

#### Functional design:
* Main view
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
* Edition mode
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
* Interactions
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
* Edition mode interactions
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
## Technology:
used for implementation
* React
* Redux (to organize the application code)
* Normalizr  (Normalizes deeply nested JSON)
* Gulp 
* Browserify (bundling)
* Eslint (to ensure consistency in code)
* Tapejs (unit testing)
* Skin-deep (Test assertion helpers for use with React's shallowRender test utils)
* Babel (ES6 transpiler)
* Ramdajs (practical functional library)
* Jade (html templating)
* Sass
* Bourbon (mixin library for sass)
* Express
* Freddie (front-end developer server)
* Browsersync (synchronised browser testing)
* Travis CI (continuous integration)
* Heroku (Deploy)

## Process:

#### Organizing the project:

*The work was divided in two phases, first the UI design, and in a second phase, the development using React/Redux library to manage data.*

I needed a user interface that will represent the state data and where changes made by the user may be reflected.

#### Data:
*A shape of the data that the application have to represent.*
```
{
    "user": "jhondoe@mail.com",
    "id": 1, 
    "chartTypes": [{
        "id": 1,
        "name": "pie"
    },  …. ], 

    "charts": [{
        "id": 1,
        "chartType": 1,
        "name": "Susy",
        "metadata": {
            "id": 1,
            "limit": "limit reached: 500",
            "updates": "125 updates",
            "message": "monthly resolution"
        }
    }, ….]
}
```
I'm not a graphic designer, but as we know, a good graphic design is of vital importance for every app, so I did everything possible to create an attractive and usable interface for the user. This was part of the exercise, and a  very pleasing task.

First need was a logotype for a fictitious brand (‘FUNmetrics’). Then I drew several sketches on paper to get the component UI where the user would interact to modify data. From this point I defined, the footer for the app, and the other components.

Happy with graphic design, next step was to organize the project.

The decision was to separate the html markup and styles from logic. So it would make sense to split them in two projects. One for the UI and another one to keep the business logic.

I do not know if this is the best decision , but it helped me to focus first on the behavior of each component separately before bringing them to Redux / React. Also, when I was working on the application logic , if I found that something of the user interface was not working properly, it was necessary to change from the application project to the UI project  to modify it, and see if it was working well, isolated from React.

#### Two projects for a single result:
* **Platform-UI:** a catalog of all the subcomponents that the application needs.
* **Platform-app:** the logic business with Redux, and the views with React.



