import { StyleSheet } from 'react-native';
import { Colors } from './constants.js';

// Card styles
const cardStyles = StyleSheet.create({
  container: {
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 150
  }
});

// CardSection
const cardSectionStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center'
  }
});

// Input styles
const inputStyles = StyleSheet.create({
  inputStyle: {
    color: Colors.lightGrey,
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 1
  },
  containerStyle: {
    flex: 1,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  }
});

// Button styles
const buttonStyles = StyleSheet.create({
  container: {
    marginTop: 10,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    color: Colors.darkBlue,
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  button: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: Colors.lightGreen,
    borderRadius: 1,
    marginLeft: 5,
    marginRight: 5
  }
});

export { cardStyles, cardSectionStyles, inputStyles, buttonStyles };
