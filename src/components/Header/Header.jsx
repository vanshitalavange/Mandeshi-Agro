import "./Header.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { ResponsiveNavbarForMobile, ResponsiveNavbarForTablet } from "../index";
import { useNavbar, useAuth, useWishlist, useCart } from "../../contexts/index";
import { useState } from "react";
import { logout } from "../../services/auth-services/logout-service";
export function Header() {
  const { userState, setUserState } = useAuth();
  const { loginStatus, firstName } = userState;
  const { wishlist } = useWishlist();
  const { cart } = useCart();
  const navigate = useNavigate();
  const { setShowResponsiveNavbarForMobile } = useNavbar();

  const [showLogoutBtn, setShowLogoutBtn] = useState(false);
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
        <i className="fa fa-search header-icon align-end"></i>
      </div>
      <nav className="nav-bar align-center">
        <div className="responsive-header-links flex-row ml-auto">
          <button>
            <i className="fa fa-search mobile-search-icon header-icon header-badge-icon align-end"></i>
          </button>
          <Link to="/cart">
            <div className="badge mobile-cart-icon">
              <i className="fa fa-shopping-cart header-icon header-badge-icon"></i>
              {loginStatus && (
                <span className="badge-counter badge-round badge-counter-right">
                  {cart.length}
                </span>
              )}
            </div>
          </Link>
          {loginStatus ? (
            <i
              onClick={() => {
                showLogoutBtn
                  ? setShowLogoutBtn(false)
                  : setShowLogoutBtn(true);
              }}
              className="fa fa-user header-icon header-badge-icon"
            ></i>
          ) : null}
          <button
            onClick={() => logout(setUserState)}
            className="btn-logout display-none"
            style={{ display: loginStatus && showLogoutBtn ? "block" : "none" }}
          >
            Logout
          </button>
        </div>
        <ResponsiveNavbarForTablet />
        <ul className="nav-list flex-row">
          <Link to="/products">
            <div className="list-item-box flex-row">
              <span className="material-icons header-icon header-badge-icon">
                inventory
              </span>
              <li className="list-item align-center">Products</li>
            </div>
          </Link>
          <Link to="/cart">
            <div className="list-item-box flex-row">
              <div className="badge">
                <i className="fa fa-shopping-cart header-icon header-badge-icon"></i>
                {loginStatus && (
                  <span className="badge-counter badge-round badge-counter-right">
                    {cart.length}
                  </span>
                )}
              </div>
              <li className="list-item align-center">Cart</li>
            </div>
          </Link>
          <Link to="/wishlist">
            <div className="list-item-box flex-row">
              <div className="badge">
                <i className="fa fa-heart header-icon header-badge-icon"></i>
                {loginStatus && (
                  <span className="badge-counter badge-round badge-counter-right">
                    {wishlist.length}
                  </span>
                )}
              </div>
              <li className="list-item align-center">Wishlist</li>
            </div>
          </Link>
          <div className="list-item-box list-item-login flex-row">
            <i className="fa fa-user header-icon header-badge-icon"></i>
            {loginStatus ? (
              <li
                onClick={() => navigate("/")}
                className="list-item align-center"
              >
                {firstName === "" ? "Adarsh" : firstName}
              </li>
            ) : (
              <li
                onClick={() => navigate("/login")}
                className="list-item align-center"
              >
                Login
              </li>
            )}
          </div>
          <button
            onClick={() => logout(setUserState)}
            className="btn-logout display-none"
            style={{ display: loginStatus ? "block" : "none" }}
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
}
