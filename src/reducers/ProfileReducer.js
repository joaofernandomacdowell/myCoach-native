import {
  PROFILE_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  profile: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PROFILE_UPDATE:
      const { type, selectedOption } = action.payload;
      console.log(state);
      return {
        ...state,
        profile: updateProfile(state.profile, type, selectedOption)
      };
    default:
      return state;
  }
};

const updateProfile = (currProfile, newType, newOption) => {
  return {...currProfile, [newType]: newOption};
}
