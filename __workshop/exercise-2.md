## Exercise 2 - Creating a `<MenuSection />` component

In the "drawing boxes" exercise in class, we learned that repeated chunks of markup should be components; so let's create one!

Create two new files, `MenuSection.js` and `MenuSection.css`. Write the following into the `.js` file

> **✋ Please do NOT copy/paste!** You'll write _a lot_ of new components over this module. It's worth taking the time to get used to writing them out.

```jsx
import './MenuSection.css';

const MenuSection = ({foods}) => {
  return <div className='container'></div>;
};

export default MenuSection;
```

Inside `<Menu />`, we're mapping through each appetizer in the array. Now instead of mapping inside of `<Menu />`, we want to map in `<MenuSection />`. Pass the array to the `<MenuSection />` component:

```diff
// Inside Menu
-   return (
-       data.appetizers.map(food => {
-           return <div>{food.name}</div>
-       })
-   );
+   return (
+       <MenuSection foods={data.appetizers} />
+   )
```

Next, update the `MenuSection` component to render each individual food's:

- name
- price
- description

Next, add some styles and a title prop to make it look like a menu. 

How you structure this is up to you, but you should wind up with something similar to this image:

![food list with some styling](/__lecture/assets/exercise-2-result.png)

[Back to the README.md](../README.md)
