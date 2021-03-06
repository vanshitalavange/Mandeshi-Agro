import { useAxios } from "../../utilities/useAxios";
import { ProductCard } from "../index";

export const BestDeals = () => {
  let products = [];
  const { loading, responseData, errorFlag } = useAxios("/api/products");
  if (!loading && !errorFlag) {
    products = [...responseData.products];
  }
  return (
    <section className="best-deals">
      <h1 className="section-title text-centered">Best deals</h1>
      <div className="best-deals-cards-wrapper">
        {products.map((product) => {
          return product.bestDeal ? <ProductCard key={product._id} product={product} /> : null;
        })}
      </div>
    </section>
  );
};
