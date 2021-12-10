import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LabelToggle } from './styledComponents';

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
        <LabelToggle htmlFor="Africa">
          África
          <div className="label-toggle-input">
            <input
              type="checkbox"
              name="Africa"
              id="Africa"
              checked={ Africa }
              onChange={ handleContinents }
            />
            <div className="checkbox-toggle"></div>
          </div>
        </LabelToggle>
        <LabelToggle htmlFor="Americas">
          Américas
          <div className="label-toggle-input">
            <input
              type="checkbox"
              name="Americas"
              id="Americas"
              checked={ Americas }
              onChange={ handleContinents }
            />
            <div className="checkbox-toggle"></div>
          </div>
        </LabelToggle>
        <LabelToggle htmlFor="Asia">
          Ásia
          <div className="label-toggle-input">
            <input
              type="checkbox"
              name="Asia"
              id="Asia"
              checked={ Asia }
              onChange={ handleContinents }
            />
            <div className="checkbox-toggle"></div>
          </div>
        </LabelToggle>
        <LabelToggle htmlFor="Europe">
          Europa
          <div className="label-toggle-input">
            <input
              type="checkbox"
              name="Europe"
              id="Europe"
              checked={ Europe }
              onChange={ handleContinents }
            />
            <div className="checkbox-toggle"></div>
          </div>
        </LabelToggle>
        <LabelToggle htmlFor="Oceania">
          Oceania
          <div className="label-toggle-input">
            <input
              type="checkbox"
              name="Oceania"
              id="Oceania"
              checked={ Oceania }
              onChange={ handleContinents }
            />
            <div className="checkbox-toggle"></div>
          </div>
        </LabelToggle>
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
