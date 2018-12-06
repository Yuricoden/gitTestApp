import React, { Component } from "react";
import UsersList from "./components/UsersPage";
import { Switch, Route, Redirect } from "react-router-dom";
import UserPage from "./components/UserPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Switch>
            <Redirect exact from="/" to="/users" />
            <Route exact path="/users" component={UsersList} />
            <Route path="/users/:username" component={UserPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
