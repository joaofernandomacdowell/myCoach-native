import React, { Component } from 'react';
import { View } from 'react-native';
import Question from './Question';
import Option from './Option';
import ButtonOption from './ButtonOption';
import data from '../../data/questions-options-data';


export default class QuestionSection extends Component {
  constructor(props) {
    super(props);

    // keysArray = ["gender", "shape", "objective", "badHabits", "time"]
    const keysArray = Object.keys(data);

    this.updateQuestionAndOptions = this.updateQuestionAndOptions.bind(this);
    this.nextQuestionAndOptions = this.nextQuestionAndOptions.bind(this);
    this.onPress = this.onPress.bind(this);

    this.state = {
      question: data.gender.quest,
      options: data.gender.opts,
      currentQuest: keysArray[0],
      profile: {}
    };
  }

  nextQuestionAndOptions(objectKey) {
    this.setState({
      question: data[objectKey].quest,
      options: data[objectKey].opts,
      currentQuest: objectKey
    });
  }

  updateQuestionAndOptions(currQuest) {
    switch(currQuest) {
      case('gender'):
        this.nextQuestionAndOptions('shape');
        break;
      case('shape'):
        this.nextQuestionAndOptions('objective');
        break;
      case('objective'):
        this.nextQuestionAndOptions('badHabits');
        break;
      case('badHabits'):
        this.nextQuestionAndOptions('time');
        break;
      default:
        //TODO;
    }
  }

  onPress() {
    this.updateQuestionAndOptions(this.state.currentQuest);
  }

  renderOptions() {
    // Insert a unique key as a prop
    return this.state.options.map(option =>
      <ButtonOption onPress={this.onPress}>
        {option}
      </ButtonOption>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Question questionText={this.state.question} />
        <Option>
          {this.renderOptions()}
        </Option>
      </View>
    );
  }
}
