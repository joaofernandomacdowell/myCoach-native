import { QUESTION_CHANGED, OPTIONS_CHANGED } from './types';

export const questionChanged = (question) => {
  return {
    type: QUESTION_CHANGED,
    payload: question
  };
};

export const optionsChanged = (options) => {
  return {
    type: OPTIONS_CHANGED,
    payload: option
  };
};
