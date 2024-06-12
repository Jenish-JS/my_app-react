import React, { useState } from "react";
import "./Signup.css";
import { useNavigate, useSearchParams } from "react-router-dom";

function Login() {

  let [param, setParam] = useSearchParams()

  let navigator = useNavigate();

  console.log("params === ", param.get("name"));
  console.log("params === ", param.get("email"));

  return (
    <div>
      <section className="w3l-workinghny-form">
        <div className="workinghny-form-grid">
          <div className="wrapper">
            <div className="logo">
              <h1>
                <a className="brand-logo" href="#">
                  My App login form
                </a>
              </h1>
            </div>
            <div className="workinghny-block-grid">
              <div className="form-right-inf">
                <h2>Login </h2>
                <div className="login-form-content">
                  <form action="#" className="signin-form">
                    <div className="one-frm">
                      <input
                        type="email"
                        name="Email"
                        placeholder="Email"
                        required=""
                        autoFocus
                      />
                    </div>
                    <div className="one-frm">
                      <input
                        type="password"
                        name="Password"
                        placeholder="Password"
                        required=""
                      />
                    </div>
            
                    <button className="btn btn-style mt-3">Login </button>
                    <button
                      className="btn btn-style mt-3"
                      onClick={(e) => {
                        e.preventDefault();
                        navigator("/signUp");
                      }}
                    >
                      SignUp
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright text-center">
          <div className="wrapper">
            <p className="copy-footer-29">
              &copy; 2024 My App login form. All rights reserved | Design by{" "}
              <a href="#">My App</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Login;
