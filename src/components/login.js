import React from "react";
import "../css/style.css";
import "../css/login.css";
import BonkoImage from "../media/bonko.png";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { color: "blue" };
  }
  render() {
    return (
      <div className="page-container">
        <div className="background-style-div"></div>
        <div className="body-container">
          <div className="content-container">
            <div className="bonko-logo-container">
              <div className="bonko-logo">
                <img src={BonkoImage}></img>
              </div>
              <div className="bonko-menu-container">
                <h1>bonko</h1>
                <br></br>
                <h3>login</h3>
                <h3>create account</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
