/**
 * Main component
 */

import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord
} from '@fortawesome/free-brands-svg-icons'
import {
  faCheckSquare,
  faSignOutAlt,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling
} from '@fortawesome/free-solid-svg-icons'

import Navigation from './navigation'
import './css/App.css' // load general/global css

// preloading icons
library.add(
  faCheckSquare,
  faSignOutAlt,
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
  faDiscord,
  faExclamationCircle,
  faLaptop,
  faCar,
  faSuitcaseRolling
)

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
