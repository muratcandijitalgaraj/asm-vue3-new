import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import auth from "./auth";
import qs from "qs";
import store from "../index";

export default {
  namespaced: true,

  state: {
    // token: null,
    // refreshToken: null,
    // expire: 360000,
    // expireDate: null,
    // user: null,
    // profileID: null,
    // phoneNumber: null,
    email: "",
    password: "",
    passwordRepeated: "",
    uyruk: "",
    country: "",
    city: "",
    district: "",
  },

  mutations: {},

  actions: {
    // these first 2 actions are for demonstration purposes
    // delete them as soon as you get your onw action working

    async getAccessToken({ dispatch, commit, state }) {
      let credentials = {
        client_id: state.defaultCredentials.clientId,
        client_secret: state.defaultCredentials.clientSecret,
        grant_type: state.defaultCredentials.grantType,
      };
      let response = await authAxios
        .post("auth/connect/token", qs.stringify(credentials))
        .then((response) => {
          commit("SET_EXPIRE_DATE");
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("expire", response.data.expires_in);
          dispatch("accessTokenAttempt", {
            token: response.data.access_token,
            expire: response.data.expires_in,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async phoneNotify({ commit, state, dispatch }, phone) {
      await dispatch("checkExpireToken");
      appAxios.defaults.headers.common["Authorization"] =
        "Bearer " + state.token;
      let response = await appAxios
        .post(
          "endpoint/profile-service/user/notify",
          qs.stringify({ mobileNumber: phone })
        )
        .then((response) => {
          commit("SET_PHONE_NUMBER", phone);
          commit("SET_NOTIFICATION_TOKEN", response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async registerUser({ commit, state, dispatch }) {
      let userData = {
        email: state.email,
        password: state.password,
        passwordRepeated: state.passwordRepeated,
        uyruk: state.uyruk,
        country: state.country,
        city: state.city,
        district: state.district,
      };
      let response = await appAxios.post(
        "endpoint/profile-service/user",
        qs.stringify(userData)
      );
    },
  },

  getters: {},
};
