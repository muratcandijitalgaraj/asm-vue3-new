import { createStore } from "vuex";
import auth from "./modules/auth.js"
import appointments from "./modules/appointments";

const store = createStore({

    modules: {
        auth,
        appointments
    },

    state: {

    },

    mutations: {

    },

    actions: {},

    getters: {

    }
});

export default store;
