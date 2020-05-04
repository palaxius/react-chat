import userApi from "../../utility/api/user";
import notification from "../../utility/helpers/notification";

const actions = {
  setUserData: (data) => ({
    type: "SET__DATA",
    payload: data,
  }),
  fetchUserData: () => (dispatch) => {
    userApi.getMe().then(({ data }) => {
      dispatch(actions.setUserData(data));
    });
  },
  fetchUserLogin: (postData) => (dispatch) => {
    return userApi.login(postData).then(({ data }) => {
      const { status, token } = data;
      if (status === "error") {
        notification({
          text: "Неверный логин или пароль",
          type: "error",
          title: "Ошибка авторизации",
        });
      } else {
        notification({
          type: "success",
          title: "Авторизация успешна!",
        });
        window.axios.defaults.headers.common["token"] = token;
        window.localStorage["token"] = token;
        dispatch(actions.fetchUserData())
      }
    });
  },
};

export default actions;
