import "./ProductCard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist } from "../../contexts/index";
import { addToWishlist, removeFromWishlist } from "../../services/index";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const { userState } = useAuth();
  const { loginStatus, authToken } = userState;
  const { wishlist, dispatchWishlist, isProductInWishlist } = useWishlist();

  const [isWishlisted, setIsWishlisted] = useState({
    value: false,
    class: "not-wishlisted",
  });

  const { _id, productName, price, prevPrice, imgSrc, rating } = { ...product };

  const toggleWishList = () => {
    if (!isWishlisted.value) {
      setIsWishlisted({ value: true, class: "wishlisted" });
      addToWishlist(authToken, _id, dispatchWishlist);
    } else {
      setIsWishlisted({ value: false, class: "not-wishlisted" });
      removeFromWishlist(authToken, _id, dispatchWishlist);
    }
  };

  useEffect(() => {
    if (loginStatus) {
      setIsWishlisted(
        isProductInWishlist(wishlist, product)
          ? { value: true, class: "wishlisted" }
          : { value: false, class: "not-wishlisted" }
      );
    } else {
      setIsWishlisted({ value: false, class: "not-wishlisted" });
    }
  }, [loginStatus, product]);

  return (
    <div className="product-card flex-column">
      <div className="product-img-container">
        <img className="responsive-img" src={imgSrc} alt={productName} />
      </div>
      <span
        onClick={() => {
          loginStatus ? toggleWishList() : navigate("/login");
        }}
        className="wishlist"
      >
        <i className={`fa fa-heart ${isWishlisted.class}`}></i>
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
                <span className="material-icons rating-icon align-center">
                  {" "}
                  star{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="product-card-actions flex-row flex-wrap">
          <a href="#" className="btn-add-cart flex-row-center">
            <i className="fa fa-shopping-cart"></i>
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};
