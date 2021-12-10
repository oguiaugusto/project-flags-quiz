import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { InputRadio } from './styledComponents';

class SelectFlagsAmount extends Component {
  render() {
    const { props: { handleRadioChange, flagsAmount } } = this;

    if (!flagsAmount) return <Redirect to="/" />;

    return (
      <div className="flags-amount">
        <InputRadio
          type="radio"
          name="flagsAmount"
          label="10"
          value="10"
          checked={ flagsAmount === 10 }
          onChange={ handleRadioChange }
        />
        <InputRadio
          type="radio"
          name="flagsAmount"
          label="15"
          value="15"
          checked={ flagsAmount === 15 }
          onChange={ handleRadioChange }
        />
        <InputRadio
          type="radio"
          name="flagsAmount"
          label="20"
          value="20"
          checked={ flagsAmount === 20 }
          onChange={ handleRadioChange }
        />
      </div>
    );
  }
}

SelectFlagsAmount.propTypes = {
  handleRadioChange: PropTypes.func.isRequired,
  flagsAmount: PropTypes.number.isRequired,
};

export default SelectFlagsAmount;
