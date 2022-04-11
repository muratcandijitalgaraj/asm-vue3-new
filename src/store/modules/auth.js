import authAxios from "../../utils/authAxios";
import qs from "qs";

export default {
    namespaced: true,

    state: {
        token: null,
        expire: 360000,
        expireDate: null,
        user: null,
        defaultCredentials: {
            clientId: 'iCoMed_Mobile_IOS',
            clientSecret: 'c@mEd3234_21!',
            grantType: 'client_credentials'
        }
    },

    mutations: {
        SET_TOKEN(state, {token, expire}) {
            state.token = token
            state.expire = expire
        },
        SET_USER(state, data) {
            state.user = data
        },
        SET_EXPIRE_DATE(state) {
            let date = new Date()
            date.setMilliseconds(state.expire)
            localStorage.setItem('expireDate', date)
            state.expireDate = date
        }
    },

    actions: {
        async getAccessToken ({dispatch, commit, state}) {
            let credentials = {
                client_id: state.defaultCredentials.clientId,
                client_secret: state.defaultCredentials.clientSecret,
                grant_type: state.defaultCredentials.grantType
            }
            let response = await authAxios.post('auth/connect/token', qs.stringify(credentials)).then((response) => {
                commit('SET_EXPIRE_DATE')
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('expire', response.data.expires_in)
                dispatch('accessTokenAttempt', response.data.access_token, response.data.expires_in)

            }).catch((err) => {
                console.log(err)
            })
        },

        async accessTokenAttempt({ commit, state }, token, expire) {

            if (token) {
                commit('SET_TOKEN', token, expire)
            }

            if (!state.token) {
                return false
            }
        },
    },

    getters: {
        _user: state => state.user,
    }
};