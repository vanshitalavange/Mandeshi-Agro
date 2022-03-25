import "./products.css";
import { Filters } from "../../components/filters/Filters";
import { useProductQuantity } from "../../contexts/product-quantity-context";
import { ProductCard } from "../../components/productCard/ProductCard";
export function Products() {
  const { updatedProducts, setUpdatedProducts } = useProductQuantity();
  return (
    <div class="page-main">
      <Filters />
      <section class="products">
{updatedProducts.map(
        ({
          _id,
          productName,
          price,
          prevPrice,
          imgSrc,
          bestDeal,
          ratingCount,
          userSetQuantity,
        }) => {
          return (
            <ProductCard
              product={{
                _id,
                productName,
                price,
                prevPrice,
                imgSrc,
                bestDeal,
                ratingCount,
                userSetQuantity,
              }}
            />
          );
        }
      )}</section>
    </div>
  );
}
