import React, { Component, Fragment } from 'react'
// import Registration from './Pages/registration'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navigation from './navigation'



class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <Switch>
      //     <Route exact path="/" component={Registration} />
      //     <Route exact path="/home" component = {Home} />
      //   </Switch>
      // </BrowserRouter>
         <Navigation />
    )
  }
}

export default App