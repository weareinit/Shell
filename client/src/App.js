import React, { Component, Fragment } from 'react'
import NavBar from './Components/NavBar'
import {BrowserRouter} from 'react-router-dom'
import Navigation from './navigation'
import './App.css'



class App extends Component {

  constructor(props){
    super(props);
    this.state={
      loggedIn: false
    }
  }

  render() {
    const nav = this.state.loggedIn ? <NavBar /> : <span></span>
    const showNav = !this.state.loggedIn ? {width: '100vw !important',margin: '0px'} : {};
    return (
      <Fragment>
        <BrowserRouter>
          {nav}
          {/* DO NOT REMOVE APP CLASS */}
          <div className="App" style={showNav}> 
            <Navigation />
          </div>  
        </BrowserRouter>
      </Fragment>
    )
  }
}

export default App