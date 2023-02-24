## Exercise 3 - Can never have too many components

Not bad! Now you have something that looks more like a menu! 

Chances are though that you put the map inside `<MenuSection />` and made it return a div with the information inside. 

Now this technically works but remember that in React, we always want everything to be in a component. A component should not return `x` things, but rather there should be `x` components returning 1 thing each.

---

First, we need to create a new component that will be returned by the map. Make sure to give it an appropriate name (remember the naming convention!).

Next, we need to update our `<MenuSection />` component to return this new component.

There are multiple ways to do this, but in my opinion the simplest is to pass the relevant information as props, and copy what your map was originally returning into this new component (you can copy paste yourself! 😋).

> 🆘 **If you really have no idea what I'm talking about, consider taking a look at this [hint](./_hints/hint-2.md).**

If everything was done correctly, your website should look totally identical. But now we've respected the conventions of React!

Now in `<Menu />`, we'll probably want to add 3 more `<MenuSection />` components and pass them the appropriate data so that we can finally have a full menu! 

> I had to zoom out a lot to get the full site in the screenshot, please don't mind the warped sizes 😅

![complete menu](/__lecture/assets/exercise-3-result.png)

[Back to the README.md](../README.md)
