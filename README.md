# Platform-ui exercise
***personal exercise to study front-end development technologies***
* Standard ES6 modules using Babel + browserify
* React + jsx + Redux
* Gulp

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

## Overview
### Motivation:
Some time ago, in a job interview, I received an exercise, it was part of the recruitment process to evaluate the skills as a front-end developer.

I took the exercise as an opportunity to experiment and gain knowledge about some technologies that do not use in every day at work, with the advantage of starting to do things from the beginning to the end with total freedom.

#### Front end technical exercise description:
The goal of this exercise is to turn the UI design we provide into a fully functional UI. It’s a small component in charge of creating/editing/deleting metrics corresponding to a
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

#### UI-design:
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
## ToolBox:
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

## Process
#### Organizing the project:

*The work was divided into two phases, first the UI design, and second the development using React/Redux library to manage data.*

I needed a user interface that will represent the state data and where changes made ​​by the user may be reflected.

I'm not a graphic designer, but as we know, a good graphic design is of vital importance for every app, so I did everything possible to create an attractive and usable interface for the user. This was part of the exercise and a  very pleasing task.

First need was a logotype for a fictitious brand *‘FUNmetrics’*. Then I drew several sketches on paper to get the component UI where the user would interact to modify data. From this point, I defined the footer for the app and the other components.

*Happy with graphic design, next step was to organize the project.*

The decision was to separate the **HTML markup** and **styles** from **logic**. So it would make sense to split them into **two projects**. One for the UI and another one to keep the business logic.

Really I don’t know if this was the best decision, but it helped me to focus first on the behavior of each component separately before bringing them to Redux / React. Also, working on the application logic, if I found that something about the user interface was not working properly, it was necessary to switch from the application project to the UI project to modify it, and see if it was working well, isolated from React.


* *Platform-UI*: a catalog of all the subcomponents that the application needs.
* *Platform-app*: the logic business with Redux, and the views with React.

## Development:

### Data:
*A shape of the data that the application has to represent.*
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

### Graphic design:
As I said before, my knowledge of UX and graphic design is not enough, so I tried to make a simple design, using some components provided by Bourbon library. In this respect the application can be improved, both in terms of user experience and visual design. Both processes are of utmost importance when developing an app.

### Platform UI HTML markup:
(https://platform-ui.herokuapp.com/)

#### Catalog (components layout):
Each of the components that make up the application, built individually, each one has associated the HTML code to be used in React component.

Being a responsive design, its width is 100%. The main container determines its final width.

Some of these components are associated with a very simple JavaScript function, which is used to see their isolated behavior.
**This script is not valid for the final React component.**

#### Metric Component:
Composed of the sub-components from the catalog.


#### Main layout:
The app layout.

#### Style:
Each component has its corresponding completely independent .sass file. Due to the dependence of Bourbon CSS, the components extend to fit as needed.

### Platform-ui-app
(https://platform-ui-app.herokuapp.com/)

#### Server:
Back-end development was out of the scope of this exercise, so all we need is a minimum Restful Service to access, create, modify or delete the information. The restful API only returns a static JSON to *GET* data, and *200 as status code* for the other actions(SAVE, DELETE, PUT). At the beginning of development phase, Freddie plugin was used as a static server, it's a good option for prototyping before the server is released.

#### Client:
To organize the application code on the client I choose Redux. I found this architecture very interesting and it fits very well with React, used to build the UI components.

RamdaJS  is used to manipulate the state, RamdaJS never mutates input data.

Gulp is used to ease development workflow, and Browserify to generate the bundle file.

I started creating a Node app, the idea was to concentrate on core logic first and then thinking about UI, and how fits on the browser.

#### Redux modules:
*(toolbox: jslint  tapejs)*

It is really nice not having to use the browser during the development phase.
Each action, reducer or store have it's own unit test, connected to fake data,  so we can see how the module works completely isolated from the other modules. Finished this phase, we can test how it's operating with the state data. At the moment, we don’t have a single React component.

#### React components:
*(toolbox: jslint tapejs Skin-deep)*

Next task was to construct the components for the views with React, that would be hydrated with the data coming from the state object.

Like Redux modules, each React component has its unit test. This way it's easy to test how it's working in an isolated manner before see it on the browser. We have the HTML catalog, as a reference, to know how each component looks.

Then, we place it in a React components catalog on the browser. This way we can see if it's working well on the integration with the browser.

#### Fully functional UI:
*(toolbox: Browser-sync)*

Having finished the React components catalog, it's time to integrate it with Redux and the browser, *it should look like the main layout that we have in the platform-UI project*, we need to test how it's working in response to the server, make interactions, see if everything's fine before deploying it to the web.

For debugging on browsers, Browser-sync plugin is used, is a Gulp task configured for two development environments, dev(3500), pre(4500)

## Travis-ci:
Continuous integration, associated with Github, whenever a push action is done, run the install, post install, check, and unit test tasks.

## Heroku:
The repo is associated with Heroku application, after completing Travis-ci tasks, an automatic deploy is done.
If you have Heroku installed, you can run locally Heroku to verify proper operation before making a deploy.

## Todo:
- [ ] Implement error response on client.
- [ ] Improve unit test
- [ ] Improve english

## Some link that has been useful:
* http://redux.js.org/docs/introduction/index.html
* http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html
* https://www.codementor.io/reactjs/tutorial/react-js-browserify-workflow-part-1
