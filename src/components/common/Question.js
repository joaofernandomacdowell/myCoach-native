import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Question = () => (
  <View style={styles.container}>
    <Text style={styles.questionTextStyle}>Welcome to myCoach!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#153041',
    borderColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 100,
  },
  questionTextStyle: {
    color: '#fff',
    fontSize: 24
  }
});

export default Question;
