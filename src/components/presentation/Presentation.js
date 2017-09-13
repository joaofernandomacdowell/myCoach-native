import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import {
  mainViewStyles,
  imageStyles,
  loginButtonStyles,
  startButtonStyles
} from '../../styles/presentation';

import { CardSection } from '../common';
import PresentationText from './PresentationText';
import ButtonSection from './ButtonSection';


const Presentation = () => {
  const { image } = imageStyles;
  const { container } = mainViewStyles;
  const { loginButton, loginText } = loginButtonStyles;
  const { startButton, startText } = startButtonStyles;

  return (
    <View style={container}>
      <View>
        <Image
          style={image}
          source={require('../../../resources/img/mycoach-logo.png')}
          resizeMode="contain"
        />
      </View>

      <PresentationText>
        myCoach helps you achieve a healthy lifestyle!
      </PresentationText>

      <ButtonSection>
        <TouchableOpacity onPress={() => Actions.questionSection()} style={startButton}>
          <Text style={startText}>
            START NOW
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={loginButton}>
          <Text style={loginText}>
            LOG IN
          </Text>
        </TouchableOpacity>
      </ButtonSection>
    </View>
  );
};

export default Presentation;
