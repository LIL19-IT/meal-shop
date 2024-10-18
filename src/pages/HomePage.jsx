import React, { useEffect, useState } from "react";
import { CategoryList } from "../components/CategoryList";
import { Filter } from "../components/Filter";
import "./HomePage.css"; 

export function HomePage() {
  const [categories, setCategories] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = () => {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      .then(response => response.json())
      .then(data => {
        setCategories(data.categories);
        setFilteredCategories(data.categories);
      });
  };

  const filterFunc = (event) => {
    const newCategories = categories.filter(elem => {
      return elem.strCategory.toLowerCase().includes(event.target.value.toLowerCase());
    });

    setFilteredCategories(newCategories);
  };

  return (
    <div className="HomePage">
      <Filter filterFunc={filterFunc} />
      <CategoryList categories={filteredCategories} />
    </div>
  );
}

