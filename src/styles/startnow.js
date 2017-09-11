import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// Question styles
const questionStyles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 160,
    width: 300
  },
  text: {
    color: Colors.lightGrey,
    fontSize: 22,
    textAlign: 'center'
  }
});

// Option styles
const optionStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40
  }
});

// Button styles
const buttonOptionStyles = StyleSheet.create({
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    color: Colors.lightGrey,
    fontSize: 16,
    paddingTop: 13,
    paddingBottom: 10
  },
  button: {
    borderWidth: 1,
    borderColor: Colors.lightGreen,
    height: 50,
    width: 250,
    marginTop: 10,
    marginBottom: 10
  }
});

export { questionStyles, optionStyles, buttonOptionStyles };
