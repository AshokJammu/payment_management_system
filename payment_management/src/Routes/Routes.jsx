import React, { Component } from "react";

import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Users from "./Users";
import Category from "./Category";
import UsersList from "./UsersList";
export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <div style={{ textAlign: "center" }}>
          <Route path="/" exact render={props => <Home {...props} />} />
          <Route path="/users" exact render={props => <Users {...props} />} />
          <Route
            path="/users/:userName"
            render={props => <UsersList {...props} />}
          />

          <Route path="/category" component={Category} />
        </div>
      </Switch>
    );
  }
}
