import { StyleSheet } from 'react-native';
import { Colors } from '../constants';

const questionStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 160,
    width: 300
  },
  text: {
    color: Colors.textColor,
    fontSize: 22,
    textAlign: 'center'
  }
});

export default questionStyles;
