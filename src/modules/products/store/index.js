import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const PRODUCTS_MODULE = "products";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
