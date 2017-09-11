import React, { Component } from 'react';
import { View, Text, Alert } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, createUser } from '../../actions';
import { Card, CardSection, Button, Input } from '../common';


class RegisterForm extends Component {
  constructor(props) {
    super(props);

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
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
            onChangeText={this.onEmailChange}
            value={this.props.email}
          />
        </CardSection>

        {/* Password */}
        <CardSection>
          <Input
            secureTextEntry
            placeholder="Password"
            onChangeText={this.onPasswordChange}
            value={this.props.password}
          />
        </CardSection>

        <Button onPress={this.onButtonPress}>
          Register
        </Button>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;
  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, createUser
})(RegisterForm);

// const firstName = (
//   <CardSection>
//     <Input
//       placeholder="First Name"
//       onChangeText={this.onEmailChange}
//       value={this.props.firstName}
//     />
//   </CardSection>
//
//   <CardSection>
//     <Input
//       placeholder="Last Name"
//       value={this.props.lastName}
//     />
//   </CardSection>
// );
