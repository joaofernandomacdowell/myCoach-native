import { combineReducers } from 'redux';
import QuestionsOptionsReducer from './QuestionsOptionsReducer';
import ProfileReducer from './ProfileReducer';

export default combineReducers({
  questionsOptions: QuestionsOptionsReducer,
  profile: ProfileReducer
});
