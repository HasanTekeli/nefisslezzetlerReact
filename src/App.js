import './App.css';
import { HashRouter, Switch, Route } from "react-router-dom";
import React from "react";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookies from './pages/Cookies';
import About from "./pages/About";
import Navigation from "./components/Navigation";
import {Redirect} from "react-router";
import "react-bootstrap";

class App extends React.Component {

    render () {
        return (
            <div className="App">
              <HashRouter basename={"/"}>
                  <Navigation/>
                  <Switch>
                      <Route exact path={"/"}>
                          <Redirect to={"/anasayfa"}/>
                      </Route>
                      <Route path="/anasayfa" component={Home}/>
                      <Route path="/iletisim" component={Contact}/>
                      <Route path="/urunler" component={Cookies}/>
                      <Route path="/hakkinda" component={About}/>
                  </Switch>
              </HashRouter>
          </div>
          );
      }
}

export default App;
