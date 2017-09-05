import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { questionChanged, optionsChanged } from '../../actions';
import { ButtonOption, Option, Question } from './';
import data from '../../data/questions-options-data';


class QuestionSection extends Component {
  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.updateOptions = this.updateOptions.bind(this);
  }

  updateQuestion(question) {
    this.props.questionChanged(question)
  }

  updateOptions(options) {
    this.props.optionsChanged(options)
  }

  // updateProfile(profile) {
  //   this.props.profileChanged(profile);
  // }

  onPress() {
    // this.updateProfile()
    this.onQuestionChange();
    this.onOptionsChange();
  }

  renderOptions() {
    return this.props.options.map(option =>
      <ButtonOption value={option} onPress={this.onPress}>
        {option}
      </ButtonOption>
    );
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Question questionText={this.props.question} />
        <Option>
          {this.renderOptions()}
        </Option>
      </View>
    );
  }
}

const mapStateToProps = ({ profile }) => {
  const { question, options } = profile;

  return { question, options };
};

export default connect(mapStateToProps, { questionChanged, optionsChanged })(QuestionSection);
