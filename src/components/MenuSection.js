import "./Menu.css";
import "./MenuSection.css";

const MenuSection = ({ foods }) => {
  return (
    <div className="container">
      <h2 className="section-title">Appetizers</h2>
      <ul className="food-list">
        {foods.map((food) => (
          <li key={food.name} className="food-item">
            <h3 className="food-name">{food.name}</h3>
            <span className="food-price">{food.price}</span>
            <p className="food-description">{food.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuSection;
