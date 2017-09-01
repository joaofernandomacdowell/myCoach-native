import React, { Component } from 'react';
import { View, Text } from 'react-native';
import questionStyles from '../../styles/question';
import { questionsData } from '../../data/profile-questionnaire';

export default class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
  }

  componentDidMount() {
    this.setState({
      question: questionsData[4].time
    });
  }

  render() {
    return (
      <View style={questionStyles.container}>
        <Text style={questionStyles.text}>
          {this.state.question}
        </Text>
      </View>
    );
  }
}
