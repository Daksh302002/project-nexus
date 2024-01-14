import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import "./style.css";

function Index() {
  const [action, setAction] = useState("Sign Up");

  return (
    <div>
      <div className="container">
        <div className="form-box">
          <h1 id="title">{action}</h1>
          <form action="" name="login">
            <div className="input-group">
              {action === "Sign Up" ? (
                <div className="input-field" id="nameField">
                  <FontAwesomeIcon className="icons" icon={faUser} />
                  <input type="text" placeholder="Name" required name="name" />
                </div>
              ) : (
                " "
              )}
              <div className="input-field">
                <FontAwesomeIcon className="icons" icon={faEnvelope} />
                <input type="email" placeholder="Email" required name="email" />
              </div>
              <div className="input-field">
                <FontAwesomeIcon className="icons" icon={faLock} />
                <input
                  type="password"
                  placeholder="Password"
                  required
                  name="password"
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon className="icons" icon={faLock} />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  name="Confirmpassword"
                />
              </div>
            </div>
            <div
              className={
                action === "Sign Up" ? "ForgotPassword" : "ForgotPassword1"
              }
            >
              <p>
                {" "}
                Forgot Password?
                <span>Click Here!</span>
              </p>
            </div>
            <div className="btn-field">
              <button
                type="submit"
                className={action === "login" ? " disable" : " "}
                onClick={() => {
                  setAction("Sign Up");
                }}
              >
                Sign up
              </button>
              <button
                type="submit"
                className={action === "Sign Up" ? " disable" : " "}
                onClick={() => {
                  setAction("login");
                }}
              >
                login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
