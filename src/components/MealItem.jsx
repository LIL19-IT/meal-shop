import { useNavigate } from "react-router-dom";
import "./MealItem.css"; 

export function MealItem({ idMeal, strMeal, strMealThumb }) {
    const navigate = useNavigate();

    return (
        <div className="MealItem" onClick={() => navigate(`/recipe/${idMeal}`)}>
            <img src={strMealThumb} alt="strMealThumb" />
            <p><b>id:</b> {idMeal} </p>
            <p><b>Name:</b> {strMeal} </p>
            <b>Detail ...</b>
            <div className="icons">
                <i className="fas fa-utensils"></i>
                <i className="fas fa-heart"></i>
            </div>
        </div>
    );
}

