import { createStore, createLogger } from "vuex";
import cart from "@/store/modules/cart";
import products from "@/store/modules/products";
import auth from "@/store/modules/auth";

const debug = process.env.NODE_ENV !== "production";

export default createStore({
  modules: {
    cart,
    products,
    auth,
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],

  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
});
