/**
 * Dashboard side-menu
 * ------------------------------
 * @author Jehf K D. ,Alex C. (@jehfkemsy , @aalexcomas11)
 */
import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./styles.css";

//nav states
const navSelections = Object.freeze({
  HOME: "/",
  PROFILE: "/profile",
  APPLICATION: "/application",
  ESSENTIAL: "/essentials",
  SUPPORT: "/support"
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currSelection: navSelections.HOME
    };
  }

  componentDidMount() {
    let initialSelection = this.props.history.location.pathname;
    this.setState({ currSelection: initialSelection });
  }

  toggle = () => {
    let newSelection = this.props.history.location.pathname;
    this.setState(prevState => ({
      open: !prevState.open,
      currSelection: newSelection
    }));
  };

  render() {
    let { HOME, PROFILE, SUPPORT, APPLICATION, ESSENTIAL } = navSelections;

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
              src={require("../../assets/logos/organizer/shellhacks.svg")}
            />
            <img
              id="dashboard-shell"
              className=""
              alt="placeholder"
              src={require("../../assets/waves/shell.svg")}
            />
            <h4 className="user">Jehf Doe</h4>
          </div>
          <ul id="options">
            <li className="toggle">
              <div className="toggle-content" onClick={this.toggle}>
                &times;
              </div>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === HOME &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={HOME}>Home</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                APPLICATION &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={APPLICATION}>Application</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === ESSENTIAL &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={ESSENTIAL}>Essentials</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === PROFILE &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={PROFILE}>Profile</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === SUPPORT &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={SUPPORT}>Support</Link>
            </li>
          </ul>
          <ul id="logout">
            <li>
              <Link to="/auth">
                Logout <FontAwesomeIcon icon="sign-out-alt" />
              </Link>
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Navbar);
