import React, { Component } from "react";

import { Route } from "react-router-dom";
import { Home } from "./Home";
import Users from "./Users";
import Category from "./Category";
export default class Routes extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Route path="/" exact render={() => <Home />} />
        <Route path="/users" component={Users} />
        <Route path="/category" component={Category} />
      </div>
    );
  }
}
