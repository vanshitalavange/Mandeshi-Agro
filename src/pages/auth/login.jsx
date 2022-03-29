import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../contexts/index";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLoggedIn, setUserDetails } = useAuth();
  const navigate = useNavigate();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const guestCredentials = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const setDetails = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setLoginCredentials({ ...loginCredentials, [name]: value });
  };
  const loginHandler = async (data) => {
    try {
      const response = await axios.post("/api/auth/login", data);
      if (response.status === 200) {
        setIsLoggedIn(true);
        setUserDetails(response.data.foundUser);
        localStorage.setItem("token", response.data.encodedToken);
        navigate("/");
      }
    } catch (error) {
      setErrorMsg("YOUR EMAIL IS NOT REGISTERED WITH US😔");
    }
  };
  const submitLoginForm = (event) => {
    event.preventDefault();
    loginHandler(loginCredentials);
  };
  return (
    <section className="login flex-col-center">
      <h2>Sign in</h2>
      <form onSubmit={submitLoginForm} className="login-form flex-column">
        <div className="input-field-wrapper flex-column">
          <label for="email">Email</label>
          <input
            onChange={(event) => setDetails(event)}
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
          <div className="input-box flex-row">
            <input
              onChange={(event) => setDetails(event)}
              id="password"
              className="form-input"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="password"
              required
            />
            {!showPassword ? (
              <AiFillEye
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword(true);
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword(false);
                }}
              />
            )}
          </div>
        </div>
        <small className="error-msg text-centered">{errorMsg}</small>
        <div
          type="submit"
          className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary"
        >
          <span className="material-icons btn-icon"> east </span>
          <button className="icon-btn icon-btn-logout">Sign in</button>
        </div>
      </form>
      <div
        onClick={() => loginHandler(guestCredentials)}
        className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-secondary"
      >
        <span className="material-icons btn-icon"> east </span>
        <button className="icon-btn icon-btn-logout">Sign in as a Guest</button>
      </div>
      <p class="msg">
        Don't have an account?{" "}
        <Link to="/signup" className="link-to-option">
          Signup here
        </Link>
      </p>
    </section>
  );
};
