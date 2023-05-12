import React from "react";
import "../css/style.css";
import "../css/login.css";
import BonkoImage from "../media/bonko.png";
import Footer from "../functional-components/footer";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { color: "blue" };
  }
  render() {
    return (
      <div className="login-page-container">
        <div className="background-style-div"></div>
        <div className="login-body-container">
          <div className="login-content-container">
            <div className="login-bonko-logo-container">
              <div className="login-bonko-logo">
                <img src={BonkoImage}></img>
              </div>
              <div className="login-bonko-menu-container">
                <h1 className="login-bonko-text">bonko</h1>
                <h5 className="login-bonko-text">task-tracker</h5>
                <br></br>
                <h3 className="login-bonko-text">login</h3>
                <h3 className="login-bonko-text">create account</h3>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Login;
