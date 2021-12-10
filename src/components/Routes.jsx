import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, Play, Config, About, NotFound } from '../pages';

class Routes extends Component {
  render() {
    const {
      allCountries,
      countries,
      setCountries,
      resetGame,
      continents,
      loading,
    } = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/play" render={(props) => (
            <Play { ...props } allCountries={ allCountries } countries={ countries } resetGame={ resetGame } />
          )} />
          <Route exact path="/about" component={ About } />
          <Route exact path="/" render={(props) => <Home { ...props } loading={ loading } />} />
          <Route exact path="/config" render={(props) => (
            <Config
              { ...props }
              setCountries={ setCountries }
              countriesAmount={ countries.length }
              continents={ continents }
            />
          )} />
          <Route exact path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}

Routes.propTypes = {
  allCountries: PropTypes.arrayOf(PropTypes.any),
  countries: PropTypes.arrayOf(PropTypes.any),
  continents: PropTypes.arrayOf(PropTypes.any),
  setCountries: PropTypes.func.isRequired,
  resetGame: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Routes;
