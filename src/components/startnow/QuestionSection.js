import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { selectOption } from '../../actions';
import { ButtonOption, Option, Question } from './';

class QuestionSection extends Component {
  constructor(props) {
    super(props);
  }

  renderOptions() {
    const { id, question, options } = this.props;
    return options.map(option =>
      <ButtonOption onPress={() => this.props.selectOption(option)}>
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

// mocked data
const mapStateToProps = state => {
  return {
    question: state.questionnarie[0].quest,
    options: state.questionnarie[3].opts,
    id: state.questionnarie[0].id
  };
};

export default connect(mapStateToProps, { selectOption })(QuestionSection);
