import "./products.css";
import { Filters } from "../../components/filters/Filters";
import { useProductQuantity } from "../../contexts/product-quantity-context";
import { ProductCard } from "../../components/productCard/ProductCard";
export function Products() {
  const { updatedProducts } = useProductQuantity();
  return (
    <div class="products-page-main">
      <Filters />
      <section class="products">
        {updatedProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </section>
    </div>
  );
}
