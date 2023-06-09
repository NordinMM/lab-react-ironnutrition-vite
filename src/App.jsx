import "./App.css";
import FoodList from "./components/FoodList";
function App() {
  
const [foods, setfoods] = useState([...foodsJson]);
  const handleDelete = (id) => {
    setfoods(foods.filter((f) => f.id !== id))
    
  }
  const components = foods.map((f) =><FoodBox key={f.id} food={f} onDelete={handleDelete} /> )
  const handleCreateFood = (createdFood) => {
    console.log('Nueva comida:',  createdFood);
    setfoods([...foods, createdFood]);
  }
  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>
      <FoodList/>
    </div>
  );
}

export default App;
