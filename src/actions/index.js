// props (this.props.selectOption)
export const selectOption = (option) => {
  return {
    type: 'select_option',
    payload: option
  };
};
