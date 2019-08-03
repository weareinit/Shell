/**
 * Main component
 */

import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'
import './css/App.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
  faTwitterSquare,
  faGithubSquare
} from '@fortawesome/free-brands-svg-icons'
import {
  faCheck,
  faSignOutAlt,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling,
  faSpinner,
  faTimes
} from '@fortawesome/free-solid-svg-icons'

// preloading icons
library.add(
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
  faTwitterSquare,
  faGithubSquare,
  faCheck,
  faSignOutAlt,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling,
  faSpinner,
  faTimes
)
alert("Please note that you are currently accessing a beta release of our dashboard, and any data or account submitted to our databases will be deleted before our official release (8/5/2019).")
class App extends Component {
  render () {
    return (
      <Fragment>
        <BrowserRouter>
          <Navigation />
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
