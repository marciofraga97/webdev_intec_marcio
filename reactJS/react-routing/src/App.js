// Modules
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

// Links
import Homepage from "./pages/Homepage"
import Weather from "./pages/Weather"
import Trivia from "./pages/Trivia"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"

// Components
import NavLink from "./components/NavLinks"
import Footer from "./components/Footer"

// Main
export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/*navigation below*/}
          <NavLink/>
          <Switch>
            {/* route paths below*/}
            <Route exact path = "/">
              {/*component below*/}
              <Homepage/>
            </Route>
            <Route path = "/weather">
              <Weather/>
            </Route>
            <Route path = "/trivia">
              <Trivia/>
            </Route>
            <Route path = "/about">
              <About/>
            </Route>
            <Route path = "/contact">
              <Contact/>
            </Route>
            <Route>
              <NotFound/>
            </Route>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    )
  }
}