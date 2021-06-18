import { createStore, createLogger } from "vuex";
import saveProductsToLocalStorage from "./plugins/saveProductsToLocalStorage";
import products, { PRODUCTS_MODULE } from "@/modules/Products/store";
import cart, { CART_MODULE } from "@/modules/Cart/store";

const debug = process.env.NODE_ENV !== "production";

// plugins
const plugins = [saveProductsToLocalStorage];
debug && plugins.push(createLogger);

export default createStore({
  modules: {
    [PRODUCTS_MODULE]: products,
    [CART_MODULE]: cart,
  },
  strict: debug,
  plugins,
});
