import { CART_MODULE } from "@/modules/Cart/store";
import { ITEMS } from "@/modules/Cart/store/state";
import {
  PUSH_PRODUCT_TO_CART,
  INCREMENT_ITEM_QUANTITY,
  REMOVE_CART_ITEM,
  SET_ITEM_QUANTITY,
} from "@/modules/Cart/store/mutations";

export default (store) => {
  store.subscribe((mutation, state) => {
    if (
      mutation.type === `${CART_MODULE}/${PUSH_PRODUCT_TO_CART}` ||
      mutation.type === `${CART_MODULE}/${INCREMENT_ITEM_QUANTITY}` ||
      mutation.type === `${CART_MODULE}/${REMOVE_CART_ITEM}` ||
      mutation.type === `${CART_MODULE}/${SET_ITEM_QUANTITY}`
    ) {
      const cartItems = JSON.stringify(state[CART_MODULE][ITEMS]);
      localStorage.setItem("cart", cartItems);
    }
  });
};
