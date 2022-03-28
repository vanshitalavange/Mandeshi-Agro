import "./Header.css";
import "../../App.css";
import { Link } from "react-router-dom";
import { ResponsiveNavbarForMobile, ResponsiveNavbarForTablet } from "../index";
import { useNavbar } from "../../contexts/navbar-context";
export function Header() {
  const { setShowResponsiveNavbarForMobile } = useNavbar();
  return (
    <header className="page-header flex-row justify-space-between">
      <ResponsiveNavbarForMobile />
      <button
        onClick={() => {
          setShowResponsiveNavbarForMobile(true);
        }}
        className="hamburger-menu"
      >
        <i className="fa fa-bars header-icon"></i>
      </button>
      <Link to="/">
        <div className="header-logo">
          <img
            className="responsive-img"
            src="https://ik.imagekit.io/mandeshiagro/assets/ma_logo_Ldl4fONTR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648266237941"
            alt="mandeshi-agro-logo"
          />
        </div>
      </Link>
      <div className="search-bar-box align-center flex-row justify-space-between">
        <input className="search-bar" type="text" placeholder="Search" />
        <i className="fa fa-search header-icon align-center"></i>
      </div>
      <nav className="nav-bar align-center">
        <div className="responsive-header-links flex-row ml-auto">
          <button>
            <i className="fa fa-search header-icon align-end mobile-search-icon"></i>
          </button>
          <Link to="/cart">
            <div className="badge mobile-cart-icon">
              <i className="fa fa-shopping-cart header-icon header-badge-icon"></i>
              <span className="badge-counter badge-round badge-counter-right">
                2
              </span>
            </div>
          </Link>
        </div>
        <ResponsiveNavbarForTablet />
        <ul className="nav-list flex-row">
          <Link to="/products">
            <div className="list-item-box flex-row">
              <span className="material-icons header-icon products-icon align-center">
                inventory
              </span>
              <li className="list-item list-item-products">Products</li>
            </div>
          </Link>
          <Link to="/cart">
            <div className="list-item-box flex-row">
              <div className="badge">
                <i className="fa fa-shopping-cart header-icon header-badge-icon"></i>
                <span className="badge-counter badge-round badge-counter-right">
                  2
                </span>
              </div>
              <li className="list-item align-center">Cart</li>
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="list-item-box flex-row">
              <div className="badge">
                <i className="fa fa-heart header-icon header-badge-icon"></i>
                <span className="badge-counter badge-round badge-counter-right">
                  4
                </span>
              </div>
              <li className="list-item align-center">Wishlist</li>
            </div>
          </Link>
          <Link to="/auth">
            <div className="list-item-box list-item-login flex-row">
              <i className="fa fa-user header-icon header-badge-icon align-end"></i>
              <li className="list-item align-center">Login</li>
            </div>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
