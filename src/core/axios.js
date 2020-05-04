import axios from "axios";

axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.common["token"] = window.token;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
window.axios = axios;

export default axios;
