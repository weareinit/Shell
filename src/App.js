import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckSquare, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
library.add(faCheckSquare, faSignOutAlt)


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    }
  }

  render() {
    return (
      <Fragment>
        <BrowserRouter>
          {/* DO NOT REMOVE APP CLASS */}
          <div className="App">
            <Navigation />
          </div>
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App
