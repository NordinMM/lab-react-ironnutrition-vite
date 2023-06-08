export default function FoodBox({ food, onDelete }) {
    
    return (
        <div className="div">
        <p>{food.name}</p>
      
        <img className="imgm"  src={food.image} />
      
        <p>Calories: {food.calories}</p>
        <p>Servings {food.servings}</p>
      
        <p>
          <b>
            Total Calories: {food.servings} * {food.calories}{" "}
          </b>{" "}
          kcal
        </p>
      
        <button onClick =  {() => onDelete(food.id)}>Delete</button>
      </div>
  );
} // Your code here
