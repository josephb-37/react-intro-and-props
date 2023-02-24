---
marp: true
---

# React Modules

---

### Default exports

```js
// create a Button Component
const Button = (props) => {
  ✂️
}

// make it importable from other files
export default Button;
```

```js
// Import it into the file where you want to use it.
import Button from "../Button";
```

---

### CSS imports

```js
import "./App.css";
```

---

# Package.json Scripts

- Run a local development server with `yarn start`
- This spins up an Express server that rebuilds your app on every change. 😮

---

# Fin
