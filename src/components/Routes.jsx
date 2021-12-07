import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Play, Config, NotFound } from '../pages';

class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/config" component={ Config } />
          <Route exact path="/play" component={ Play } />
          <Route exact path="/" component={ Home } />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Routes;
