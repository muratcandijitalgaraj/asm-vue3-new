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
        givenName: state.name,
        familyName: state.surname,
        gender: 1,
        birthDate: "1992-11-02",
        countryId: "bb25e87d-135a-0e42-b5e9-3a014b76f8b0",
        cityId: "3668db6f-ca24-7d19-ee1c-3a014b76f8b0",
        regionId: null,
        emailAddress: state.email,
        password: state.password,
        notificationToken:
          "L7eWx4yibPYXE80afz+xMXlxZPq8OnRZaXsOwBvl0QAIBcJ5ggutoKf9M//iwvirsurmGU48g9DyyMA/h0Ma+DhmSvh4kLbNd3VkI2rEd8XJWJVWmjZV20tYJhnmbGFLwmlh49++HuglT8Gfnkfus+PeKDkxQUgoCuilRnFlmRK1I9LIkq6/PVyLnrZhnYqSuvZaSoJU3jR+GrpifPj08Jv7gY5cND2Eah/EYOORzNc5pnqUZlmMocQwMNThMvS4ljD3ukotwZlJ1uIkBUmW0CjX0RaeJ31gPIXYUe1D7vE=",
        notificationCode: "123456",
        permissionToken1:
          "n9KphoyjSM6wGAcP6E8CiswMVap+n/LotkNqBGfnz354rk7Yr1M76JvojgtXqzanQaSQd3CrMI6izgbQSxFd0GvYQ2obJdk80Tb3uTl0FcFUqFhfO3Ht9oU3HNkm9hkZzuTmCbW/rBoQtyP+sPMWvFOJFWsqJ9hE/fv09lgC/b87RmOOcQLnQ3ZObsdd2LnKhfSnyUrrrku/OOdiDk1/SOHOxRD7LuDCbB1+ruv7+EA=",
        permissionCode1: "123456",
      };
      console.log("registered" + JSON.stringify(userData));

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
