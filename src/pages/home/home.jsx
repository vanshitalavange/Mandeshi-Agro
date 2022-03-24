import "./home.css";
import { categories } from "../../backend/db/categories";
import { Link } from "react-router-dom";
import { products } from "../../backend/db/products";
import { ProductCard } from "../../components/productCard/ProductCard";
export function Home() {
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
          {products.map(
            ({
              _id,
              productName,
              price,
              prevPrice,
              imgSrc,
              bestDeal,
              ratingCount
            }) => {
              return bestDeal ? <ProductCard product={{_id,
                productName,
                price,
                prevPrice,
                imgSrc,
                bestDeal,
                ratingCount}}/>
                 : null;
            }
          )}
        </div>
      </section>

      {/* <section class="best-deals">
        <h1 class="section-title text-centered">Best deals</h1>
        <button class="btn-left-scroll">
          <i class="fas fa-angle-left"></i>
        </button>
        <button class="btn-right-scroll">
          <i class="fas fa-angle-right"></i>
        </button>
        <div class="best-deals-cards-wrapper">
          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/lemon.png"
                alt="lemon"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Lemon</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/apple.png"
                alt="apple"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Apple</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/chilli.png"
                alt="chillies"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Red Chillies</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/beetroot.png"
                alt="beetroot"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Beetroot</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/danedar-ghee.png"
                alt="danedar-ghee"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Pure Danedar Ghee</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/green-peas.png"
                alt="green-peas"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">Green peas</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>

          <div class="product-card flex-column">
            <div class="product-img-container">
              <img
                class="responsive-img"
                src="assets/products/A2-ghee.png"
                alt="A2-desi-ghee"
              />
            </div>
            <span class="wishlist">
              <i class="fa fa-heart"></i>
            </span>
            <div class="product-card-body flex-column">
              <h3 class="product-title">A2 Desi Cow Ghee</h3>
              <div class="price-rating-wrapper flex-row justify-space-between">
                <div class="product-price-container flex-row">
                  <h4 class="price">₹620</h4>
                  <h5 class="price-line-through align-end">₹650</h5>
                </div>
                <div class="card-rating flex-row">
                  <div class="flex-row align-center">
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16"> star </span>
                    <span class="material-icons rating-icon fs-16">
                      star_half
                    </span>
                    <span class="material-icons rating-icon fs-16">
                      star_border
                    </span>
                  </div>
                  <p class="rating-count align-center">11</p>
                </div>
              </div>
              <div class="product-card-actions flex-row flex-wrap">
                <div class="quantity-box flex-row">
                  <button class="btn-increment">+</button>
                  <input
                    class="product-quantity"
                    type="text"
                    name="quantity"
                    value="1"
                    min="1"
                  />
                  <button class="btn-decrement">-</button>
                </div>
                <a href="#" class="btn-add-cart flex-row-center">
                  <i class="fa fa-shopping-cart"></i>
                  ADD TO CART
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  );
}
