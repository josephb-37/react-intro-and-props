# Exercise 1 - Rendering some food

First, let's make sure we can access our data properly. Import it and log it in the console.

```diff
import Header from "./Header";
import Menu from "./Menu";

+ import data from "../data";

import "./App.css";

const App = () => {
+   console.log(data);
    return (
        <div className="wrapper">
            <Header />
            <Menu />
        </div>
    );
};
```

When we open the developer tools, we can see it in our console being logged:

![Logged props in developer console](/__lecture/assets/app-console-log.png)

We want to pass down this data as a prop to the `Menu` component so that we can render our different menu sections.

Let's start by trying to render all of the appetizer names. Take a moment and try to solve this on your own, using `map`.

> 🆘 **If you are stuck, and I do mean STUCK, you can look at this [hint](./_hints/hint-1.md).**

Once we have our `map` method working, we should get something that looks like this:

![raw food names being mapped](/__lecture/assets/raw-food-names.png)

Not pretty, but we're off to a great start! We're funneling the data we need through our application, and using it in the right place!

### Troubleshooting

##### `TypeError: Cannot read property 'map' of undefined`

If you're seeing this error, it likely means you forgot to pass `data` to `Menu`. Make sure that in `App.js`, you're passing the data along:

```diff
const App = () => {
    return (
        <div className="wrapper">
            <Header />
-           <Menu />
+           <Menu data={data} />
        </div>
    );
};
```

Creating React elements (eg. `<Menu />`) is like calling a function, and props are like the _arguments_ for that function. If we don't give the component the props that it needs, it will crash, in the same way as calling a function without passing it the arguments it needs.

[Back to the README.md](../README.md)