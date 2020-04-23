import messagesApi from "../../utility/api/messages";

const actions = {
  setMessages: (items) => ({
    type: "SET__MESSAGES",
    payload: items,
  }),
  setLoading: (bool) => ({
    type: "SET__LOADING",
    payload: bool,
  }),
  fetchMessages: (dialogId) => (dispatch) => {
    dispatch(actions.setLoading(true));
    messagesApi.getByDialogId(dialogId).then(({ data }) => {
      dispatch(actions.setMessages(data));
      dispatch(actions.setLoading(false));
    }).catch(() => {
      dispatch(actions.setLoading(false));
    })
  },
};

export default actions;
