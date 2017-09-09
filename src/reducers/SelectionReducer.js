import {
  SELECTED_OPTION
} from '../actions/types';

const INITIAL_STATE = {
  question: '',
  options: [],
  profile: {}
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case SELECTED_OPTION:
      return { ...state, profile: {[action.payload.type]: action.payload.option}};
    default:
      return state;
  }
};
