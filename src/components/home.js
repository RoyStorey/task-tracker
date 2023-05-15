import React from "react";
import Footer from "../functional-components/footer";
import "../css/home.css"
import "../css/hamburger.css"
import toggleHamburgerMenu from "../functions/toggle-hamburger-menu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHamburger, faCheck, faX, faCoffee, faLineChart, faChessBoard, faDashboard } from '@fortawesome/free-solid-svg-icons'
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
              <div className="hamburger-icon-container">
                <FontAwesomeIcon icon={faHamburger} onClick={toggleHamburgerMenu} className="hamburger-icon interactable" />
              </div>
              <div className="home-account-container">
                <div className="home-account-icon-container"></div>
                <div className="home-account-name-container interactable">
                  <h3>fname lname<i className="arrow down"></i></h3>
                </div>
              </div>
            </div>
            <div className="home-panel-container">
              <div className="home-panel">
                <div className="header-container">
                  <h3>to be determined</h3>
                </div>
                <div className="home-calendar-container">
                  <div className="home-calendar">
                    <h5>calendar</h5>
                  </div>
                </div>
              </div>
              <div className="home-panel">
                <div className="home-to-do-container">
                  <div className="home-to-do-header">
                    <h3 className="interactable"><i className="arrow left"></i>yesterday</h3>
                    <div className="home-to-do-header-text-container interactable">
                      <h3>Today's todo</h3>
                      <h3>05/10/2023</h3>
                    </div>
                    <h3 className="interactable">tomorrow<i className="arrow right"></i></h3>
                  </div>
                  <div className="home-to-do-body">
                    <div className="home-to-do-list-container">
                      <ul>
                        <div className="home-to-do-list-item-container">
                          <li className="home-to-do-list-item-name interactable">item 1</li>
                          <li> 0/5 completed</li>
                          <div className="home-to-do-list-item-checkbox-container">
                            <FontAwesomeIcon icon={faCheck} className="list-item-check-icon" />
                            <FontAwesomeIcon icon={faX} className="list-item-x-icon" />
                          </div>
                        </div>
                        <div className="home-to-do-list-item-container">
                          <li className="home-to-do-list-item-name interactable">item 2</li>
                          <li>0/5 completed</li>
                          <div className="home-to-do-list-item-checkbox-container">
                            <FontAwesomeIcon icon={faCheck} className="list-item-check-icon" />
                            <FontAwesomeIcon icon={faX} className="list-item-x-icon" />
                          </div>
                        </div>
                        <div className="home-to-do-list-item-container">
                          <li className="home-to-do-list-item-name interactable">item 3</li>
                          <li>1/3 completed</li>
                          <div className="home-to-do-list-item-checkbox-container">
                            <FontAwesomeIcon icon={faCheck} className="list-item-check-icon" />
                            <FontAwesomeIcon icon={faX} className="list-item-x-icon" />
                          </div>
                        </div>
                        <div className="home-to-do-list-item-container">
                          <li className="home-to-do-list-item-name interactable">item 4</li>
                          <li>0/9 completed</li>
                          <div className="home-to-do-list-item-checkbox-container">
                            <FontAwesomeIcon icon={faCheck} className="list-item-check-icon" />
                            <FontAwesomeIcon icon={faX} className="list-item-x-icon" />
                          </div>
                        </div>
                        <div className="home-to-do-list-item-container">
                          <li className="home-to-do-list-item-name interactable">item 5</li>
                          <li>4/5 completed</li>
                          <div className="home-to-do-list-item-checkbox-container">
                            <FontAwesomeIcon icon={faCheck} className="list-item-check-icon" />
                            <FontAwesomeIcon icon={faX} className="list-item-x-icon" />
                          </div>
                        </div>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hamburger-menu-container" id="hamburger-menu-container">
          <div className="hamburger-menu-header-container">
            <h1>hi fname</h1>
          </div>
          <div className="hamburger-menu-body-container">
            <div className="hamburger-menu-body-item">
              <FontAwesomeIcon icon={faDashboard} />
              <h3 className="interactable">dashboard overlaying users calendar</h3>
            </div>
            <div className="hamburger-menu-body-item">
              <FontAwesomeIcon icon={faChessBoard} />
              <h3 className="interactable">boards</h3>
            </div>
            <div className="hamburger-menu-body-item">
              <FontAwesomeIcon icon={faLineChart} />
              <h3 className="interactable">metrics</h3>
            </div>
            <div className="hamburger-menu-body-item">
              <FontAwesomeIcon icon={faCoffee} />
              <h3 className="interactable">???</h3>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Home;
