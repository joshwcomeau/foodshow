import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import { loginRequest } from '../../actions';

import Button from '../Button';


const LoginButton = ({ loginRequest }) => (
  <Button onClick={loginRequest}>
    Log In to Unsplash
  </Button>
);

LoginButton.propTypes = {
  loginRequest: PropTypes.func.isRequired,
};


export default connect(null, { loginRequest })(LoginButton);
