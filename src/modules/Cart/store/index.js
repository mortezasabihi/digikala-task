import state from "./state";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

export const CART_MODULE = "cart";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
