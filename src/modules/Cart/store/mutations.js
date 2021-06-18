import { ITEMS } from "./state";

export const PUSH_PRODUCT_TO_CART = "pushProductToCart";
export const INCREMENT_ITEM_QUANTITY = "incrementItemQuantity";
export const SET_ITEM_QUANTITY = "setItemQuantity";
export const REMOVE_CART_ITEM = "removeCartItem";

export default {
  [PUSH_PRODUCT_TO_CART](state, { id }) {
    state[ITEMS].push({
      id,
      quantity: 1,
    });
  },
  [INCREMENT_ITEM_QUANTITY](state, { id }) {
    const cartItem = state[ITEMS].find((item) => item.id === id);
    cartItem.quantity++;
  },
  [SET_ITEM_QUANTITY](state, { id, quantity }) {
    const cartItem = state[ITEMS].find((item) => item.id === id);
    cartItem.quantity = quantity;
  },
  [REMOVE_CART_ITEM](state, id) {
    const items = JSON.parse(JSON.stringify(state[ITEMS]));
    const item = items.find((item) => item.id === id);
    const index = items.indexOf(item);
    state[ITEMS].splice(index, 1);
  },
};
