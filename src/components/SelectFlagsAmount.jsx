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
        <label htmlFor="flags-15">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-15"
            value="15"
            onChange={ handleRadioChange }
          />
          15
        </label>
        <label htmlFor="flags-20">
          <input
            type="radio"
            name="flagsAmount"
            id="flags-20"
            value="20"
            onChange={ handleRadioChange }
          />
          20
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
