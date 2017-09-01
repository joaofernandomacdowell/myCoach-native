import React, { Component } from 'react';
import { View } from 'react-native';
import optionsStyles from '../../styles/options';
import ButtonOption from './ButtonOption';
import options from '../../styles/options';
import { optionsData } from '../../data/profile-questionnaire';


export default class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      chosenOption: ''
    };
  }

  componentDidMount() {
    this.setState({
      options: optionsData[2].objective
    });
  }

  onPress() {
    this.setState({ chosenOption: 'birl' });
  }

  renderButtonOption() {
    return this.state.options.map(option =>
      <ButtonOption onPress={this.onPress.bind(this)}>
        {option}
      </ButtonOption>
    );
  }

  render() {
    return (
      <View style={optionsStyles.container}>
        {this.renderButtonOption()}
      </View>
    )
  }
}
