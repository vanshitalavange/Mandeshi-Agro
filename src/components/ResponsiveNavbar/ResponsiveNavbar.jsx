import { Link, useNavigate } from "react-router-dom";
import { useNavbar, useAuth } from "../../contexts/index";
import "./ResponsiveNavbar.css";
export function ResponsiveNavbarForMobile() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const { showResponsiveNavbarForMobile, setShowResponsiveNavbarForMobile } =
    useNavbar();
  return showResponsiveNavbarForMobile ? (
    <div className="responsive-navbar flex-column">
      <button
        onClick={() => setShowResponsiveNavbarForMobile(false)}
        className="btn-close-nav align-end"
      >
        <i className="fa fa-close header-icon"></i>
      </button>
      <ul className="flex-column responsive-nav-list">
        <Link to="/">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Home
          </li>
        </Link>
        <Link to="/products">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Products
          </li>
        </Link>
        <li
          onClick={() => {
            setShowResponsiveNavbarForMobile(false);
            isLoggedIn ? navigate("/") : navigate("/login");
          }}
          className="responsive-nav-list-item"
        >
          Sign in
        </li>
        <Link to="/wishlist">
          <li
            onClick={() => setShowResponsiveNavbarForMobile(false)}
            className="responsive-nav-list-item"
          >
            Wishlist
          </li>
        </Link>
      </ul>
    </div>
  ) : null;
}
export function ResponsiveNavbarForTablet() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const navigate = useNavigate();
  return (
    <ul className="nav-list-for-tablets flex-row">
      <li>
        <i className="fa fa-search header-icon align-center"></i>
      </li>
      <Link to="/products">
        <li>
          <span className="material-icons header-icon products-icon align-center">
            inventory
          </span>
        </li>
      </Link>
      <Link to="/cart">
        <li>
          <div className="badge">
            <i className="fa fa-shopping-cart header-icon header-badge-icon"></i>
            <span className="badge-counter badge-round badge-counter-right">0</span>
          </div>
        </li>
      </Link>
      <Link to="/wishlist">
        <li>
          <div className="badge">
            <i className="fa fa-heart header-icon header-badge-icon"></i>
            <span className="badge-counter badge-round badge-counter-right">0</span>
          </div>
        </li>
      </Link>
      <li>
        <i
          onClick={() => (isLoggedIn ? navigate("/") : navigate("/login"))}
          className="fa fa-user header-icon header-badge-icon align-end"
        ></i>
      </li>
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
  );
}
