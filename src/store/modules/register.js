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
      state.email = payload.email;
      state.password = payload.password;
      state.passwordRepeated = payload.passwordRepeated;
      state.uyruk = payload.uyruk;
      state.tcNo = payload.tcNo;
      state.name = payload.name;
      state.surname = payload.surname;
      state.gender = payload.gender;
      state.country = payload.country;
      state.city = payload.city;
      state.district = payload.district;
    },
  },

  actions: {

    async getCountry({}) {
      await store.dispatch("auth/checkExpireToken");
      console.log(store.getters['auth/_token'])
      appAxios.defaults.headers.common["Authorization"] =
          "Bearer " + store.getters['auth/_token'];
      return await appAxios.get(
          "endpoint/profile-service/lookups?title=Country&includeDetails=true",
      );
    },

    async registerUser({ commit, state, dispatch }) {
      let userData = {
        nationalityId: state.uyruk,
        identityNumber: state.tcNo,
        givenName: state.name,
        familyName: state.surname,
        gender: state.gender,
        birthDate: "1992-11-02",
        countryId: state.country,
        cityId: state.city,
        regionId: null,
        emailAddress: state.email,
        password: state.password,
        notificationToken: store.state.notificationToken,
        notificationCode: "123456",
        permissionToken1:
          "n9KphoyjSM6wGAcP6E8CiswMVap+n/LotkNqBGfnz354rk7Yr1M76JvojgtXqzanQaSQd3CrMI6izgbQSxFd0GvYQ2obJdk80Tb3uTl0FcFUqFhfO3Ht9oU3HNkm9hkZzuTmCbW/rBoQtyP+sPMWvFOJFWsqJ9hE/fv09lgC/b87RmOOcQLnQ3ZObsdd2LnKhfSnyUrrrku/OOdiDk1/SOHOxRD7LuDCbB1+ruv7+EA=",
        permissionCode1: "123456",
      };
      console.log("registered" + JSON.stringify(userData));

      await store.dispatch("auth/checkRefreshToken");
      let token = store.getters["auth/_token"];
      appAxios.defaults.headers.common["Authorization"] = "Bearer " + token;
      return await appAxios.post(
        "endpoint/profile-service/user",
        qs.stringify({ userData }),
        {
          headers: {
            "Content-Type: application/json": "Accept: application/json",
          },
        }
      );
    },
  },

  getters: {},
};
