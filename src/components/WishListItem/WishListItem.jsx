import { Link } from "react-router-dom";
import { useAuth, useWishlist } from "../../contexts/index";
import { removeFromWishlist } from "../../services/index";
export const WishListItem = ({ wishlistedProduct }) => {
  const { productName, imgSrc, price, prevPrice, rating, _id } =
    wishlistedProduct;
  const {
    userState: { authToken },
  } = useAuth();
  const { dispatchWishlist } = useWishlist();

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
          <Link
            to="/cart"
            className="btn-add-cart btn-move-to-cart flex-row-center"
          >
            <i className="fa fa-shopping-cart"></i>
            MOVE TO CART
          </Link>
        </div>
      </div>
    </div>
  );
};
