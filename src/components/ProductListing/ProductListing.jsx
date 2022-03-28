import { ProductCard } from "../index";
import "./ProductListing.css";
export const ProductListing = ({ products, loading, errorFlag }) => {
  return (
    <section class="products">
      {loading ? (
        <h3>Loading...</h3>
      ) : errorFlag ? (
        <h3>Something's coming undone</h3>
      ) : products.length === 0 ? (
        <h1>No Products Found</h1>
      ) : (
        products.map((product) => {
          return <ProductCard product={product} />;
        })
      )}
    </section>
  );
};
