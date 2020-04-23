import dialogsApi from "../../utility/api/dialogs";

const actions = {
  setDialogs: (items) => ({
    type: "SET__ITEMS",
    payload: items,
  }),
  setDialog: (id) => ({
    type: "SET__DIALOG",
    payload: id,
    
  }),
  fetchDialogs: () => (dispatch) => {
    dialogsApi.getAll().then(({ data }) => {
      dispatch(actions.setDialogs(data));
    });
  },
};

export default actions;
