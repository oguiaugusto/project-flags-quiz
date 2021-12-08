import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Play, Config, About, NotFound } from '../pages';

class Routes extends Component {
  render() {
    const { allCountries, countries, setCountries } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/play" render={(props) => <Play { ...props } allCountries={ allCountries } countries={ countries } />} />
          <Route exact path="/about" component={ About } />
          <Route exact path="/" component={ Home } />
          <Route exact path="/config" render={(props) => <Config { ...props } setCountries={ setCountries } />} />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  allCountries: PropTypes.arrayOf(PropTypes.any),
  countries: PropTypes.arrayOf(PropTypes.any),
  setCountries: PropTypes.func.isRequired,
};

export default Routes;
