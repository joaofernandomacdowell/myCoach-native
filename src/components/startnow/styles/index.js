import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

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

const optionsStyles = StyleSheet.create({
  container: {
    width: 300,
    height: 300,
    alignSelf: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 40
  }
});

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

export { questionStyles, optionsStyles, buttonOptionStyles };
