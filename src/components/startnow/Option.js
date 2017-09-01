import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import optionsStyles from '../../styles/options';
import ButtonOption from './ButtonOption';
import options from '../../styles/options';

const Option = (props) => (
  <View style={optionsStyles.container}>
    <ButtonOption onPress={props.onPress}>
      {props.buttonText}
    </ButtonOption>
  </View>
);

export default Option;
