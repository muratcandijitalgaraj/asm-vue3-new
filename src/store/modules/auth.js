import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import qs from "qs";

export default {
  namespaced: true,

  state: {
    token: null,
    refreshToken: null,
    expire: 360000,
    expireDate: null,
    user: null,
    profileID: null,
    phoneNumber: null,
    notificationToken: null,
    notificationCode: null,
    notificationUserData: null,
    defaultCredentials: {
      clientId: "iCoMed_Mobile_IOS",
      clientSecret: "c@mEd3234_21!",
      grantType: "client_credentials",
    },
    registerData: {},
  },

  mutations: {
    SET_TOKEN(state, data) {
      state.token = data.token;
      state.expire = data.expire;
    },
    SET_REFRESH_TOKEN(state, token) {
      state.refreshToken = token;
    },
    SET_USER(state, data) {
      state.user = data;
    },
    SET_EXPIRE_DATE(state) {
      let date = new Date();
      date.setMilliseconds(state.expire);
      localStorage.setItem("expireDate", date);
      state.expireDate = date;
    },
    SET_PHONE_NUMBER(state, phoneNumber) {
      state.phoneNumber = phoneNumber;
    },
    SET_NOTIFICATION_TOKEN(state, notificationToken) {
      state.notificationToken = notificationToken;
    },
    SET_NOTIFICATION_CODE(state, notificationCode) {
      state.notificationCode = notificationCode;
    },
    SET_NOTIFICATION_USER_DATA(state, data) {
      state.notificationUserData = data;
    },
    SET_PROFILE_ID(state, profileId) {
      state.profileID = profileId;
    },
  },

  actions: {
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

    async accessTokenAttempt({ commit, state }, data) {
      if (data.token) {
        commit("SET_TOKEN", data);
      }

      if (!state.token) {
        return false;
      }
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
          console.log(response.data.data);
          console.log(state.notificationToken);
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async phoneVerify({ commit, state, dispatch }, notificationCode) {
      await dispatch("checkExpireToken");
      appAxios.defaults.headers.common["Authorization"] =
        "Bearer " + state.token;
      return await appAxios.post(
        "endpoint/profile-service/user/verify",
        qs.stringify({
          notificationToken: state.notificationToken,
          notificationCode,
        })
      );
    },

    checkExpireToken({ dispatch, state }) {
      if (new Date() > state.expireDate) {
        dispatch("getAccessToken");
      }
    },

    async getRefreshToken({ dispatch, commit, state }) {
      let credentials = {
        refresh_token: state.refreshToken,
        client_id: state.defaultCredentials.clientId,
        client_secret: state.defaultCredentials.clientSecret,
        grant_type: "refresh_token",
      };
      let response = await authAxios
        .post("auth/connect/token", qs.stringify(credentials))
        .then((response) => {
          commit("SET_EXPIRE_DATE");
          localStorage.setItem("token", response.data.access_token);
          localStorage.setItem("expire", response.data.expires_in);
          localStorage.setItem("refreshToken", response.data.refresh_token);
          commit("SET_REFRESH_TOKEN", response.data.refresh_token);
          dispatch("accessTokenAttempt", {
            token: response.data.access_token,
            expire: response.data.expires_in,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },

    checkRefreshToken({ dispatch, state }) {
      if (new Date() > state.expireDate) {
        dispatch("getRefreshToken");
      }
    },

    async loginAction({ state, commit, dispatch }, password) {
      await dispatch("checkExpireToken");
      appAxios.defaults.headers.common["Authorization"] =
        "Bearer " + state.token;
      let req = {
        client_id: state.defaultCredentials.clientId,
        client_secret: state.defaultCredentials.clientSecret,
        grant_type: "password",
        username: state.phoneNumber,
        password,
        profile_id: state.profileID,
      };
      return await appAxios.post("auth/connect/token", qs.stringify(req));
    },

    checkStoreData({ commit }) {
      if (
        localStorage.getItem("token") &&
        localStorage.getItem("expire") &&
        localStorage.getItem("refreshToken") &&
        localStorage.getItem("profileId")
      ) {
        let token = {
          token: localStorage.getItem("token"),
          expire: localStorage.getItem("expire"),
        };
        commit("SET_TOKEN", token);
        commit("SET_REFRESH_TOKEN", localStorage.getItem("refreshToken"));
        commit("SET_PROFILE_ID", localStorage.getItem("profileId"));
      } else {
        localStorage.clear("token");
        localStorage.clear("expire");
        localStorage.clear("refreshToken");
        localStorage.clear("profileId");
      }
    },

    async deactivate({state, dispatch}){
      await dispatch("checkExpireToken")
      appAxios.defaults.headers.common["Authorization"] =
          "Bearer " + state.token;
      let req = {
        notificationCode: state.notificationCode,
        notificationToken: state.notificationToken,
        profileId: state.profileID,
      };
      return await appAxios.post("endpoint/profile-service/user", qs.stringify(req));
    },

    logOut({ commit, state }) {
      localStorage.clear("token");
      localStorage.clear("expire");
      localStorage.clear("refreshToken");
      localStorage.clear("profileId");
      localStorage.clear("expireDate");
      commit("SET_TOKEN", { token: null, expire: null });
      commit("SET_REFRESH_TOKEN", null);
      commit("SET_PROFILE_ID", null);
      commit("SET_EXPIRE_DATE", null);
      commit("SET_PHONE_NUMBER", null);
      commit("SET_NOTIFICATION_TOKEN", null);
    },
  },

  getters: {
    _user: (state) => state.user,
    _notification_token: (state) => state.notificationToken,
    _notification_user_data: (state) => state.notificationUserData,
    _auth: (state) =>
      state.token?.length > 0 && state.refreshToken?.length > 0 ? true : false,
    _token: (state) => state.token,
    _profile_id: (state) => state.profileID,
  },
};
