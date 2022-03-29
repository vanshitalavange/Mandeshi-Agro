import "./auth.css";
import { Link } from "react-router-dom";
export const Signup = () => {
  return (
    <section className="signup flex-col-center">
        <h2>Sign up</h2>
        <form action="" className="signup-form flex-column">
          <div className="input-field-wrapper flex-column">
            <label for="first-name">First Name</label>
            <input
              id="first-name"
              className="form-input"
              name="first-name"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
          <div className="input-field-wrapper flex-column">
            <label for="last-name">Last Name</label>
            <input
              id="last-name"
              className="form-input"
              name="last-name"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
          <div className="input-field-wrapper flex-column">
            <label for="email">Email</label>
            <input
              id="email"
              className="form-input"
              name="email"
              type="email"
              placeholder="user@example.com"
              required
            />
          </div>
          <div className="input-field-wrapper flex-column">
            <label for="password">Password</label>
            <input
              id="password"
              className="form-input"
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="input-field-wrapper flex-column">
            <label for="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              className="form-input"
              name="confirm-password"
              type="password"
              placeholder="Re-enter password"
              required
            />
          </div>
          <div className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary">
            <span className="material-icons btn-icon"> east </span>
            <button type="submit" className="icon-btn icon-btn-logout">
              Sign up
            </button>
          </div>
          <p>Already have an account? <Link to="/login" className="link-to-option">Sign in here</Link></p>
        </form>
    </section>
  );
};
