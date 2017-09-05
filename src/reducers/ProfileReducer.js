import { QUESTION_CHANGED, OPTIONS_CHANGED } from '../actions/types';

const INITIAL_STATE = {
  question: '',
  options: [],
  currentQuest: '',
  profile: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QUESTION_CHANGED:
      return { ...state, question: action.payload };
    case OPTIONS_CHANGED:
      return { ...state, options: action.payload };
    default:
      return state;
  }
};
