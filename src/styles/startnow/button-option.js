import { StyleSheet } from 'react-native';
import { Colors } from '../constants';

const buttonOptionStyles = StyleSheet.create({
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: Colors.textColor,
    fontSize: 16,
    paddingTop: 13,
    paddingBottom: 10
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.borderColor,
    height: 50,
    width: 250,
    marginTop: 10,
    marginBottom: 10
  }
});

export default buttonOptionStyles;
