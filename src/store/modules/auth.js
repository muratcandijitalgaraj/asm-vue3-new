import authAxios from "../../utils/authAxios";
import appAxios from "../../utils/appAxios";
import qs from "qs";

export default {
    namespaced: true,

    state: {
        token: null,
        expire: 360000,
        expireDate: null,
        user: null,
        phoneNumber: null,
        notificationToken: null,
        notificationCode: null,
        defaultCredentials: {
            clientId: 'iCoMed_Mobile_IOS',
            clientSecret: 'c@mEd3234_21!',
            grantType: 'client_credentials'
        }
    },

    mutations: {
        SET_TOKEN(state, data) {
            state.token = data.token
            state.expire = data.expire
        },
        SET_USER(state, data) {
            state.user = data
        },
        SET_EXPIRE_DATE(state) {
            let date = new Date()
            date.setMilliseconds(state.expire)
            localStorage.setItem('expireDate', date)
            state.expireDate = date
        },
        SET_PHONE_NUMBER(state, phoneNumber) {
            state.phoneNumber = phoneNumber
        },
        SET_NOTIFICATION_TOKEN(state, notificationToken) {
            state.notificationToken = notificationToken
        },
        SET_NOTIFICATION_CODE(state, notificationCode) {
            state.notificationCode = notificationCode
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
                dispatch('accessTokenAttempt', {token: response.data.access_token, expire: response.data.expires_in})

            }).catch((err) => {
                console.log(err)
            })
        },

        async accessTokenAttempt({ commit, state }, data) {
            if (data.token) {
                commit('SET_TOKEN', data)
            }

            if (!state.token) {
                return false
            }
        },

        async phoneNotify({commit, state, dispatch}, phone) {
            await dispatch('checkExpireToken')
            appAxios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
            let response = await appAxios.post('endpoint/profile-service/user/notify', qs.stringify({mobileNumber:phone})).then((response) => {
                commit('SET_PHONE_NUMBER', phone)
                commit('SET_NOTIFICATION_TOKEN', response.data.data)
            }).catch((err) => {
                console.log(err)
            })
        },

        async phoneVerify({commit, state, dispatch}, notificationCode) {
            await dispatch('checkExpireToken')
            console.log(state.notificationToken)
            appAxios.defaults.headers.common['Authorization'] = 'Bearer ' + state.token;
            return await appAxios.post('endpoint/profile-service/user/verify', qs.stringify({notificationToken: state.notificationToken, notificationCode}))
        },

        checkExpireToken({dispatch, state}) {
            if (new Date() > state.expireDate) {
                dispatch('getAccessToken')
            }
        }

    },

    getters: {
        _user: state => state.user,
        _notification_token: state => state.notificationToken
    }
};