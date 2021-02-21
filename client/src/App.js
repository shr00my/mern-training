import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import New from "./components/New";
import Checkout from "./components/Checkout";
import ThankYou from "./components/ThankYou";
import Api from "./components/Api";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/test-thank-you" component={withRouter(ThankYou)} />
        <Route ecact path="/contact" component={withRouter(Contact)} />

        <Route exact path="/test-checkout" component={withRouter(Checkout)} />
        <Route exact path="/new" component={New} />
        <Route exact path="/" component={withRouter(Home)} />
        <Route exact path="/api" component={Api} />
      </Switch>
    </Router>
  );
}
