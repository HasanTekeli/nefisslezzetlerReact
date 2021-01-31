import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookies from './pages/Cookies';
import About from "./pages/About"

import Navigation from "./components/Navigation"
import {Redirect} from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename={"/nefisslezzetlerReact"}>
          <Navigation />
            <Switch>
                <Route exact path={"/"}>
                    <Redirect to={"/home"} />
                </Route>
              <Route path="/nefisslezzetlerReact/home" component={Home} />
              <Route path="/nefisslezzetlerReact/contact" component={Contact} />
              <Route path="/nefisslezzetlerReact/cookies" component={Cookies} />
              <Route path="/nefisslezzetlerReact/about" component={About} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
