import React, { Component } from 'react';
import { fetchCountries } from './services/fetchCountries';
import { defaultContinents, getRandomCountries } from './services/utilities';
import Routes from './components/Routes';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      countries: [],

      loading: true,
    };

    this.getAllCountries = this.getAllCountries.bind(this);
    this.setCountries = this.setCountries.bind(this);
  }

  componentDidMount() {
    this.getAllCountries();
  }

  async getAllCountries() {
    this.setState({ allCountries: await fetchCountries() }, () => {
      this.setState({ loading: false });
      this.setCountries();
    });
  }

  setCountries(continents = defaultContinents, amount = 10) {
    const { allCountries } = this.state;
    const countriesArr = continents.map(({ name }) => (
      allCountries.filter(({ region }) => region === name)
    ));

    const countries = getRandomCountries(countriesArr, amount).sort(() => Math.random() - 0.5);
    this.setState({ countries });
  }

  render() {
    return (
      <>
        <h1>Qual a Bandeira?</h1>
        <Routes setCountries={ this.setCountries } />
      </>
    );
  }
}

export default App;
