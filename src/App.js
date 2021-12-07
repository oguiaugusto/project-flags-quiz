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

    this.getCountries = this.getCountries.bind(this);
  }

  componentDidMount() {
    this.getCountries();
  }

  async getCountries() {
    const allCountries = await fetchCountries();
    this.setState({ allCountries }, () => {
      const { allCountries } = this.state;
      this.setState({ countries: getRandomCountries(allCountries, undefined, 10) })
    });
  }

  render() {
    return (
      <Routes />
    );
  }
}

export default App;
