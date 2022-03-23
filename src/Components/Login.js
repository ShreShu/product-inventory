import "./Login.css";

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const Login = () => {
  const navigate = useNavigate();
  const [found, setFound] = useState(false);
  const [credentials, setCredentails] = useState({
    email: "",
    password: "",
  });

  const [users, setUsers] = useState([]);

  const loadUserData = () => {
    axios
      .get("http://localhost:3001/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    loadUserData();
  }, []);

  const navigateToRegister = () => {
    navigate("/register");
  };
  const handleChange = (props) => (event) => {
    setCredentails({ ...credentials, [props]: event.target.value });
  };

  const verify = (credentials) => {
    for (let i = 0; i < users.length; i++) {
      if (
        credentials.email === users[i].email &&
        credentials.password === users[i].password
      ) {
        setFound(true);
      }
    }
  };

  const loginValidation = (e) => {
    e.preventDefault();
    verify(credentials);
    if (found) {
      localStorage.setItem("user", credentials.email);
    }
    console.log(credentials);
  };

  return (
    <div>
      {found ? (
        <div>{credentials.email}</div>
      ) : (
        <form onSubmit={loginValidation}>
          <div className="login-border">
            <div className="login">
              <label htmlFor="user" className="form-label">
                <b>Email address or username</b>
              </label>
              <span>
                <input
                  id="email"
                  className="form-control form-control"
                  type="text"
                  name="email"
                  placeholder="email"
                  onChange={handleChange("email")}
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
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={handleChange("password")}
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
        </form>
      )}
    </div>
  );
};
