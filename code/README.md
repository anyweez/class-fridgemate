# class-fridgemate

This project is an instructional introduction to [Vue](https://vuejs.org).

To start things off, install:

- Chrome Vue plugin (Vue DevTools)
- Vue CLI ([https://cli.vuejs.org/](https://cli.vuejs.org))

Then create a project with Vue CLI and run the following:

```
npm install node-sass sass-loader vuex
```

The goal is to get through the 'fridge' page during the course. If time allows, we'll start the code for 'history' and discuss the shopping list page.

## Topics

### Components: splitting vertically vs horizontally

Early web sites were decomposed into three needs: content was represented in one place (HTML), presentation in another (CSS), and functionality in a third (JS).

This worked well for simpler sites, but became difficult to reuse pieces without reusing everything. Large tech companies felt a lot of this pain most sharply - for example, Google having a single search box 'experience' across multiple frontends.

Small apps are fairly easy to keep organized. Things get harder as they grow. Test question: "if I add X, where should it go?" A project is well-organized if the answer is fairly obvious.

**Key concept:** don't repeat yourself. Components help us avoid that.

**Fun fact:** Google built Angular. Facebook built React. Vue is the third 'big player' and has a variety of smaller sponsors but no corporate host.

### Basic .vue syntax

Uses standard HTML (with a few extensions), CSS, and JS.

- HTML referred to as "templates".

### Templates and template rendering

"Templates" define what content is generated for a component, and Vue automatically re-renders templates when dependencies change (ex: any variable used to render the template is updated).

Templates are defined with HTML as well as some Vue-specific extensions. Introduce {{ }}.

### Open / closed principle

- Organizing CSS
- Data: local properties and (non-local) props 

### App = composition of components

'Single page apps (SPAs)' can still *appear* to be multi-page to users, but do not require full refreshes.

Each 'page' is a component, made up of many other components. Easy to reuse components across pages.

### Intermission: barcode scanner

- How the scanner works
- UPC code

### API interactions

Look up UPC code.

### Vuex: data flows



### Multiple views

Introduce router? Not sure...might not be worth the complexity.

Leaning towards **no**.