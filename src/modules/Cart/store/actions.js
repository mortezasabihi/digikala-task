import { ITEMS } from "./state";
import { PUSH_PRODUCT_TO_CART, INCREMENT_ITEM_QUANTITY } from "./mutations";

export const ADD_PRODUCT_TO_CART = "addProductToCart";

export default {
  [ADD_PRODUCT_TO_CART]({ state, commit }, product) {
    const cartItem = state[ITEMS].find((item) => item.id === product.id);

    if (cartItem) {
      commit(INCREMENT_ITEM_QUANTITY, cartItem);
    } else {
      commit(PUSH_PRODUCT_TO_CART, { id: product.id });
    }
  },
};
