/**
 * Dashboard side-menu
 */
import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logos/organizer/Icon_Logo.svg'
import mixed from '../../utils/mixed'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitterSquare,
  faDiscord,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons"; //need to pre-load in app.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import querries from '../../utils/querries'
import './styles.css'

// nav states
const navSelections = Object.freeze({
  HOME: '/',
  PROFILE: '/profile',
  APPLICATION: '/application',
  ESSENTIAL: '/essentials',
  SUPPORT: '/support'
})

class SideBar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false,
      currSelection: navSelections.HOME
    }
  }

  componentDidMount () {
    let initialSelection = this.props.history.location.pathname
    this.setState({ currSelection: initialSelection })
  }

  toggle = () => {
    let newSelection = this.props.history.location.pathname
    this.setState(prevState => ({
      open: !prevState.open,
      currSelection: newSelection
    }))
  }

  render () {
    let { HOME, PROFILE, SUPPORT, APPLICATION, ESSENTIAL } = navSelections
    let { fullName } = this.props

    return (
      <Fragment>
        <header>
          <div className='mobile-logo' />
          <div onClick={this.toggle} className='mobile-btn'>
            ☰
          </div>
        </header>
        <div className={`nav ` + (this.state.open ? '' : ' hide')}>
          <div className='desktop-logo'>
            <Logo className="main-logo" id='dashboard-shell' onClick={()=>{
            window.open("https://shellhacks.net");
            }} />
            <h3 className='user'>
              {/* i have no idea why i didn't css this...but hey, too late! */}
              {mixed.wordCase(fullName)} 
            </h3>
          </div>
          <ul id='options'>
            <li className='toggle'>
              <div className='toggle-content' onClick={this.toggle}>
                &times;
              </div>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === HOME &&
                'nav-item-selected') ||
                ''}`}
              onClick={this.toggle}
            >
              <Link to={HOME}>Home</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection ===
                APPLICATION &&
                'nav-item-selected') ||
                ''}`}
              onClick={this.toggle}
            >
              <Link to={APPLICATION}>Application</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === ESSENTIAL &&
                'nav-item-selected') ||
                ''}`}
              onClick={this.toggle}
            >
              <Link to={ESSENTIAL}>Essentials</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === PROFILE &&
                'nav-item-selected') ||
                ''}`}
              onClick={this.toggle}
            >
              <Link to={PROFILE}>Profile</Link>
            </li>
            <li
              className={`nav-item ${(this.state.currSelection === SUPPORT &&
                'nav-item-selected') ||
                ''}`}
              onClick={this.toggle}
            >
              <Link to={SUPPORT}>Support</Link>
            </li>
          </ul>
          <ul id='logout'>
            <li
              onClick={() => {
                querries.deAuthorize()
              }}
            >
              Logout <FontAwesomeIcon icon='sign-out-alt' />
            </li>
          </ul>
            <span className="social-media-container">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://discord.gg/upefiu"
              >
                {" "}
                <FontAwesomeIcon icon={faDiscord} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/upefiu/?hl=en"
              >
                {" "}
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/upefiu/"
              >
                {" "}
                <FontAwesomeIcon icon={faFacebookSquare} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/upefiu?lang=en"
              >
                <FontAwesomeIcon icon={faTwitterSquare} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/upe-fiu"
              >
                {" "}
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/UPE-FIU"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </span>
          </div>
      </Fragment>
    )
  }
}

const Navbar = withRouter(SideBar)
export { Navbar }
