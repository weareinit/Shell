/**
 * Dashboard side-menu
 * ------------------------------
 * @author Jehf K D. ,Alex C. (@jehfkemsy , @aalexcomas11)
 */
import React, { Component, Fragment } from "react";
import { withRouter } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import {
  DASHBOARD,
  PROFILE,
  APPLICATION,
  ESSENTIAL,
  SUPPORT
} from "../../config/pageRoutes";
import "./styles.css";

//auth states
const navSelections = Object.freeze({
  HOME_SELECTED: DASHBOARD,
  PROFILE_SELECTED: DASHBOARD + PROFILE,
  APPLICATION_SELECTED: DASHBOARD + APPLICATION,
  ESSENTIAL_SELECTED: DASHBOARD + ESSENTIAL,
  SUPPORT_SELECTED: DASHBOARD + SUPPORT
});

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      currSelection: navSelections.HOME_SELECTED
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
    let {
      HOME_SELECTED,
      PROFILE_SELECTED,
      SUPPORT_SELECTED,
      APPLICATION_SELECTED,
      ESSENTIAL_SELECTED
    } = navSelections;

    console.log(this.props);

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
            <li
              className={`nav-item ${(this.state.currSelection ===
                HOME_SELECTED &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={DASHBOARD}>Home</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                APPLICATION_SELECTED &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={APPLICATION_SELECTED}>Application</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                ESSENTIAL_SELECTED &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={ESSENTIAL_SELECTED}>Essentials</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                PROFILE_SELECTED &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={PROFILE_SELECTED}>Profile</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                SUPPORT_SELECTED &&
                "nav-item-selected") ||
                ""}`}
              onClick={this.toggle}
            >
              <Link to={SUPPORT_SELECTED}>Support</Link>
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

export default withRouter(Navbar);
