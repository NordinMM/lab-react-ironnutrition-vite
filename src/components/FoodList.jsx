import foodsJson from "../foods.json";
import FoodBox from "./components/FoodBox";
import { useState } from "react";
import AddFoodForm from "./components/AddFoodForm";
export default function FoodList() {
    
    const [foods, setFoods] = useState([...foodsJson]);

    const handleDelete = (id) => {
        console.log('Queremos borrar el id ' + id);
        const filteredFoods = foods.filter(f => f.id !== id);
        setFoods(filteredFoods)
    }

    const handleCreateFood = (createdFood) => {
        console.log('Nueva comida:', createdFood);
        
        setFoods([createdFood, ...foods]);
    }
    return <>
        <AddFoodForm onCreateFood={handleCreateFood} />
        {/** Iterate over the foods array and render a <FoodBox /> component for each individual food item. */}
        {foods.map(f => <FoodBox key={f.id} food={f} onDelete={handleDelete} />)}</>
}