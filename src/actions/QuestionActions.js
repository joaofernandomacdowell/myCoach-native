import {
  SELECTED_OPTION
} from './types';

// props (this.props.selectOption)
export const updateQuestionAndOptions = ({ type, option }) => {
  return {
    type: SELECTED_OPTION,
    payload: { type, option }
  };
};
