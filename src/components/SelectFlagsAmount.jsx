import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SelectFlagsAmount extends Component {
  render() {
    const { handleRadioChange, defaultCheck } = this.props;
    return (
      <div className="flags-amount">
        <input
          type="radio"
          name="flagsAmount"
          label="10"
          value="10"
          checked={ defaultCheck }
          onChange={ handleRadioChange }
        />
        <input
          type="radio"
          name="flagsAmount"
          label="15"
          value="15"
          onChange={ handleRadioChange }
        />
        <input
          type="radio"
          name="flagsAmount"
          label="20"
          value="20"
          onChange={ handleRadioChange }
        />
      </div>
    );
  }
}

SelectFlagsAmount.propTypes = {
  handleRadioChange: PropTypes.func.isRequired,
  defaultCheck: PropTypes.bool.isRequired,
};

export default SelectFlagsAmount;
