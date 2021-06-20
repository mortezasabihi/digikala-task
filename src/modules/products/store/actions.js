import api from "../api";
import { PAGINATION } from "./state";
import {
  SET_LOADING,
  SET_PRODUCTS,
  SET_PAGINATION,
  SET_FILTERS,
  RESET_PAGE,
  SET_PRODUCT,
  SET_STATUS,
  RESET_PRODUCT,
} from "./mutations";

export const GET_ALL_PRODUCTS = "getAllProducts";
export const GET_PRODUCT = "getProduct";

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
  async [GET_PRODUCT]({ commit }, payload) {
    commit(SET_LOADING, true);
    commit(RESET_PRODUCT);

    const { data } = await api.getProduct(payload);

    commit(SET_PRODUCT, data?.data?.product);
    commit(SET_STATUS, data.status);

    commit(SET_LOADING, false);
  },
};
