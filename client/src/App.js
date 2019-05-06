import React, { Component, Fragment } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navigation from './navigation'
import './App.css'



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
