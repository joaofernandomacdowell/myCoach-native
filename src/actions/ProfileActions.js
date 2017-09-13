import {
  PROFILE_UPDATE
} from './types';

// props (this.props.selectOption)
export const updateProfile = ({ type, selectedOption }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { type, selectedOption }
  };
};
