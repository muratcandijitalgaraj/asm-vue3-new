import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import auth from "./auth"
import qs from "qs";
import store from "../index";

export default {
    namespaced: true,

    state: {

    },

    mutations: {

    },

    actions: {
        async getAppointments() {
            await store.dispatch('auth/checkRefreshToken')
            let token = store.getters['auth/_token']
            let profileID = store.getters['auth/_profile_id']
            appAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            return await appAxios.get('endpoint/appointment-service/appointments?facilityId=' + profileID)
        },

    },

    getters: {

    }
};