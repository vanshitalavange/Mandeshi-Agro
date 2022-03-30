import "./Header.css";
import "../../App.css";
import { Link, useNavigate } from "react-router-dom";
import { ResponsiveNavbarForMobile, ResponsiveNavbarForTablet } from "../index";
import { useNavbar, useAuth } from "../../contexts/index";
import { useState } from "react";
export function Header() {
  const navigate = useNavigate();
  const { setShowResponsiveNavbarForMobile } = useNavbar();
  const { isLoggedIn, setIsLoggedIn, userDetails } = useAuth();
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
                0
              </span>
            </div>
          </Link>
          {isLoggedIn ? (
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
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
            className="btn-logout display-none"
            style={{ display: isLoggedIn && showLogoutBtn ? "block" : "none" }}
          >
            Logout
          </button>
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
                  0
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
                  0
                </span>
              </div>
              <li className="list-item align-center">Wishlist</li>
            </div>
          </Link>
          <div className="list-item-box list-item-login flex-row">
            <i className="fa fa-user header-icon header-badge-icon"></i>
            {isLoggedIn ? (
              <li
                onClick={() => navigate("/")}
                className="list-item align-center"
              >
                {userDetails.firstName === "" ? "User" : userDetails.firstName}
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
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
            className="btn-logout display-none"
            style={{ display: isLoggedIn ? "block" : "none" }}
          >
            Logout
          </button>
        </ul>
      </nav>
    </header>
  );
}
