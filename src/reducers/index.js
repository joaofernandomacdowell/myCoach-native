import { combineReducers } from 'redux';
import QuestionnarieReducer from './QuestionnarieReducer';
import SelectionReducer from './SelectionReducer';

// state with keys questionnarie, optionSelected...
export default combineReducers({
  questionnarie: QuestionnarieReducer,
  optionSelected: SelectionReducer
});
