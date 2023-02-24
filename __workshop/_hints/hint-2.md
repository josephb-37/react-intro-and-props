Here's our new `MenuSection` component:

```jsx
const MenuSection = ({title, foods}) => {    
    return (
        <div className="container">
            <h2>{title}</h2>
            <div className="menu-section">
                {foods.map(food => {
                    return <Food name={food.name} price={food.price} description={food.description} />
                })}
            </div>
        </div>
    )
}
```

[Back to exercise-3.md](../exercise-3.md)
