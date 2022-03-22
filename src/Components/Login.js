import "./Login.css";

import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();
  const navigateToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-border">
      <div className="login">
        <label htmlFor="user" className="form-label">
          <b>Email address or username</b>
        </label>
        <span>
          <input
            id="user"
            className="form-control form-control"
            type="text"
            placeholder="email"
          />
        </span>
        <br />
        <label htmlFor="pass" className="form-label">
          <b>Password</b>
        </label>
        <span>
          <input
            id="pass"
            className="form-control form-control"
            type="password"
            placeholder="password"
          />
        </span>
        <br />
        <button className="btn btn-success p-1 btn-block" type="submit">
          Login
        </button>
        <br />
        <br />
        <span>
          <b> Don't have an account?</b>
        </span>
        <br />
        <button
          onClick={navigateToRegister}
          className="btn btn-outline-dark p-1 btn-block"
        >
          Signup
        </button>
      </div>
    </div>
  );
};
