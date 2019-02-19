// THIS IS THE NEW UI-UX APP
import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Order from "./components/Order";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/order" component={Order} />
        </Switch>
      </div>
    );
  }
}

export default App;
