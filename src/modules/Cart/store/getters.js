import { ITEMS } from "./state";
import { PRODUCTS_MODULE } from "@/modules/Products/store";
import { PRODUCTS } from "@/modules/Products/store/state";

export const GET_CART_PRODUCTS = "getCartProducts";

export default {
  [GET_CART_PRODUCTS]: (state, getters, rootState) => {
    return state[ITEMS].map(({ id, quantity }) => {
      const product = rootState[PRODUCTS_MODULE][PRODUCTS].find(
        (product) => product.id === id
      );

      return {
        product,
        quantity,
      };
    });
  },
};
