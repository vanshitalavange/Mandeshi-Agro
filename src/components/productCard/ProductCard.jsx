import "./ProductCard.css";
import { useProductQuantity } from "../../contexts/product-quantity-context";

export const ProductCard = ({ product }) => {
  const { updatedProducts, setUpdatedProducts } = useProductQuantity();

  /** functions to increment and decrement quantity while adding products to cart **/
  const incrementQuantity = (productId) => {
    const productsWithUpdatedQuantity = updatedProducts.map((item) => {
      if (item._id === productId) {
        item.userSetQuantity = item.userSetQuantity + 1;
      }
      return item;
    });

    setUpdatedProducts(productsWithUpdatedQuantity);
  };
  const decrementQuantity = (productId) => {
    const productsWithUpdatedQuantity = updatedProducts.map((item) => {
      if (item._id === productId) {
        item.userSetQuantity =
          item.userSetQuantity !== 1
            ? item.userSetQuantity - 1
            : item.userSetQuantity;
      }
      return item;
    });
    setUpdatedProducts(productsWithUpdatedQuantity);
  };

  /**  product prop **/
  const {
    _id,
    productName,
    price,
    prevPrice,
    imgSrc,
    ratingCount,
    userSetQuantity,
  } = { ...product };

  return (
    <div class="product-card flex-column">
      <div class="product-img-container">
        <img class="responsive-img" src={imgSrc} alt={productName} />
      </div>
      <span class="wishlist">
        <i class="fa fa-heart"></i>
      </span>
      <div class="product-card-body flex-column">
        <h3 class="product-title">{productName}</h3>
        <div class="price-rating-wrapper flex-row justify-space-between">
          <div class="product-price-container flex-row">
            <h4 class="price">{price}</h4>
            <h5 class="price-line-through align-end">{prevPrice}</h5>
          </div>
          <div class="card-rating flex-row">
            <div class="flex-row align-center">
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon">star_half</span>
              <span class="material-icons rating-icon fs-16">star_border</span>
            </div>
            <p class="rating-count align-center">{ratingCount}</p>
          </div>
        </div>
        <div class="product-card-actions flex-row flex-wrap">
          <div class="quantity-box flex-row">
            <button
              onClick={() => decrementQuantity(_id)}
              class="btn-decrement"
            >
              -
            </button>
            <input
              class="product-quantity"
              type="number"
              name="quantity"
              value={userSetQuantity}
              min="1"
            />
            <button
              onClick={() => incrementQuantity(_id)}
              class="btn-increment"
            >
              +
            </button>
          </div>
          <a href="#" class="btn-add-cart flex-row-center">
            <i class="fa fa-shopping-cart"></i>
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};
