import { ITEMS } from "./state";
import {
  PUSH_PRODUCT_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  SET_ITEM_QUANTITY,
} from "./mutations";

export const ADD_PRODUCT_TO_CART = "addProductToCart";

export default {
  [ADD_PRODUCT_TO_CART]({ state, commit }, payload) {
    const cartItem = JSON.parse(JSON.stringify(state[ITEMS])).find(
      (item) => item.product.id === payload.product.id
    );

    if (cartItem && !payload.quantity) {
      commit(INCREMENT_ITEM_QUANTITY, cartItem.product.id);
    } else {
      commit(PUSH_PRODUCT_TO_CART, payload.product);
      payload.quantity &&
        commit(SET_ITEM_QUANTITY, {
          id: JSON.parse(JSON.stringify(payload.product.id)),
          quantity: payload.quantity,
        });
    }
  },
};
