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
    email: null,
    password: null,
    passwordRepeated: null,
    uyruk: null,
    tcNo: null,
    name: null,
    surname: null,
    gender: null,
    country: null,
    city: null,
    district: null,
  },

  mutations: {
    setCredentials(state, payload) {
      state.email = payload;
    },
  },

  actions: {
    // these first 3 actions are for demonstration purposes
    // delete them as soon as you get your onw action working
    async getAppointments() {
      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      let profileID = store.getters["auth/_profile_id"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      //return await appAxios.get('endpoint/timeline-service/visits/?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8')
      return await appAxios.get(
        "endpoint/appointment-service/appointments/?facilityId=3a029fc2-135c-0e05-2d77-d817861825d8"
      );
      //return await appAxios.get('endpoint/profile-service/profile')
    },
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
        // email: state.email,
        // password: state.password,
        // passwordRepeated: state.passwordRepeated,
        // uyruk: state.uyruk,
        // country: state.country,
        // city: state.city,
        // district: state.district,

        nationalityId: "bb25e87d-135a-0e42-b5e9-3a014b76f8b0",
        identityNumber: "18142984096",
        givenName: "Murat",
        familyName: "Yüksel",
        gender: 1,
        birthDate: "1992-11-02",
        countryId: "bb25e87d-135a-0e42-b5e9-3a014b76f8b0",
        cityId: "3668db6f-ca24-7d19-ee1c-3a014b76f8b0",
        regionId: null,
        emailAddress: "muratcan@mail.com",
        password: "123456",
        notificationToken:
          "L7eWx4yibPYXE80afz+xMXlxZPq8OnRZaXsOwBvl0QAIBcJ5ggutoKf9M//iwvirsurmGU48g9DyyMA/h0Ma+DhmSvh4kLbNd3VkI2rEd8XJWJVWmjZV20tYJhnmbGFLwmlh49++HuglT8Gfnkfus+PeKDkxQUgoCuilRnFlmRK1I9LIkq6/PVyLnrZhnYqSuvZaSoJU3jR+GrpifPj08Jv7gY5cND2Eah/EYOORzNc5pnqUZlmMocQwMNThMvS4ljD3ukotwZlJ1uIkBUmW0CjX0RaeJ31gPIXYUe1D7vE=",
        notificationCode: "123456",
        permissionToken1:
          "n9KphoyjSM6wGAcP6E8CiswMVap+n/LotkNqBGfnz354rk7Yr1M76JvojgtXqzanQaSQd3CrMI6izgbQSxFd0GvYQ2obJdk80Tb3uTl0FcFUqFhfO3Ht9oU3HNkm9hkZzuTmCbW/rBoQtyP+sPMWvFOJFWsqJ9hE/fv09lgC/b87RmOOcQLnQ3ZObsdd2LnKhfSnyUrrrku/OOdiDk1/SOHOxRD7LuDCbB1+ruv7+EA=",
        permissionCode1: "123456",
      };
      console.log("registered" + state.email);

      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // return await appAxios.post(
      //   "endpoint/profile-service/user",
      //   qs.stringify({ userData })
      // );
    },
  },

  getters: {},
};
