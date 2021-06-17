import axios from "axios";

export default new axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    token: process.env.VUE_APP_API_TOKEN,
  },
});
