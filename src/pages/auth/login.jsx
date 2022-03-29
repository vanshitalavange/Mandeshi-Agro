import "./auth.css";
import { Link } from "react-router-dom";
export const Login = () => {
  return (
    <section className="login flex-col-center">
        <h2>Sign in</h2>
        <form className="login-form flex-column">
          <div className="input-field-wrapper flex-column">
            <label for="email">Email</label>
            <input
              id="user-email"
              className="form-input"
              name="user-email"
              type="email"
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="input-field-wrapper flex-column">
            <label for="password">Password</label>
            <input
              id="user-password"
              className="form-input"
              name="user-password"
              type="password"
              placeholder="password"
              required
            />
          </div>
          <small className="text-centered">
            <a href="#" className="forgot-password">
              Forgot your password?
            </a>
          </small>
          <div className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary">
            <span className="material-icons btn-icon"> east </span>
            <button type="submit" className="icon-btn icon-btn-logout">
              Sign in
            </button>
          </div>
          <div className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-secondary">
            <span className="material-icons btn-icon"> east </span>
          <button type="submit" className="icon-btn icon-btn-logout">
              Sign in as a Guest
            </button>
            </div>
            <p>Don't have an account? <Link to="/signup" className="link-to-option">Signup here</Link></p>
        </form>
    </section>
  );
};
