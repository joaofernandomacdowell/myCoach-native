import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { selectOption } from '../../actions';

import Welcome from './Welcome';
import Question from './Question';
import Option from './Option';
import ButtonOption from './ButtonOption';


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

  _renderWelcome() {
    return this.props.id === 0
    ? <Welcome>Welcome to myCoach!</Welcome>
    : <Welcome style={{ marginTop: 100 }}></Welcome>;
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this._renderWelcome()}
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
