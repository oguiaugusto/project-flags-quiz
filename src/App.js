import React, { Component } from 'react';
import { fetchCountries, getRandomCountries } from './services/fetchCountries';
import Routes from './components/Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      countries: [],
    };

    this.setRandomCountries = this.setRandomCountries.bind(this);
    this.getCountries = this.getCountries.bind(this);
  }

  componentDidMount() {
    this.getCountries();
  }

  setRandomCountries(continents, amount) {
    const { allCountries } = this.state;
    const countries = getRandomCountries(allCountries, continents, amount);
    this.setState({ countries });
  }

  async getCountries() {
    const allCountries = await fetchCountries();
    this.setState({ allCountries }, () => {
      this.setRandomCountries(undefined, 10);
    });
  }

  render() {
    return (
      <>
        <h1>Qual a Bandeira?</h1>
        <Routes setRandomCountries={ this.setRandomCountries } />
      </>
    );
  }
}

export default App;
