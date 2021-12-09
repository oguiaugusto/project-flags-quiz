import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from './styledComponents';

class LeaveButton extends Component {
  render() {
    const { props: { handleLeave, children, width } } = this;

    return (
      <Button
        bgColor="#cf4646"
        color="#eee"
        width={ width }
        type="button"
        onClick={ handleLeave }
      >
        {children}
      </Button>
    );
  }
}

LeaveButton.propTypes = {
  handleLeave: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  width: PropTypes.string,
};

LeaveButton.defaultProps = {
  width: 'auto',
};

export default LeaveButton;
