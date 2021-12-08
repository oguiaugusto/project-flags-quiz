import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Play, Config, About, NotFound } from '../pages';

class Routes extends Component {
  render() {
    const { setCountries } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/play" component={ Play } />
          <Route exact path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/config" render={(props) => <Config setCountries={ setCountries } />} />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  setCountries: PropTypes.func.isRequired,
};

export default Routes;
