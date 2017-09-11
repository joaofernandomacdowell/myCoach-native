import { combineReducers } from 'redux';
import QuestionnarieReducer from './QuestionnarieReducer';
import SelectionReducer from './SelectionReducer';
import AuthReducer from './AuthReducer';

export default combineReducers({
  questionnarie: QuestionnarieReducer,
  optionSelected: SelectionReducer,
  auth: AuthReducer
});
