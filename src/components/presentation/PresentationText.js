import React from 'react';
import { View, Text } from 'react-native';
import { presentationTextStyles } from '../../styles/presentation';

const PresentationText = ({ children }) => {
  const { container, text } = presentationTextStyles;

  return (
    <View style={container}>
      <Text style={text}>{children}</Text>
    </View>
  );
};

export default PresentationText;
