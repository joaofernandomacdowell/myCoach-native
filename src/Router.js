import React from 'react';
import { Scene, Stack, Router, Actions } from 'react-native-router-flux';
import RegisterForm from './components/startnow/RegisterForm';
import QuestionSection from './components/startnow/QuestionSection';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ flex: 1, backgroundColor: '#153041' }}>
      <Stack key="root">
        <Scene initial hideNavBar={true} key="questionSection" component={QuestionSection} />
        <Scene hideNavBar={true} key="registerForm" component={RegisterForm} />
      </Stack>
    </Router>
  );
};

export default RouterComponent;
