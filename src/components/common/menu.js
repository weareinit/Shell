import React from "react";
import { Link } from "react-scroll";
// import { fa } from "@fortawesome/free-regular-svg-icons"; //need to pre-load in app.js
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
class Menu extends React.Component {
  render() {
    return (
      <div class="menu">
        <div class="label">Menu</div>
        <div class="spacer"></div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="aboutus"
              spy={true}
              smooth={true}
              duration={500}
            >
              About us
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="tracks"
              spy={true}
              smooth={true}
              duration={500}
            >
              Learning Tracks
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="schedule"
              spy={true}
              smooth={true}
              duration={500}
            >
              Schedule
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="faq"
              spy={true}
              smooth={true}
              duration={500}
            >
              FAQs
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="sponsor"
              spy={true}
              smooth={true}
              duration={500}
            >
              Sponsors
            </Link>
          </span>
        </div>
        <div class="item">
          <span>
            <Link
              activeClass="active"
              className="test1"
              to="thanks"
              spy={true}
              smooth={true}
              duration={500}
            >
              Thanks
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

export { Menu };
