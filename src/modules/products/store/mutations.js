import { LOADING, PRODUCTS, PAGINATION, FILTERS } from "./state";

export const SET_LOADING = "setLoading";
export const SET_PRODUCTS = "setProducts";
export const SET_PAGINATION = "setPagination";
export const SET_FILTERS = "setFilters";
export const NEXT_PAGE = "nextPage";
export const RESET_PRODUCTS = "resetProducts";
export const RESET_PAGE = "resetPage";

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
};
