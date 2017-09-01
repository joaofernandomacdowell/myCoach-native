import React, { Component } from 'react';
import { View, Text } from 'react-native';
import question from '../../styles/question';
import { questions } from '../../data/profile-questionnaire';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  componentDidMount() {
    this.setState({
      question: questions[0].gender
    });
  }

  render() {
    return (
      <View style={question.container}>
        <Text style={question.questionTextStyle}>
          {this.state.question}
        </Text>
      </View>
    );
  }
}
