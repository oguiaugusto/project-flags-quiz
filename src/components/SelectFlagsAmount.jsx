import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectFlagsAmount extends Component {
  render() {
    const { handleRadioChange, defaultCheck } = this.props;
    return (
      <div className="flags-amount">
        <p className="options-title">Quantidade de bandeiras</p>
        <label htmlFor="flags-10">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-10"
            value="10"
            checked={ defaultCheck }
            onChange={ handleRadioChange }
          />
          10
        </label>
        <label htmlFor="flags-30">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-30"
            value="30"
            onChange={ handleRadioChange }
          />
          30
        </label>
        <label htmlFor="flags-50">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-50"
            value="50"
            onChange={ handleRadioChange }
          />
          50
        </label>
        <label htmlFor="flags-100">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-100"
            value="100"
            onChange={ handleRadioChange }
          />
          100
        </label>
        <label htmlFor="flags-250">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-250"
            value="250"
            onChange={ handleRadioChange }
          />
          250
        </label>
      </div>
    );
  }
}

SelectFlagsAmount.propTypes = {
  handleRadioChange: PropTypes.func.isRequired,
  defaultCheck: PropTypes.bool.isRequired,
};

export default SelectFlagsAmount;
