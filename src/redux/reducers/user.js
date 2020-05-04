const initialState = {
  data: null,
  isAuth: window.localStorage.token ? true : false,
  token: window.localStorage.token,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET__DATA":
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    default:
      return state;
  }
};
