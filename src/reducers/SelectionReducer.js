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
      debugger;
      return { ...state, profile: {[action.payload.type]: action.payload.value}};
    default:
      return state;
  }
};
