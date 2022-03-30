import "./auth.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../contexts/index";
import { AiOutlineEyeInvisible, AiFillEye } from "react-icons/ai";
import axios from "axios";
export const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });
  const { setIsLoggedIn, setUserDetails } = useAuth();
  const [helperMsg, setHelperMsg] = useState("");
  const [newUserDetails, setNewUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setDetails = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "confirmPassword" && newUserDetails.password !== "") {
      if (newUserDetails.password === value) {
        setHelperMsg("Passwords matched 😃");
        setNewUserDetails({ ...newUserDetails, [name]: value });
      } else {
        setHelperMsg("Passwords don't match 😞");
      }
    } else {
      setNewUserDetails({ ...newUserDetails, [name]: value });
    }
  };
  const signupHandler = async () => {
    try {
      const response = await axios.post("/api/auth/signup", newUserDetails);
      if (response.status === 201) {
        setIsLoggedIn(true);
        setUserDetails(response.data.createdUser);
        localStorage.setItem("token", response.data.encodedToken);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const submitSignupForm = (event) => {
    event.preventDefault();
    if (helperMsg === "Passwords matched 😃") {
      signupHandler();
    } else {
      setHelperMsg("Please enter the same password");
    }
  };
  return (
    <section className="signup flex-col-center">
      <h2>Sign up</h2>
      <form onSubmit={submitSignupForm} className="signup-form flex-column">
        <div className="input-field-wrapper flex-column">
          <label for="first-name">First Name</label>
          <input
            onChange={(event) => setDetails(event)}
            id="first-name"
            className="form-input"
            name="firstName"
            type="text"
            placeholder="First Name"
            required
          />
        </div>
        <div className="input-field-wrapper flex-column">
          <label for="last-name">Last Name</label>
          <input
            onChange={(event) => setDetails(event)}
            id="last-name"
            className="form-input"
            name="lastName"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>
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
          <div class="input-box flex-row">
            <input
              onChange={(event) => setDetails(event)}
              id="password"
              className="form-input"
              name="password"
              type={showPassword.password ? "text" : "password"}
              placeholder="Password"
              required
            />
            {!showPassword.password ? (
              <AiFillEye
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, password: true });
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, password: false });
                }}
              />
            )}
          </div>
        </div>
        <div className="input-field-wrapper flex-column">
          <label for="confirm-password">Confirm Password</label>
          <div class="input-box flex-row">
            <input
              onChange={(event) => setDetails(event)}
              id="confirm-password"
              className="form-input"
              name="confirmPassword"
              type={showPassword.confirmPassword ? "text" : "password"}
              placeholder="Re-enter password"
              required
            />
            {!showPassword.confirmPassword ? (
              <AiFillEye
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, confirmPassword: true });
                }}
              />
            ) : (
              <AiOutlineEyeInvisible
                size={25}
                className="align-center"
                onClick={() => {
                  setShowPassword({ ...showPassword, confirmPassword: false });
                }}
              />
            )}
          </div>
        </div>
        <p className="text-centered">{helperMsg}</p>
        <div className="btn icon-btn-container icon-btn-container-logout btn-verify justify-center btn-primary">
          <span className="material-icons btn-icon"> east </span>
          <button type="submit" className="icon-btn icon-btn-logout">
            Sign up
          </button>
        </div>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="link-to-option">
            Sign in here
          </Link>
        </p>
      </form>
    </section>
  );
};
