import { useAxios } from "../../utilities/useAxios";
import { CategoryItem } from "../index";
export const CategoryList = () => {
  let categories = [];
  const { loading, responseData, errorFlag } = useAxios("/api/categories");
  if (!loading && !errorFlag) {
    categories = [...responseData.categories];
  }
  return (
    <section className="categories">
      <h1 className="section-title text-centered">Our categories</h1>
      <div className="categories-cards-wrapper">
        {categories.map((category) => (
          <CategoryItem key={category._id} category={category} />
        ))}
      </div>
    </section>
  );
};
