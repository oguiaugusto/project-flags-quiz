import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectFlagsAmount from '../components/SelectFlagsAmount';
import SelectedContinents from '../components/SelectedContinents';

class Config extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flagsAmount: 10,
      Africa: true,
      Americas: true,
      Asia: true,
      Europe: true,
      Oceania: true,
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleContinents = this.handleContinents.bind(this);
    this.createContinentsObject = this.createContinentsObject.bind(this);
    this.disableSaveButton = this.disableSaveButton.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
  }

  handleRadioChange({ target: { name, value, checked }}) {
    if (checked) this.setState({ [name]: Number(value) });
  }

  handleContinents({ target: { name, checked } }) {
    this.setState({ [name]: checked });
  }

  createContinentsObject() {
    const { Africa, Americas, Asia, Europe, Oceania } = this.state;
    return Object
      .entries({ Africa, Americas, Asia, Europe, Oceania })
      .map((continent) => ({ name: continent[0], selected: continent[1] }));
  }

  disableSaveButton() {
    const { flagsAmount } = this.state;
    const continents = this.createContinentsObject();

    const noOceania = (
      continents.filter(({ name }) => name !== 'Oceania').every(({ selected }) => !selected)
      && continents[4].selected
      && flagsAmount !== 10
    );

    if (noOceania || continents.every(({ selected }) => !selected)) {
      return true;
    }
    return false;
  }

  saveChanges() {
    const continents = this.createContinentsObject().filter(({ selected }) => selected);

    const { setCountries } = this.props;
    const { flagsAmount } = this.state;
    setCountries(continents, flagsAmount);
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
          <button type="button" onClick={ this.saveChanges } disabled={ this.disableSaveButton() }>Salvar</button>
          {this.disableSaveButton() ? <p className="form-error">Sem bandeiras o suficiente</p> : null}
        </div>
      </div>
    );
  }
}

Config.propTypes = {
  setCountries: PropTypes.func.isRequired,
};

export default Config;
