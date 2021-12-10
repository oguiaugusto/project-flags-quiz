import React, { Component } from 'react';
import { fetchCountries } from './services/fetchCountries';
import { defaultContinents, getRandomCountries } from './services/utilities';
import Routes from './components/Routes';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allCountries: [],
      countries: [],
      continents: defaultContinents,

      loading: true,
    };

    this.getAllCountries = this.getAllCountries.bind(this);
    this.setCountries = this.setCountries.bind(this);
    this.resetGame = this.resetGame.bind(this);
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

  setCountries(continentsConfig = defaultContinents, amount = 10) {
    this.setState({ continents: continentsConfig }, () => {
      const { continents, allCountries } = this.state;
      const countriesArr = continents.filter(({ selected }) => selected)
        .map(({ name }) => (
          allCountries.filter(({ region }) => region === name)
        ));
  
      const countries = getRandomCountries(countriesArr, amount).sort(() => Math.random() - 0.5);
      this.setState({ countries });
    })
  }

  resetGame() {
    this.setState({ loading: true }, () => {
      this.getAllCountries();
    });
  }

  render() {
    const { allCountries, countries, continents, loading } = this.state;
    const routesObj = {
      allCountries,
      countries,
      loading,
      setCountries: this.setCountries,
      resetGame: this.resetGame,
      continents,
    };
    return (
      <main>
        <h1>QUAL É A BANDEIRA?</h1>
        <Routes { ...routesObj } />
      </main>
    );
  }
}

export default App;
