import { useCart } from "../../contexts/index";
export const CartTotal = () => {
  const {
    cart,
    cartTotal: { itemTotal, discountTotal, totalPrice },
    deliveryCharge,
  } = useCart();

  return (
    <section className="cart-total flex-column">
      <h3 className="cart-total-heading">Price details</h3>
      <div className="cart-total-details flex-column">
        <div className="cart-summary flex-column">
          <div className="cart-summary-item flex-row justify-space-between">
            <span>Price ({cart.length} items)</span>
            <span>₹ {itemTotal}</span>
          </div>
          <div className="cart-summary-item flex-row justify-space-between">
            <span>Discount</span>
            <span>- ₹ {discountTotal}</span>
          </div>
          <div className="cart-summary-item flex-row justify-space-between">
            <span>Delivery charges</span>
            <span>₹ {deliveryCharge}</span>
          </div>
        </div>
        <div className="cart-total-amount flex-row justify-space-between">
          <span>TOTAL AMOUNT</span>
          <span>₹ {totalPrice}</span>
        </div>
        <div className="alert flex-row alert-discount">
          <span className="material-icons-round check-icon">check_circle</span>
          <p className="alert-msg align-center">
            You saved ₹ {discountTotal} on this order
          </p>
        </div>
      </div>
      <button className="btn-place-order">PLACE ORDER</button>
    </section>
  );
};
