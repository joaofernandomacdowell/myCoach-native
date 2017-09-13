import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser } from '../../actions';
import { Card, CardSection, Button, Input } from '../common';


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
    const { email, password} = this.props;

    this.props.createUser({ email, password });
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
      </Card>
    );
  }
}

const mapStateToProps = ({ auth, optionSelected }) => {
  const { email, password, error, loading } = auth;
  const { profile } = optionSelected;

  return { email, password, error, loading, profile };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser
})(RegisterForm);
