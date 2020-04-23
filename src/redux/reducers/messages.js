const initialState = {
  items: null,
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET__MESSAGES":
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
    case "SET__LOADING":
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};
