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
    rating,
    ratingCount,
    userSetQuantity,
  } = { ...product };

  return (
    <div className="product-card flex-column">
      <div className="product-img-container">
        <img className="responsive-img" src={imgSrc} alt={productName} />
      </div>
      <span className="wishlist">
        <i className="fa fa-heart"></i>
      </span>
      <div className="product-card-body flex-column">
        <div className="product-desc">
        <h3 className="product-title">{productName}</h3>
        <div className="price-rating-wrapper flex-row justify-space-between">
          <div className="product-price-container flex-row">
            <h4 className="price">₹{price}</h4>
            <h5 className="price-line-through align-end">₹{prevPrice}</h5>
          </div>
          <div className="card-rating flex-row">
            <div className="flex-row align-center">
              <span>{rating}</span>
              <span className="material-icons rating-icon align-center"> star </span>
              {/* <span className="material-icons rating-icon"> star </span>
              <span className="material-icons rating-icon"> star </span>
              <span className="material-icons rating-icon">star_half</span>
              <span className="material-icons rating-icon fs-16">star_border</span> */}
            </div>
            {/* <p className="rating-count align-center">{ratingCount}</p> */}
          </div>
        </div>
        </div>
        <div className="product-card-actions flex-row flex-wrap">
          <div className="quantity-box flex-row">
            <button
              onClick={() => decrementQuantity(_id)}
              className="btn-decrement"
            >
              -
            </button>
            <input
              className="product-quantity"
              type="number"
              name="quantity"
              value={userSetQuantity}
              min="1"
            />
            <button
              onClick={() => incrementQuantity(_id)}
              className="btn-increment"
            >
              +
            </button>
          </div>
          <a href="#" className="btn-add-cart flex-row-center">
            <i className="fa fa-shopping-cart"></i>
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};
