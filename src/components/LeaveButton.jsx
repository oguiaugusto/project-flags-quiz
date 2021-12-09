import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LeaveButton extends Component {
  render() {
    const { props: { handleLeave, children } } = this;

    return (
      <button
        type="button"
        className="btn btn-leave"
        onClick={ handleLeave }
      >
        {children}
      </button>
    );
  }
}

LeaveButton.propTypes = {
  props: PropTypes.shape({
    handleLeave: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
  }),
};

export default LeaveButton;
