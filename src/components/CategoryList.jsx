import { CategoryItem } from "./CategoryItem";
import "./CategoryList.css";
export function CategoryList({ categories }) {
    return (
        <div className="CategoryList">
            {
                categories.map(elem => <CategoryItem key={elem.idCategory} {...elem} />)
            }
        </div>
    )
}

