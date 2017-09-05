import React, { Component } from 'react';
import { View, Text } from 'react-native';
import questionStyles from '../../styles/question';

const Question = (props) => (
  <View style={questionStyles.container}>
    <Text style={questionStyles.text}>
      {props.questionText}
    </Text>
  </View>
);

export { Question };
