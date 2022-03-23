import "./header.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { ResponsiveNavbarForMobile } from "../ResponsiveNavbar/ResponsiveNavbar";
import { ResponsiveNavbarForTablet } from "../ResponsiveNavbar/ResponsiveNavbar";
import { useNavbar } from "../../contexts/navbar-context";
export function Header() {
  const { setShowResponsiveNavbarForMobile } = useNavbar();
  return (
    <header class="page-header flex-row justify-space-between">
      <ResponsiveNavbarForMobile />
      <button
        onClick={() => {
          setShowResponsiveNavbarForMobile(true);
        }}
        class="hamburger-menu"
      >
        <i class="fa fa-bars header-icon"></i>
      </button>
      <Link to="/">
        <div class="header-logo">
          <img
            class="responsive-img"
            src="assets/ma_logo.png"
            alt="mandeshi-agro-logo"
          />
        </div>
      </Link>
      <div class="search-bar-box align-center flex-row justify-space-between">
        <input class="search-bar" type="text" placeholder="Search" />
        <i class="fa fa-search header-icon align-center"></i>
      </div>
      <nav class="nav-bar align-center">
        <div className="responsive-header-links flex-row ml-auto">
          <button>
            <i class="fa fa-search header-icon align-end mobile-search-icon"></i>
          </button>
          <Link to="/cart">
            <div class="badge mobile-cart-icon">
              <i class="fa fa-shopping-cart header-icon header-badge-icon"></i>
              <span class="badge-counter badge-round badge-counter-right">
                2
              </span>
            </div>
          </Link>
        </div>
        <ResponsiveNavbarForTablet />
        <ul class="nav-list flex-row">
          <Link to="/products">
            <div class="list-item-box flex-row">
              <span class="material-icons header-icon products-icon align-center">
                inventory
              </span>
              <li class="list-item list-item-products">Products</li>
            </div>
          </Link>
          <Link to="/cart">
            <div class="list-item-box flex-row">
              <div class="badge">
                <i class="fa fa-shopping-cart header-icon header-badge-icon"></i>
                <span class="badge-counter badge-round badge-counter-right">
                  2
                </span>
              </div>
              <li class="list-item align-center">Cart</li>
            </div>
          </Link>
          <Link to="/wishlist">
            <div class="list-item-box flex-row">
              <div class="badge">
                <i class="fa fa-heart header-icon header-badge-icon"></i>
                <span class="badge-counter badge-round badge-counter-right">
                  4
                </span>
              </div>
              <li class="list-item align-center">Wishlist</li>
            </div>
          </Link>
          <Link to="/auth">
            <div class="list-item-box list-item-login flex-row">
              <i class="fa fa-user header-icon header-badge-icon align-end"></i>
              <li class="list-item align-center">Login</li>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
