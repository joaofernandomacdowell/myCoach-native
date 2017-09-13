import firebase from 'firebase';
import {
  PROFILE_UPDATE,
  PROFILE_CREATE
} from './types';

// props (this.props.selectOption)
export const updateProfile = ({ type, selectedOption }) => {
  return {
    type: PROFILE_UPDATE,
    payload: { type, selectedOption }
  };
};

export const createProfile = (profile) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/profile`)
      .push({ ...profile })
      .then(() => {
        dispatch({ type: PROFILE_CREATE });
      });
  };
};
