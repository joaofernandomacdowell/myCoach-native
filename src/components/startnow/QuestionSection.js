import React, { Component } from 'react';
import { View } from 'react-native';
import Question from './Question';
import Option from './Option';
import data from '../../data/data';


export default class QuestionSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: '',
      options: []
    }
  }

  componentDidMount() {
    this.setState({
      question: data.gender.quest,
      options: data.gender.opts
    });
  }

  renderOptions() {
    return this.state.options.map(option =>
      <Option optionText={this.state.options}>
        {option}
      </Option>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Question questionText={this.state.question} />
        {this.renderOptions()}
      </View>
    );
  }
};
