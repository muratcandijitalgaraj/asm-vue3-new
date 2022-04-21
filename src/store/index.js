import { createStore } from "vuex";
import auth from "./modules/auth.js";
import appointments from "./modules/appointments";
import register from "./modules/register";

const store = createStore({
  modules: {
    auth,
    appointments,
    register,
  },

  state: {},

  mutations: {},

  actions: {},

  getters: {},
});

export default store;
