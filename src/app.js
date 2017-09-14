import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import reducers from './reducers';
import RouterComponent from './Router';
import { firebaseConfig } from '../config';

import QuestionSection from './components/startnow/QuestionSection';
import RegisterForm from './components/startnow/RegisterForm';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <RouterComponent />
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
