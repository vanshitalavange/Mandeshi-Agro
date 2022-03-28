import { useNavigate } from "react-router-dom";
import { useFilters } from "../../contexts/index";
export const CategoryItem = ({ category }) => {
  const { dispatchFilters } = useFilters();
  const navigate = useNavigate();
  const { imgSrc, categoryName, categoryIdentifier } = category;
  return (
    <div
      onClick={() => {
        dispatchFilters({ type: "CLEAR_ALL" });
        dispatchFilters({ type: "CATEGORY", payload: categoryIdentifier });
        navigate("/products");
      }}
      className="product-category flex-col-center"
    >
      <img
        className="category-img responsive-img"
        src={imgSrc}
        alt={categoryName}
      />
      <h3>{categoryName}</h3>
    </div>
  );
};
