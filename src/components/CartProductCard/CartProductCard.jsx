import { removeFromCart, addToWishlist } from "../../services/index";
import { useCart, useAuth, useWishlist } from "../../contexts/index";
import { useNavigate } from "react-router-dom";
export const CartProductCard = ({ product }) => {
  const { dispatchCart, updateProductQuantityHandler } = useCart();
  const {
    userState: { authToken },
  } = useAuth();
  const { wishlist, isProductInWishlist, dispatchWishlist } = useWishlist();
  const { imgSrc, productName, price, prevPrice, _id, qty, discount } = {
    ...product,
  };
  const navigate = useNavigate();

  const priceTotal = qty * Number(price);
  const prevPriceTotal = qty * Number(prevPrice);
  const discountTotal = qty * Number(discount);

  const moveToWishlistHandler = () => {
    if (!isProductInWishlist(wishlist, product)) {
      addToWishlist(authToken, product, dispatchWishlist);
      removeFromCart(authToken, _id, dispatchCart);
    } else {
      navigate("/wishlist");
    }
  };

  return (
    <div className="cart-product-card flex-row">
      <div className="cart-product-img-container align-center">
        <img className="responsive-img" src={imgSrc} alt={productName} />
      </div>
      <div className="cart-product-card-body flex-column">
        <h3 className="card-title">{productName}</h3>
        <div className="quantity-wrapper flex-row">
          <p className="align-center">Quantity</p>
          <div className="quantity-box flex-row align-end">
            <button
              onClick={() =>
                updateProductQuantityHandler(authToken, _id, "decrement", qty)
              }
              className="btn-decrement"
            >
              -
            </button>
            <input
              className="product-quantity"
              type="text"
              name="quantity"
              value={qty}
              min="1"
            />
            <button
              onClick={() =>
                updateProductQuantityHandler(authToken, _id, "increment", qty)
              }
              className="btn-increment"
            >
              +
            </button>
          </div>
        </div>
        <div className="product-price-container flex-row">
          <h4 className="price">₹ {priceTotal}</h4>
          <h5 className="price-line-through align-end">₹ {prevPriceTotal}</h5>
        </div>
        <div className="discount-container">Discount ₹ {discountTotal} off</div>
        <div className="cart-card-actions flex-column">
          <button
            onClick={() => moveToWishlistHandler()}
            className="btn-move-to-wishlist flex-row-center"
          >
            <i className="fa fa-heart"></i>
            {isProductInWishlist(wishlist, product)
              ? "WISHLISTED"
              : "MOVE TO WISHLIST"}
          </button>
          <button
            onClick={() => removeFromCart(authToken, _id, dispatchCart)}
            className="btn-remove-from-cart"
          >
            REMOVE
          </button>
        </div>
      </div>
    </div>
  );
};
