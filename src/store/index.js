import { createStore, createLogger } from "vuex";
import products, { PRODUCTS_MODULE } from "@/modules/Products/store";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    [PRODUCTS_MODULE]: products,
  },
  strict: debug,
  plugins: debug ? [createLogger] : [],
});
