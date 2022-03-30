import "./ProductCard.css";

export const ProductCard = ({ product }) => {
  const {
    _id,
    productName,
    price,
    prevPrice,
    imgSrc,
    rating,
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
