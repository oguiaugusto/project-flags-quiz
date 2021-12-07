import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectFlagsAmount from '../components/SelectFlagsAmount';
import SelectedContinents from '../components/SelectedContinents';

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flagsAmount: 10,
      // selectedContinents: [
      //   { name: 'Africa', selected: true },
      //   { name: 'Americas', selected: true },
      //   { name: 'Asia', selected: true },
      //   { name: 'Europe', selected: true },
      //   { name: 'Oceania', selected: true },
      // ],
      Africa: true,
      Americas: true,
      Asia: true,
      Europe: true,
      Oceania: true,
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleContinents = this.handleContinents.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleRadioChange({ target: { name, value, checked }}) {
    if (checked) this.setState({ [name]: Number(value) });
  }

  handleContinents({ target: { name, checked } }) {
    this.setState({ [name]: checked });
  }

  saveChanges() {
    const { Africa, Americas, Asia, Europe, Oceania, flagsAmount } = this.state;
    const continents = Object
    .entries({ Africa, Americas, Asia, Europe, Oceania })
    .map((continent) => ({ name: continent[0], selected: continent[1] }));

    const { setRandomCountries } = this.props;
    setRandomCountries(continents, flagsAmount);
  }

  render() {
    const {
      flagsAmount,
      Africa,
      Americas,
      Asia,
      Europe,
      Oceania,
    } = this.state;

    const defaultCheck = flagsAmount === 10;

    const selectFlagsAmountProps = {
      handleRadioChange: this.handleRadioChange,
      defaultCheck: defaultCheck,
    };

    const selectedContinentsProps = {
      handleContinents: this.handleContinents,
      Africa,
      Americas,
      Asia,
      Europe,
      Oceania,
    };

    return (
      <div className="config-page">
        <h2>Opções de Jogo</h2>
        <div className="options">
          <SelectFlagsAmount { ...selectFlagsAmountProps } />
          <SelectedContinents { ...selectedContinentsProps } />
          <button type="button" onClick={ this.saveChanges }>Salvar</button>
        </div>
      </div>
    );
  }
}

Config.propTypes = {
  setRandomCountries: PropTypes.func.isRequired,
};

export default Config;
