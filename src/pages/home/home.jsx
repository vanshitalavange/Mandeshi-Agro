import "./home.css";
import { categories } from "../../backend/db/categories";
import { Link } from "react-router-dom";
import { ProductCard } from "../../components/productCard/ProductCard";
import { useProductQuantity } from "../../contexts/product-quantity-context";
export function Home() {
  const { updatedProducts } = useProductQuantity();
  return (
    <main className="page-main">
      <section className="hero">
        <img
          className="hero-img responsive-img"
          src="https://ik.imagekit.io/mandeshiagro/assets/landing-page/ma_home_banner1_x-90ZW5yz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648264723204"
          alt="mandeshi-agro-hero-image"
        />
      </section>
      <section className="categories">
        <h1 className="section-title text-centered">Our categories</h1>
        <div className="categories-cards-wrapper">
          {categories.map(({ categoryName, imgSrc }) => {
            return (
              <Link to="/products">
                <div className="product-category flex-col-center">
                  <img
                    className="category-img responsive-img"
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
      <section className="best-deals">
        <h1 className="section-title text-centered">Best deals</h1>
        <div className="best-deals-cards-wrapper">
          {updatedProducts.map((product) => {
            return product.bestDeal ? <ProductCard product={product} /> : null;
          })}
        </div>
      </section>
    </main>
  );
}
