import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { buttonOptionStyles } from './styles';

const ButtonOption = (props) => (
  <TouchableOpacity onPress={props.onPress} style={buttonOptionStyles.button}>
    <Text style={buttonOptionStyles.text}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

export { ButtonOption };

// <TouchableOpacity onPress={ () => props.onPress(props.value) } style={buttonOptionStyles.button}>
// <TouchableOpacity onPress={props.onPress} style={buttonOptionStyles.button}>
