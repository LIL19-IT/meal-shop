import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./DetailPage.css"; 

export function DetailPage() {
  const [meal, setMeal] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        setMeal(data.meals[0]);
      });
  }, [id]);

  return (
    <div className="DetailPage">
      <img src={meal.strMealThumb} alt="Meal Thumbnail" className="meal-image" />
      <div className="meal-details">
        <p><i className="fas fa-id-badge"></i><b>ID:</b> {meal.idMeal}</p>
        <p><i className="fas fa-globe"></i><b>Area:</b> {meal.strArea}</p>
        <p><i className="fas fa-utensils"></i><b>Category:</b> {meal.strCategory}</p>
        <p><i className="fas fa-info-circle"></i><b>Description:</b> {meal.strInstructions}</p>
        <Link to={meal.strYoutube} className="youtube-link"><i className="fab fa-youtube"></i> Go to YouTube link</Link>
      </div>
    </div>
  );
}

