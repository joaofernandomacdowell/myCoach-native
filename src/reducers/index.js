import { combineReducers } from 'redux';
import QuestionnarieReducer from './QuestionnarieReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  questionnarie: QuestionnarieReducer,
  optionSelected: SelectionReducer
});
