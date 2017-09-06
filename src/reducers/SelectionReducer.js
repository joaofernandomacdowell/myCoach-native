export default (state = null, action) => {

  switch (action.type) {
    case 'select_option':
      return { ...state, optionSelected: action.payload };
    default:
      return state;
  }
};
