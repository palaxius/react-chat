const initialState = {
  items: [],
  currentDialogId: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET__ITEMS":
      return {
        ...state,
        items: payload,
      };
    case "SET__DIALOG":
      return {
        ...state,
        currentDialogId: payload,
      };
    default:
      return state;
  }
};
