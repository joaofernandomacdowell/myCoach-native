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
    const { type, options, selectOption } = this.props;
    let option = options[optionIndex].toLowerCase();
    selectOption({ type, option });
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
const mapStateToProps = ({ questionnarie, optionSelected }) => {
  const { index } = optionSelected;
  return {
    question: questionnarie[index].quest,
    options: questionnarie[index].opts,
    id: questionnarie[index].id,
    type: questionnarie[index].type
  };
};

export default connect(mapStateToProps, { selectOption })(QuestionSection);
