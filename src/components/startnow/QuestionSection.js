import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { selectOption } from '../../actions';
import { ButtonOption, Option, Question } from './';

class QuestionSection extends Component {
  constructor(props) {
    super(props);
  }

  onPress(optionIndex) {
    const { type, options } = this.props;
    let option = options[optionIndex].toLowerCase();
    this.props.selectOption({ type: type, option: option });
  }

  renderOptions() {
    const { options } = this.props;
    return options.map((option, optionIndex) =>
      <ButtonOption key={optionIndex} onPress={this.onPress.bind(this, optionIndex)}>
        {option}
      </ButtonOption>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Question questionText={this.props.question} />
        <Option>
          {this.renderOptions()}
        </Option>
      </View>
    );
  }
}

// mocked data
const mapStateToProps = state => {
  return {
    question: state.questionnarie[0].quest,
    options: state.questionnarie[0].opts,
    id: state.questionnarie[0].id,
    type: state.questionnarie[0].type
  };
};

export default connect(mapStateToProps, { selectOption })(QuestionSection);
