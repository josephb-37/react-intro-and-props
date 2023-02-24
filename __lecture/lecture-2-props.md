---
marp: true
---

# React Props

- The same component can work with **different data**
- Similar to attributes on HTML elements (consider `<img>`)

---

### Designing props

Here's part of the Spotify desktop app:

![Spotify](./assets/spotify-artists.png)

---

Our "output" HTML might look like this:

```html
<div>
  <img src="./skrillex.jpg" />
  <h3>Skrillex</h3>
  <p>9 SONGS</p>
</div>
```

What are the pieces of dynamic data?

---

Our component might look like this:

```jsx
const RecommendedArtist = (props) => {
  return (
    <div>
      <img src={props.imageUrl} />
      <h3>{props.artistName}</h3>
      <p>{props.numOfSongs} SONGS</p>
    </div>
  );
};
```

---

We can use it like this:

```jsx
<RecommendedArtist
  imageUrl="./skrillex.jpg"
  artistName="Skrillex"
  numOfSongs={9}
/>
<RecommendedArtist
  imageUrl="./helmet-thing.jpg"
  artistName="Disciple Round Table"
  numOfSongs={1}
/>
<RecommendedArtist
  imageUrl="./geoxor.jpg"
  artistName="Geoxor"
  numOfSongs={1}
/>

```

---

### Destructured props

A common practice:

```jsx
const UserProfile = ({ username, email, bio }) => {
  return (
    <div>
      Username: {username}
      Email: {email}
      Biography: {bio}
    </div>
  );
};
```

---

# Exercises

Make the components reusable by using props.

```jsx
// Exercise 1
const VideoPlayer = (props) => {
  return (
    <div>
      <video src="http://youtube.com/some-video" width={480} height={300} />
      <p>Cat playing the piano!!</p>
    </div>
  );
}
```

---

```jsx
// Exercise 2
const Tweet = (props) => {
  return (
    <div>
      <Avatar src="./images/bunny.jpg" />
      <div>
        <p>
          <span className="user-name">Mr. Bunny</span>
          <span className="handle">@mr-bunny</span>
          <span className="date">Oct 29th</span>
        </p>
        <p>Alfalfa is the best food don't @ me</p>
        <div>
          <button>Reply</button>
          <button>Retweet</button>
          <button>Like</button>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
}
```

---

```jsx
// Exercise 3
const Header = (props) => {
  return (
    <header>
      <h1>My great website</h1>
      <nav>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
}
```

---

```jsx
// Bonus: pass down the props instead!

<Profile />

const Profile = (props) => {
  return (
    <div>
      <h1>Welcome {props.username} to your profile!</h1>
      <h3>Your info:</h3>
      <ul>
        <li>Name: {props.name}</li>
        <li>Address: {props.address}</li>
        <li>Email: {props.email}</li>
      </ul>      
    </div>
  );
}
```

---

### Mapping over items

Say we have some data:

```js
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];
```

---

We want to turn it into this HTML:

```html
<ul>
  <li class="item">
    <h3>Monocle</h3>
    <p>Price: $19.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Cane</h3>
    <p>Price: $209.99</p>
    <button>Add to cart</button>
  </li>

  <li class="item">
    <h3>Top Hat</h3>
    <p>Price: $44.99</p>
    <button>Add to cart</button>
  </li>
</ul>
```

---

First, create a component:

```jsx
const StoreItem = (props) => {
  return (
    <li className="item">
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button>Add to cart</button>
    </li>
  );
}
```

---

Next, **map over our data**, using the component once per item:

```jsx
const storeItems = [
  { id: "a", price: 19.99, name: "Monocle" },
  { id: "b", price: 209.99, name: "Cane" },
  { id: "c", price: 44.99, name: "Top Hat" },
];

const App = (props) => {
  return (
    <ul>
      {storeItems.map((item) => {
        return <StoreItem name={item.name} price={item.price} />
      })}
    </ul>
  );
}
```

---

# Exercises

Use `map` in the following snippets.

---

```jsx
// Exercise 4-1
const pets = [
  /* omitted */
];

const ListOfPets = () => {
    return (
        <div>
            <h1 className="title">My pets:</h1>
            <ul>
                <PetInfo
                name={pets[0].name}
                age={pets[0].age}
                species={pets[0].species}
                breed={pets[0].breed}
                />
                <PetInfo
                name={pets[1].name}
                age={pets[1].age}
                species={pets[1].species}
                breed={pets[1].breed}
                />
            </ul>
        </div>
    )
}


```

---

```jsx
// Exercise 4-2
const forecasts = [4, -3, 1, 9, 4, 2, -6];

const Forecast = () => {
    return (
        <div>
            <h1>Weather forecast for the week ahead:</h1>
        
            <Day>4 degrees</Day>
            <Day>-3 degrees</Day>
            <Day>1 degrees</Day>
            <Day>9 degrees</Day>
            <Day>4 degrees</Day>
            <Day>2 degrees</Day>
            <Day>-6 degrees</Day>
        </div>
    )
}

```

---

```jsx
// Exercise 4-3
const pizzaToppings = [
  { name: 'pepperoni', isVegetarian: false },
  { name: 'green pepper', isVegetarian: true },
  { name: 'broccoli', isVegetarian: true },
  { name: 'sausage', isVegetarian: false },
]

const Toppings = () => {
    return (
        <Pizza>
          <Topping name="green pepper" />
          <Topping name="broccoli" />
        </Pizza>
    )
}
```

Hint: You'll need `filter` as well as `map`
