import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { optionsStyles } from './styles';

const Option = (props) => (
  <View style={optionsStyles.container}>
    {props.children}
  </View>
);

export { Option };
