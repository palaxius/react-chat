import axios from "../../core/axios";

export default {
  getByDialogId: (id) => axios.get("messages?dialog=" + id),
};
