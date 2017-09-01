import React, { Component } from 'react';
import { View } from 'react-native';
import Question from './Question';
import Option from './Option';

const QuestionSection = () => (
  <View style={{flex: 1}}>
    <Question />
    <Option />
  </View>
);

export default QuestionSection;
