import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import reducers from './reducers';

import QuestionSection from './components/startnow/QuestionSection';
import RegisterForm from './components/startnow/RegisterForm';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyB5SnDU3g75qpJZqPjFr20dWpvy2NbdoB4",
      authDomain: "mycoachnative.firebaseapp.com",
      databaseURL: "https://mycoachnative.firebaseio.com",
      projectId: "mycoachnative",
      storageBucket: "",
      messagingSenderId: "823458865722"
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <View style={styles.viewStyle}>
          <StatusBar barStyle="light-content" />
          <RegisterForm />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#153041'
  }
});
