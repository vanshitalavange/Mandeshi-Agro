import "./home.css";
import { categories } from "../../backend/db/categories";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useProductQuantity } from "../../contexts/product-quantity-context";
export function Home() {
  const { updatedProducts } = useProductQuantity();
  return (
    <main class="page-main">
      <section class="hero">
        <img
          class="hero-img responsive-img"
          src="assets/landing-page/ma_home_banner1.png"
          alt="mandeshi-agro-hero-image"
        />
      </section>
      <section class="categories">
        <h1 class="section-title text-centered">Our categories</h1>
        <div class="categories-cards-wrapper">
          {categories.map(({ categoryName, imgSrc }) => {
            return (
              <Link to="/products">
                <div class="product-category flex-col-center">
                  <img
                    class="category-img responsive-img"
                    src={imgSrc}
                    alt={categoryName}
                  />
                  <h3>{categoryName}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <section class="best-deals">
        <h1 class="section-title text-centered">Best deals</h1>
        <div class="best-deals-cards-wrapper">
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
              return bestDeal ? (
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
              ) : null;
            }
          )}
        </div>
      </section>
    </main>
  );
}
