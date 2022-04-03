import "./cart.css";
import { CartProductCard, CartTotal } from "../../components/index";
import { useCart } from "../../contexts/index";
export function Cart() {
  return (
    <div className="page-main">
      <div className="cart-title-container flex-row-center">
        <img
          src="https://ik.imagekit.io/mandeshiagro/assets/cart/cart-icon_EuUJ1yC6b.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648264676959"
          alt="cart-icon"
        />
        <h2 className="text-centered">Cart</h2>
      </div>
      <div className="cart-wrapper flex-row-center flex-wrap">
        <section className="cart-products flex-column">
          {cart.map(cartItem => {
            return <CartProductCard key={cartItem._id} product={cartItem}/>
          })}
        </section>
        <CartTotal />
      </div>
    </div>
  );
}
