import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const ButtonOption = (props) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text style={textStyle}>
        {props.optionText}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop: 13,
    paddingBottom: 10
  },
  buttonStyle: {
    borderWidth: 1,
    borderColor: '#13F59D',
    height: 50,
    width: 250,
    marginTop: 10,
    marginBottom: 10
  }
};

export default ButtonOption;
