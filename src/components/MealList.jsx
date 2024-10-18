import { MealItem } from "./MealItem";
import "./MealList.css"; 

export function MealList({ meals }) {
    return (
        <div className="MealList">
            {
                meals.map(elem => <MealItem key={elem.idMeal} {...elem} />)
            }
        </div>
    )
}

