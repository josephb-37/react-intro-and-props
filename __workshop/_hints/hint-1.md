We can solve this by mapping over the `data` prop's `appetizers` key we provided to `Menu`. Inside the `Menu` component, add this code:

```jsx
return (
    data.appetizers.map(food => {
        return <div>{food.name}</div>
    })
);
```

[Back to exercise-1.md](../exercise-1.md)
