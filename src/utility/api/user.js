import axios from "../../core/axios";

export default {
  login: (postData) => axios.post("/user/login", postData),
  getMe: () => axios.get("/user/me"),
};
