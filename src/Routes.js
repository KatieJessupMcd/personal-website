import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import HomePage from './HomePage';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';


class Routes extends Component {
  render() {
    return (
      <div className="Routes">
        <Switch>
          <Route
            exact
            path="/"
            render={props => (
              <HomePage
                {...props}
                handleLogin={this.props.handleLogin}
                handleSignUp={this.props.handleSignUp}
              />
            )}
          />
          <Route
            exact
            path="/work"
            render={() => <WorkPage />}
            isLoggedIn={this.props.isLoggedIn}
          />
          <Route
            exact
            path="/about"
            render={props => (
              <AboutPage
                {...props}
                currentUser={this.props.currentUser}
                handleUpdate={this.props.handleUpdate}
              />
            )}
            isLoggedIn={this.props.isLoggedIn}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
