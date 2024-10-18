import { useNavigate } from "react-router-dom";
import "./CategoryItem.css"; 

export function CategoryItem({
  idCategory,
  strCategory,
  strCategoryThumb,
  strCategoryDescription,
}) {
  const navigate = useNavigate();

  return (
    <div className="CategoryItem" onClick={() => navigate(`/category/${strCategory}`)}>
      <img src={strCategoryThumb} alt="Category Thumbnail" className="category-image" />
      <div className="category-details">
        <p><i className="fas fa-id-badge"></i><b>ID:</b> {idCategory}</p>
        <p><i className="fas fa-tag"></i><b>Category:</b> {strCategory}</p>
        <p><i className="fas fa-info-circle"></i><b>Description:</b> {strCategoryDescription.length > 40 ? strCategoryDescription.slice(0, 40) + '...' : strCategoryDescription}</p>
      </div>
    </div>
  );
}

