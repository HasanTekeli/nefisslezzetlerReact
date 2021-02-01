import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookies from './pages/Cookies';
import About from "./pages/About"
import Navigation from "./components/Navigation"
import {Redirect} from "react-router";

class App extends React.Component {

    render () {
        return (
            <div className="App">
              <HashRouter basename={"/"}>
                  <Navigation/>
                  <Switch>
                      <Route exact path={"/"}>
                          <Redirect to={"/home"}/>
                      </Route>
                      <Route path="/home" component={Home}/>
                      <Route path="/contact" component={Contact}/>
                      <Route path="/cookies" component={Cookies}/>
                      <Route path="/about" component={About}/>
                  </Switch>
              </HashRouter>
          </div>
          );
      }
}

export default App;
