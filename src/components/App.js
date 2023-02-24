import Header from "./Header";
import MenuSection from "./MenuSection";
import data from "../data";
import "./App.css";

const App = () => {
  console.log(data);
  return (
    <div className="wrapper">
      <Header />
      <MenuSection foods={data.appetizers} />
    </div>
  );
};

export default App;
