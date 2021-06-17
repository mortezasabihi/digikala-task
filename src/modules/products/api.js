import axios from "@/plugins/axios";

export default {
  getProducts({ page, filters }) {
    let endpoint = "/front-end/search/?rows=30";

    if (page) {
      endpoint = `${endpoint}&page=${page}`;
    }

    if (filters) {
      endpoint = endpoint + filters;
    }

    return axios.get(endpoint);
  },
};
