# Intro to React & Props

## 🦊 Pre-lecture

⏲️ _Estimated time required: 30 minutes._

- Take a look at the React.Js site. (You might want to bookmark this for the remainder of the bootcamp. https://reactjs.org/

---

## 🦉 Lecture

- [lecture-1-intro.md](__lecture/lecture-1-intro.md)
- [lecture-2-props.md](__lecture/lecture-2-props.md)
- [lecture-3-modules.md](__lecture/lecture-3-modules.md)

Keep in mind that these slides are not interactive, like in the actual lecture. Whenever possible, we will provide links to working code examples in CodeSandbox.

---

## Setup

This workshop uses **Create React App**, a project from Facebook designed to make it easy to get started building a React application.

It comes with a full build system, and very little boilerplate. We will learn more about this system in the future, but for now we'll focus on using it, not understanding how it works.

1. `yarn install` This installs the third-party dependencies (like React). There are alot! It is normal for this to take some time.
2. `yarn start` This starts the development server.

It works similarly to `Live Server` - when you save a file, it should auto-restart, and **the app should auto-refresh**.

## Understanding the files

The directory structure of this project is on the left, and looks like:

```
├── __lecture
├── public
│   ├── assets
│   │   └── [images]
│   └── index.html
├── src
│   ├── components
│   │   └── [component js and css]
│   ├── data.js
│   ├── index.js
│   └── styles.css
└── package.json
```

`package.json` is a **manifest** of our project and its dependencies. We _don't need to edit it_ for this workshop.

`public` contains static files, like our output index.html and some image assets. We _don't need to edit anything in here_ either!

Finally, `src` is where all the good stuff lives.

To bootstrap this workshop, we've created several JS and CSS files:

```
├── components
│   ├── App.css
│   ├── App.js
│   ├── Header.css
│   ├── Header.js
│   ├── Menu.css
│   └── Menu.js
├── data.js
└── index.js
```

`data.js` includes all the information we need about our food items. This includes their names, price and a short description.

`App.js` is our top-level component, the very top of the tree. It imports the data, and will render the main chunks of our website.

`styles.css` includes _global_ styles. You probably don't need to edit this file; all the other CSS you add should go in the other CSS files.

`components` holds our set of components, with 1 JS and 1 CSS file per component. If we want to style the Header component, we'd put those styles in `Header.css`.

Our initial state gives us a loose structure, but very little in the way of UI.

Your job will be to build this out, using the structure provided!

> **NOTE**: It doesn't matter what the CSS looks like, as long as you have all the items and sections rendering on your page. They can be in a column one on top of each other, the CSS isn't as important here as grasping the fundamentals of React.

---

## ⚡ Exercises

### 1. Rendering some food

Open this exercise file: [exercise-1.md](__workshop/exercise-1.md)

### 2. Creating a `<MenuSection />` component

Open this exercise file: [exercise-2.md](__workshop/exercise-2.md)

### 3. Can never have too many components

Open this exercise file: [exercise-3.md](__workshop/exercise-3.md)

---

<center>🟡 - Minimally complete workshop (75%) - 🟡</center>

---

### 4. Getting a black belt in `.map()`

Open this exercise file: [exercise-4.md](__workshop/exercise-4.md)

---

<center>🟢 - Complete workshop (100%) - 🟢</center>

---

### 5. Styling it up!

No `exerercise-5.md` file this time. Just add some style to it and make it look like an awesome menu!