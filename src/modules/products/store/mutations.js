import {
  LOADING,
  PRODUCTS,
  PAGINATION,
  FILTERS,
  PRODUCT,
  STATUS,
} from "./state";

export const SET_LOADING = "setLoading";
export const SET_PRODUCTS = "setProducts";
export const SET_PAGINATION = "setPagination";
export const SET_FILTERS = "setFilters";
export const NEXT_PAGE = "nextPage";
export const RESET_PRODUCTS = "resetProducts";
export const RESET_PAGE = "resetPage";
export const SET_PRODUCT = "setProduct";
export const SET_STATUS = "setStatus";
export const RESET_PRODUCT = "resetProduct";

export default {
  [SET_LOADING](state, payload) {
    state[LOADING] = payload;
  },
  [SET_PRODUCTS](state, payload) {
    state[PRODUCTS].push(...payload);
  },
  [SET_PAGINATION](state, payload) {
    state[PAGINATION] = payload;
  },
  [SET_FILTERS](state, payload) {
    state[FILTERS] = payload;
  },
  [NEXT_PAGE](state) {
    if (state[PAGINATION].current_page < state[PAGINATION].total_pages) {
      state[PAGINATION].current_page++;
    }
  },
  [RESET_PRODUCTS](state) {
    state[PRODUCTS] = [];
  },
  [RESET_PAGE](state) {
    state[PAGINATION].current_page = 1;
  },
  [SET_PRODUCT](state, payload) {
    state[PRODUCT] = payload;
  },
  [SET_STATUS](state, payload) {
    state[STATUS] = payload;
  },
  [RESET_PRODUCT](state) {
    state[PRODUCT] = null;
  },
};
