import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectedContinents extends Component {
  render() {
    const {
      handleContinents,
      Africa,
      Americas,
      Asia,
      Europe,
      Oceania,
    } = this.props;
    return (
      <div className="selected-continents">
        <p className="options-title">Continentes Selecionados</p>
        <label htmlFor="Africa">
          África
          <input
            type="checkbox"
            name="Africa"
            id="Africa"
            checked={ Africa }
            onChange={ handleContinents }
          />
        </label>
        <label htmlFor="Americas">
          Américas
          <input
            type="checkbox"
            name="Americas"
            id="Americas"
            checked={ Americas }
            onChange={ handleContinents }
          />
        </label>
        <label htmlFor="Asia">
          Ásia
          <input
            type="checkbox"
            name="Asia"
            id="Asia"
            checked={ Asia }
            onChange={ handleContinents }
          />
        </label>
        <label htmlFor="Europe">
          Europa
          <input
            type="checkbox"
            name="Europe"
            id="Europe"
            checked={ Europe }
            onChange={ handleContinents }
          />
        </label>
        <label htmlFor="Oceania">
          Oceania
          <input
            type="checkbox"
            name="Oceania"
            id="Oceania"
            checked={ Oceania }
            onChange={ handleContinents }
          />
        </label>
      </div>
    );
  }
}

SelectedContinents.propTypes = {
  handleContinents: PropTypes.func.isRequired,
  Africa: PropTypes.bool.isRequired,
  Americas: PropTypes.bool.isRequired,
  Asia: PropTypes.bool.isRequired,
  Europe: PropTypes.bool.isRequired,
  Oceania: PropTypes.bool.isRequired,
};

export default SelectedContinents;
