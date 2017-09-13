import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import {
  emailChanged,
  passwordChanged,
  loginUser,
  createProfile
} from '../../actions';
import { Card, CardSection, Button, Input, ErrorMessage } from '../common';


class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this._onEmailChange = this._onEmailChange.bind(this);
    this._onPasswordChange = this._onPasswordChange.bind(this);
    this._onButtonPress = this._onButtonPress.bind(this);
  }

  componentDidMount() {
    console.log(this.props.profile);
  }

  _onEmailChange(text) {
    this.props.emailChanged(text);
  }

  _onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  _onButtonPress() {
    const { email, password, profile } = this.props;

    this.props.loginUser({ email, password });
    this.props.createProfile(profile);
  }

  _renderErrorMessage() {
    return this.props.error !== ''
    ? <ErrorMessage>{this.props.error}</ErrorMessage>
    : null
  }

  render() {
    return (
      <Card>
        {/* Email */}
        <CardSection>
          <Input
            placeholder="Email"
            onChangeText={this._onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        {/* Password */}
        <CardSection>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={this._onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <Button onPress={this._onButtonPress}>
          Register
        </Button>

        {/* Error Message */}
        {this._renderErrorMessage()}
      </Card>
    );
  }
}

const mapStateToProps = ({ auth, optionSelected, userData }) => {
  const { email, password, error, loading } = auth;
  const { profile } = userData;

  return { email, password, error, loading, profile };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser, createProfile
})(RegisterForm);
