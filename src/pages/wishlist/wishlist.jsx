import "./wishlist.css";
import { WishListItem } from "../../components/index";
import { useAuth, useWishlist } from "../../contexts/index";
import { useNavigate } from "react-router-dom";
export function WishList() {
  const navigate = useNavigate();
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <section className="empty-wishlist flex-column">
        <img src="https://ik.imagekit.io/mandeshiagro/assets/empty-wishlist_x-bQ_q1faR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648897871766" />
        <h1>Your wishlist is empty</h1>
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
      <section class="products-wishlist flex-column">
        <div class="wishlist-header flex-row">
          <h2>My Wishlist</h2>
          <span class="align-end">{wishlist.length + " items"}</span>
        </div>
        <div class="wishlist-items">
          {wishlist.map((item) => {
            return <WishListItem key={item._id} wishlistedProduct={item} />;
          })}
        </div>
      </section>
    );
  }
}
