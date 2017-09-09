import {
  SELECTED_OPTION
} from '../actions/types';

const INITIAL_STATE = {
  profile: {},
  currQuestionIndex: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SELECTED_OPTION:
    const { type, option } = action.payload;
      return {
        ...state,
        currQuestionIndex: state.currQuestionIndex + 1,
        profile: updateProfile(state.profile, type, option)
      };
    default:
      return state;
  }
};

const updateProfile = (currProfile, newType, newOption) => {
  return {...currProfile, [newType]: newOption};
}
