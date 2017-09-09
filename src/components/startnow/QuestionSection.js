import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { selectOption } from '../../actions';
import { ButtonOption, Option, Question } from './';

class QuestionSection extends Component {
  constructor(props) {
    super(props);
  }

  _onPress(index) {
    const { type, options, selectOption } = this.props;
    const option = options[index].toLowerCase();
    selectOption({ type, option });
  }

  _renderOptions() {
    const { options } = this.props;
    return options.map((option, index) =>
      <ButtonOption key={index} onPress={this._onPress.bind(this, index)}>
        {option}
      </ButtonOption>
    );
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Question questionText={this.props.question} />
        <Option>
          {this._renderOptions()}
        </Option>
      </View>
    );
  }
}

const mapStateToProps = ({ questionnarie, optionSelected }) => {
  const { currQuestionIndex } = optionSelected;
  return {
    question: questionnarie[currQuestionIndex].quest,
    options: questionnarie[currQuestionIndex].opts,
    id: questionnarie[currQuestionIndex].id,
    type: questionnarie[currQuestionIndex].type
  };
};

export default connect(mapStateToProps, { selectOption })(QuestionSection);
