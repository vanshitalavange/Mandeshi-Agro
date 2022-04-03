import "./cart.css";
import { CartProductCard, CartTotal } from "../../components/index";
import { useCart } from "../../contexts/index";
import { useNavigate } from "react-router-dom";
export function Cart() {
  const navigate = useNavigate();
  const { cart } = useCart();
  if (cart.length === 0) {
    return (
      <section className="empty flex-column">
        <img src="https://ik.imagekit.io/mandeshiagro/assets/cartempty_5ruq5QVH3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1649009269745" />
        <h1>Your cart is empty</h1>
        <button
          className="btn-continue-shopping"
          onClick={() => navigate("/products")}
        >
          Continue Shopping
        </button>
      </section>
    );
  } else {
    return (
      <div className="page-main">
        <div className="cart-title-container flex-row-center">
          <img
            className="align-end"
            src="https://ik.imagekit.io/mandeshiagro/assets/cart/cart-icon_EuUJ1yC6b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648264676959"
            alt="cart-icon"
          />
          <h2 className="text-centered">Cart</h2>
        </div>
        <div className="cart-wrapper flex-row-center flex-wrap">
          <section className="cart-products flex-column">
            {cart.map((cartItem) => {
              return <CartProductCard key={cartItem._id} product={cartItem} />;
            })}
          </section>
          <CartTotal cart={cart} />
        </div>
      </div>
    );
  }
}
