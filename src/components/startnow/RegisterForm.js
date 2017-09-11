import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection, Button, Input } from '../common';


export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        {/* First Name */}
        <CardSection>
          <Input
            placeholder="First Name"
            value={this.props.firstName}
          />
        </CardSection>

        {/* Last Name */}
        <CardSection>
          <Input
            placeholder="Last Name"
            value={this.props.lastName}
          />
        </CardSection>

        {/* Email */}
        <CardSection>
          <Input
            placeholder="Email"
            value={this.props.email}
          />
        </CardSection>

        {/* Password */}
        <CardSection>
          <Input
            secureTextEntry
            placeholder="Password"
            value={this.props.password}
          />
        </CardSection>

        <Button>
          Register
        </Button>
      </Card>
    );
  }
}
