import { useAuth, useWishlist, useCart } from "../../contexts/index";
import {
  removeFromWishlist,
  addToCart,
  updateProductQuantity,
} from "../../services/index";
export const WishListItem = ({ wishlistedProduct }) => {
  const { productName, imgSrc, price, prevPrice, rating, _id } =
    wishlistedProduct;
  const {
    userState: { authToken },
  } = useAuth();
  const { dispatchWishlist } = useWishlist();

  const { cart, dispatchCart, isProductInCart } = useCart();

  const moveToCartHandler = () => {
    if (!isProductInCart(cart, wishlistedProduct)) {
      addToCart(authToken, wishlistedProduct, dispatchCart);
      removeFromWishlist(authToken, _id, dispatchWishlist);
    } else {
      updateProductQuantity(authToken, _id, "increment", dispatchCart);
      removeFromWishlist(authToken, _id, dispatchWishlist);
    }
  };

  return (
    <div className="product-card flex-column">
      <div className="product-img-container">
        <img className="responsive-img" src={imgSrc} alt="lemon" />
      </div>
      <span
        onClick={() => {
          removeFromWishlist(authToken, _id, dispatchWishlist);
        }}
        className="remove-from-wishlist"
      >
        <span className="material-icons"> cancel </span>
      </span>
      <div className="product-card-body flex-column">
        <h3 className="product-title">{productName}</h3>
        <div className="price-rating-wrapper flex-row justify-space-between">
          <div className="product-price-container flex-row">
            <h4 className="price">₹{price}</h4>
            <h5 className="price-line-through align-end">₹{prevPrice}</h5>
          </div>
          <div className="card-rating flex-row">
            <div className="flex-row align-center">
              <span>{rating}</span>
              <span className="material-icons rating-icon align-center">
                {" "}
                star{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="product-card-actions">
          <button
            onClick={() => moveToCartHandler()}
            className="btn-add-cart btn-move-to-cart flex-row-center"
          >
            <i className="fa fa-shopping-cart"></i>
            MOVE TO CART
          </button>
        </div>
      </div>
    </div>
  );
};
