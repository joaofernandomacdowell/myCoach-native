import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import buttonOptionStyles from '../../styles/button-option';

const ButtonOption = (props) => (
  <TouchableOpacity onPress={props.onPress} style={buttonOptionStyles.button}>
    <Text style={buttonOptionStyles.text}>
      {props.children}
    </Text>
  </TouchableOpacity>
);

export default ButtonOption;
