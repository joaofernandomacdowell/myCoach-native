import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import optionsStyles from '../../styles/startnow/option';

const Option = (props) => (
  <View style={optionsStyles.container}>
    {props.children}
  </View>
);

export { Option };
