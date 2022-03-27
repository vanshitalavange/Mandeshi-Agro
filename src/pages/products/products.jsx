import "./products.css";
import { Filters } from "../../components/filters/Filters";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useProduct } from "../../contexts/product-context";
export function Products() {
  const {filteredProducts} = useProduct();
  return (
    <div class="products-page-main">
      <Filters />
      <section class="products">
        {filteredProducts.length === 0 ? <h1>No Products Found</h1> : filteredProducts.map((product) => {
          return <ProductCard product={product} />;
        })}
      </section>
    </div>
  );
}
