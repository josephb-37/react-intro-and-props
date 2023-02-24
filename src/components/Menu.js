import "./Menu.css";

const Menu = (props) => {
  const appetizers = props.data.appetizers;

  return (
    <div>
      <h2>Appetizers</h2>
      <ul>
        {appetizers.map((appetizer) => (
          <li key={appetizer.id}>{appetizer.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
