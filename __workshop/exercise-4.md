## Exercise 4 - Getting a blackbelt in `.map()`

In the `<Menu />` component, you probably have something like this:

```jsx
return (
    <div className="menu-container">
        <MenuSection title="Appetizers" foods={data.appetizers} />
        <MenuSection title="Main Dishes" foods={data.dishes} />
        <MenuSection title="Desserts" foods={data.desserts} />
        <MenuSection title="Drinks" foods={data.drinks} />
    </div>
)
```

This is not technically wrong, but as you know, in React we always want to `map` repeating code, making this not technically right either. It's technically gross! 🤢

So you should fix it up to use a `map` instead!

> **BONUS**: Make the title prop start with properly capitalized letters _**without changing the keys in the data**_! 
> 
> Modifying the data can have terrible consequences, we must make our site adapt to the data instead!

[Back to the README.md](../README.md)
