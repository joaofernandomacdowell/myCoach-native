import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import QuestionSection from './components/startnow/QuestionSection';

const App = () => (
  <View style={styles.viewStyle}>
    <StatusBar barStyle="light-content" />
    <QuestionSection />
  </View>
);

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#153041'
  }
});

export default App;
