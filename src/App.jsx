import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
function App() {
  
const [foods, setfoods] = useState([...foodsJson]);
  const handleDelete = (id) => {
    setfoods(foods.filter((f) => f.id !== id))
    
  }
  const components = foods.map((f) =><FoodBox key={f.id} food={f} onDelete={handleDelete} /> )
  
  
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <ul className="ulgrid">{components}</ul>
    </div>
  );
}

export default App;
