import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function FormTwo(props) {
  return (
    <>
      <div className="hero">
        <div className="sign-in-form-two">
          <div className="top-section">
            <div className="image"></div>
            <h1>{props.title}</h1>
          </div>
          <div className="mid-section">
            <div className="line">
              <h3>{props.welcome}</h3>
              <p>Please sign-up to your account and start the adventure</p>
            </div>
            <div className="form">
              <div>
                <label>EMAIL OR USERNAME</label>
                <input
                  type="email"
                  placeholder="Enter your email or username"
                />
              </div>
              <div>
                <div className="space-btw">
                  <label>PASSWORD</label>
                  {/* <a href="/">Forgot Password?</a> */}
                </div>
                <input type="password" placeholder="Create Password" />
              </div>
              <div>
                <div className="space-btw">
                  <label>PASSWORD</label>
                  {/* <a href="/">Forgot Password?</a> */}
                </div>
                <input type="password" placeholder="Confirm Password" />
              </div>
              <button>Sign Up</button>
            </div>
            <div className="center">
              <p>
                Already have an account?{" "}
                <Link to="/">Sign-In to an account</Link>
              </p>
            </div>
          </div>
          <div className="bot-section">
            <div className="one">
              <span></span>
              <p>or</p>
              <span></span>
            </div>
            <div className="icons">
              <i class="bx bxl-facebook"></i>
              <i class="bx bxl-google-plus"></i>
              <i class="bx bxl-twitter"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
