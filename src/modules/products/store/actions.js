import api from "../api";
import { PAGINATION } from "./state";
import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_PAGINATION,
  SET_FILTERS,
  RESET_PAGE,
} from "./mutations";

export const GET_ALL_PRODUCTS = "getAllProducts";

export default {
  async [GET_ALL_PRODUCTS]({ commit, state }, payload) {
    commit(SET_LOADING, true);

    if (payload) {
      commit(RESET_PAGE);
    }

    const {
      data: { data },
    } = await api.getProducts({
      page: state[PAGINATION].current_page,
      filters: payload,
    });

    commit(SET_PRODUCTS, data.products);
    commit(SET_PAGINATION, data.pager);
    commit(SET_FILTERS, { ...data.filters, sort: data.sort });

    commit(SET_LOADING, false);
  },
};
