import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { PageMenu } from '../components/styledComponents';
import { Button } from '../components/styledComponents';
import LeaveButton from '../components/LeaveButton';
import SelectFlagsAmount from '../components/SelectFlagsAmount';
import SelectedContinents from '../components/SelectedContinents';
import '../styles/config.css';

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

      saving: false,
    };

    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.setInitialFlagsAmount = this.setInitialFlagsAmount.bind(this);
    this.handleContinents = this.handleContinents.bind(this);
    this.createContinentObjects = this.createContinentObjects.bind(this);
    this.disableSaveButton = this.disableSaveButton.bind(this);
    this.saveChanges = this.saveChanges.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
  }

  componentDidMount() {
    this.setInitialFlagsAmount();
  }

  componentWillUnmount() {
    clearTimeout(this.saveTO);
  }

  setInitialFlagsAmount() {
    const { props: { countriesAmount: flagsAmount, continents } } = this;
    continents.forEach(({ name, selected }) => this.setState({ [name]: selected }));
    this.setState({ flagsAmount });
  }

  handleRadioChange({ target: { name, value, checked }}) {
    if (checked) this.setState({ [name]: Number(value) });
  }

  handleContinents({ target: { name, checked } }) {
    this.setState({ [name]: checked });
  }

  createContinentObjects() {
    const { Africa, Americas, Asia, Europe, Oceania } = this.state;
    return Object
      .entries({ Africa, Americas, Asia, Europe, Oceania })
      .map((continent) => ({ name: continent[0], selected: continent[1] }));
  }

  disableSaveButton() {
    const { flagsAmount } = this.state;
    const continents = this.createContinentObjects();

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
    const continents = this.createContinentObjects();

    const { setCountries } = this.props;
    const { flagsAmount } = this.state;
    setCountries(continents, flagsAmount);

    this.setState({ saving: true }, () => {
      this.saveTO = setTimeout(() => {
        this.props.history.push('/');
      }, 500);
    });
  }

  handleLeave() {
    this.props.history.push('/');
  }

  render() {
    const {
      flagsAmount,
      Africa,
      Americas,
      Asia,
      Europe,
      Oceania,
      saving,
    } = this.state;

    const selectFlagsAmountProps = {
      handleRadioChange: this.handleRadioChange,
      flagsAmount,
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
        <PageMenu className="config-menu">  
          <h2>Op????es de Jogo</h2>
          <div className="options">
            <div className="flags-amount-container">
              <p className="options-title">Quantidade de bandeiras</p>
              <SelectFlagsAmount { ...selectFlagsAmountProps } />
            </div>
            <div className="continents-container">
              <p className="options-title">Continentes Selecionados</p>
              <SelectedContinents { ...selectedContinentsProps } />
            </div>
          </div>
          
          {this.disableSaveButton() ? <p className="form-error">Sem bandeiras o suficiente</p> : null}
          {saving ? <Loader type="ThreeDots" color="#252525" height={40} width={40} /> : (
            <div className="buttons">
              <div className="border-button">
                <Button
                  type="button"
                  onClick={ this.saveChanges }
                  disabled={ this.disableSaveButton() }
                  color="#eee"
                  bgColor="#339438"
                >
                  Salvar
                </Button>
              </div>
              <div className="border-button">
                <LeaveButton handleLeave={ this.handleLeave } >Cancelar</LeaveButton>
              </div>
            </div>
          )}
        </PageMenu>
      </div>
    );
  }
}

Config.propTypes = {
  setCountries: PropTypes.func.isRequired,
  countriesAmount: PropTypes.number.isRequired,
};

export default Config;
