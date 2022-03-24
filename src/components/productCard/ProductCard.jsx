export const ProductCard = (prop) => {
  return (
    <div class="product-card flex-column">
      <div class="product-img-container">
        <img class="responsive-img" src={prop.product.imgSrc} alt={prop.product.productName} />
      </div>
      <span class="wishlist">
        <i class="fa fa-heart"></i>
      </span>
      <div class="product-card-body flex-column">
        <h3 class="product-title">{prop.product.productName}</h3>
        <div class="price-rating-wrapper flex-row justify-space-between">
          <div class="product-price-container flex-row">
            <h4 class="price">{prop.product.price}</h4>
            <h5 class="price-line-through align-end">{prop.product.prevPrice}</h5>
          </div>
          <div class="card-rating flex-row">
            <div class="flex-row align-center">
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon"> star </span>
              <span class="material-icons rating-icon">star_half</span>
              <span class="material-icons rating-icon fs-16">star_border</span>
            </div>
            <p class="rating-count align-center">{prop.product.ratingCount}</p>
          </div>
        </div>
        <div class="product-card-actions flex-row flex-wrap">
          <div class="quantity-box flex-row">
            <button
              onClick={() =>
                // setQuantityCount(
                //   quantityCount <= 1 ? quantityCount : quantityCount - 1
                // )
                console.log("")
              }
              class="btn-decrement"
            >
              -
            </button>
            <input
              class="product-quantity"
              type="number"
              name="quantity"
              value={1}
              min="1"
            />
            <button
              onClick={() =>
                // setQuantityCount((quantityCount) => quantityCount + 1)
                console.log("")

              }
              class="btn-increment"
            >
              +
            </button>
          </div>
          <a href="#" class="btn-add-cart flex-row-center">
            <i class="fa fa-shopping-cart"></i>
            ADD TO CART
          </a>
        </div>
      </div>
    </div>
  );
};
