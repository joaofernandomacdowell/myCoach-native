import React, { Component } from 'react';
import { View, Text } from 'react-native';
import questionStyles from '../../styles/question';
import { questionsData } from '../../data/profile-questionnaire';

const Question = (props) => (
  <View style={questionStyles.container}>
    <Text style={questionStyles.text}>
      {props.questionText}
    </Text>
  </View>
);

export default Question;
