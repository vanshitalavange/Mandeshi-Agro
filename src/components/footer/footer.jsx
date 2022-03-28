import "./Footer.css";
import { Link } from "react-router-dom";
export function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-contents-wrapper flex-column">
        <div className="footer-details flex-row justify-space-between flex-wrap">
          <div className="footer-brand-details flex-column">
            <div className="footer-logo">
              <Link to="/">
                <img src="https://ik.imagekit.io/mandeshiagro/assets/ma_logo_Ldl4fONTR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1648266237941" alt="brand-logo" />
              </Link>
            </div>
            <span>Copyright © 2022 Mandeshi Agro</span>
            <span>All rights reserved</span>
            <div className="social-links flex-row">
              <img src="https://img.icons8.com/fluency/38/000000/instagram-new.png" alt="instagram-url"/>
              <img src="https://img.icons8.com/fluency/38/000000/linkedin.png" alt="linkedin-url"/>
              <img src="https://img.icons8.com/fluency/38/000000/facebook-new.png" alt="facebook-url"/>
            </div>
          </div>
          <div className="footer-nav-links">
            <ul className="footer-nav-list flex-column">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/products">Products</Link>
              </li>
              <li>
                <Link to="/auth">
                  <Link to="/auth">Sign in</Link>
                </Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
            </ul>
          </div>
          <div className="subscribe-section">
            <h3>Subscribe</h3>
            <div className="email">
              <input type="email" className="email-input" placeholder="Email" />
              <button type="submit" className="btn-join">
                Join
              </button>
            </div>
          </div>
        </div>
        <p className="footer-bottom-text text-centered">
          created by
          <a href="https://github.com/vanshitalavange">vanshitalavange</a> -
          <strong>@neogcamp</strong>
        </p>
      </div>
    </footer>
  );
}
