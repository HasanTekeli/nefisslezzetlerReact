import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home';
import Contact from './pages/Contact';
import Cookies from './pages/Cookies';
import About from "./pages/About"

import Navigation from "./components/Navigation"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation />
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/contact" component={Contact} />
              <Route path="/cookies" component={Cookies} />
              <Route path="/about" component={About} />
            </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
