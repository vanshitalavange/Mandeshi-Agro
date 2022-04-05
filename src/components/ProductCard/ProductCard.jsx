import "./ProductCard.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useWishlist, useCart } from "../../contexts/index";
import {
  addToWishlist,
  removeFromWishlist,
  addToCart,
} from "../../services/index";

export const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { userState } = useAuth();
  const { loginStatus, authToken } = userState;
  const { wishlist, dispatchWishlist, isProductInWishlist } = useWishlist();
  const { cart, dispatchCart, isProductInCart } = useCart();

  const [isWishlisted, setIsWishlisted] = useState({
    value: false,
    class: "not-wishlisted",
  });

  const { _id, productName, price, prevPrice, imgSrc, rating } = { ...product };

  const toggleWishList = () => {
    if (!isWishlisted.value) {
      setIsWishlisted({ value: true, class: "wishlisted" });
      addToWishlist(authToken, product, dispatchWishlist);
    } else {
      setIsWishlisted({ value: false, class: "not-wishlisted" });
      removeFromWishlist(authToken, _id, dispatchWishlist);
    }
  };

  const [productInCart, setProductInCart] = useState({
    value: false,
    action: "ADD TO CART",
  });

  useEffect(() => {
    if (loginStatus) {
      setIsWishlisted(
        isProductInWishlist(wishlist, product)
          ? { value: true, class: "wishlisted" }
          : { value: false, class: "not-wishlisted" }
      );
      setProductInCart(
        isProductInCart(cart, product)
          ? { value: true, action: "GO TO CART" }
          : { value: false, action: "ADD TO CART" }
      );
    } else {
      setIsWishlisted({ value: false, class: "not-wishlisted" });
      setProductInCart({ value: false, action: "ADD TO CART" });
    }

  }, [loginStatus, product, cart, wishlist]);

  const handleCart = () => {
    if (!productInCart.value) {
      setProductInCart({
        value: true,
        action: "GO TO CART",
      });
      addToCart(authToken, product, dispatchCart);
    } else {
      navigate("/cart");
    }
  };

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
        {/* <i className={`fa fa-heart ${isProductInWishlist(wishlist,product) ? "wishlisted" : "not-wishlisted"}`}></i> */}
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
          <button
            onClick={() => (loginStatus ? handleCart() : navigate("/login"))}
            className="btn-add-cart flex-row-center"
          >
            <i className="fa fa-shopping-cart"></i>
            {productInCart.action}
          </button>
        </div>
      </div>
    </div>
  );
};
