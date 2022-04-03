export const CartProductCard = ({ product }) => {
  const { imgSrc, productName, price, prevPrice } = { ...product };
  return (
    <div className="cart-product-card flex-row">
      <div className="cart-product-img-container align-center">
        <img
          className="responsive-img"
          src={imgSrc}
          alt={productName}
        />
      </div>
      <div className="cart-product-card-body flex-column">
        <h3 className="card-title">{productName}</h3>
        <div className="quantity-wrapper flex-row">
          <p className="align-center">Quantity</p>
          <div className="quantity-box flex-row align-end">
            <button className="btn-increment">+</button>
            <input
              className="product-quantity"
              type="text"
              name="quantity"
              value="1"
              min="1"
            />
            <button className="btn-decrement">-</button>
          </div>
        </div>
        <div className="product-price-container flex-row">
          <h4 className="price">₹{price}</h4>
          <h5 className="price-line-through align-end">₹{prevPrice}</h5>
        </div>
        <div className="cart-card-actions flex-column">
          <button className="btn-move-to-wishlist flex-row-center">
            <i className="fa fa-heart"></i>
            MOVE TO WISHLIST
          </button>
          <button className="btn-remove-from-cart">REMOVE</button>
        </div>
      </div>
    </div>
  );
};
