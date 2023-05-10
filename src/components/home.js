import React from "react";
import Footer from "../functional-components/footer";
import "../css/home.css"
// import BonkoImage from "../media/bonko.png";

class Home extends React.Component {
  constructor() {
    super();
    this.state = { color: "red" };
  }
  render() {
    return (
      <div className="home-page-container">
        <div className="background-style-div"></div>
        <div className="home-body-container">
          <div className="home-content-container">
            <div className="header-container home-account-menu-header">
              <div id="hamburger-icon"></div>
              <div className="home-account-container">
                <div className="home-account-icon-container"></div>
                <div className="home-account-name-container">
                  <h3>bonko admin</h3>
                </div>
              </div>
            </div>
            <div className="header-container">
              <div className="home-menu-options-container">
                <h3>Dashboard Overlaying Users Calendar</h3>
                <h3>Boards</h3>
                <h3>Metrics</h3>
                <h3>???</h3>
              </div>
            </div>
            <div className="home-panel-container">
              <div className="home-panel">
                <div className="header-container">
                  <h3>to be determined</h3>
                </div>
                <div className="home-calendar-container">
                  <div className="home-calendar">
                    <h3>calendar</h3>
                  </div>
                </div>
              </div>
              <div className="home-panel">
                <div className="home-to-do-container">
                  <div className="home-to-do-header">
                    <h3><i className="arrow left"></i>yesterday</h3>
                    <div className="home-to-do-header-text-container">
                      <h3>Today's todo</h3>
                      <h3>05/10/2023</h3>
                    </div>
                    <h3>tomorrow<i className="arrow right"></i></h3>
                  </div>
                  <div className="home-to-do-body">
                    <div className="home-to-do-list-container">
                      <ul>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                        <li>item</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
