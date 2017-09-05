import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import reducers from './reducers';
import QuestionSection from './components/startnow/QuestionSection';

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <View style={styles.viewStyle}>
        <StatusBar barStyle="light-content" />
        <QuestionSection />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#153041'
  }
});

export default App;
