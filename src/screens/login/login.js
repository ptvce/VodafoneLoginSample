import "../../App.css";
import logo from "../../assets/images/128px-Vodafone_icon.svg.png";
import React from "react";

const Login = () => {

  return info.data ? (
    <div>
      <div className="login-container">
        <div className="login-center-box">
          <div className="login-form-container">
            <div className="login-form">
              <div className="login-logo">
                <img src={logo} width="30px" height="30px" alt="logo" />
              </div>
              <p className="login-title">{info.data.title}</p>
              <div className="login-summary">
                <p>{info.data.summary}</p>
              </div>
              <br />
              <div className="login-input-container">
                <input
                  className="login-input"
                  onChange={(event) => handleChange(event)}
                  name="mobile"
                  placeholder={LOGIN.MOBILE}
                />
              </div>
              <div className="login-button-container">
                <button className="login-button" onClick={() => loginUser()}>
                  SMS me link
                </button>
              </div>
              {info.data.helps.map((h, index) => (
                <div id={`help-${index}`} className="login-link-container">
                  <div className="login-link-button" onClick={handleOpen}>
                    {h.title}
                  </div>
                 
                </div>
              ))}

              <div>
                <span className="line"></span>
              </div>
              <div className="login-button-container">
                <button
                  type="button"
                  className="login-submit-button"
                  onClick={goToHome}
                >
                  Vodafone home
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
};

export default Login;
