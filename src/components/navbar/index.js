/**
 * Dashboard side-menu
 * ------------------------------
 * @author Jehf K D. ,Alex C. (@jehfkemsy , @aalexcomas11)
 */
import React, { Component, Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  DASHBOARD,
  PROFILE,
  APPLICATION,
  ESSENTIALs,
  SUPPORT
} from "../../config/pageRoutes";
import "./styles.css";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  toggle = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <Fragment>
        <header>
          <div className="mobile-logo"></div>
          <div onClick={this.toggle} className="mobile-btn">
            ☰
          </div>
        </header>
        <div className={`nav ` + (this.state.open ? "" : " hide")}>
          <div className="desktop-logo">
            <img
              id="dashboard-logo"
              className=""
              alt="placeholder"
              src={require("../../assets/frontpage/shellhacks.svg")}
            />
            <img
              id="dashboard-shell"
              className=""
              alt="placeholder"
              src={require("../../assets/frontpage/shell.svg")}
            />
            <h4 className="user">Jehf Doe</h4>
          </div>
          <ul id="options">
            <li className="toggle">
              <div className="toggle-content" onClick={this.toggle}>
                &times;
              </div>
            </li>
            <li className="nav-item" onClick={this.toggle}>
              <Link to={DASHBOARD}>Home</Link>
            </li>
            <li className="nav-item" onClick={this.toggle}>
              <Link to={DASHBOARD + APPLICATION}>Application</Link>
            </li>
            <li className="nav-item" onClick={this.toggle}>
              <Link to={DASHBOARD + ESSENTIALs}>Essentials</Link>
            </li>
            <li className="nav-item" onClick={this.toggle}>
              <Link to={DASHBOARD + PROFILE}>Profile</Link>
            </li>
            <li className="nav-item" onClick={this.toggle}>
              <Link to={DASHBOARD + SUPPORT}>Support</Link>
            </li>
          </ul>
          <ul id="logout">
            <li>
              <Link to="/">
                Logout <FontAwesomeIcon icon="sign-out-alt" />
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default Navbar;
