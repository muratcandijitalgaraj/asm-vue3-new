import axios from "axios";
const authAxios = axios.create({
    //baseURL: "https://auth.comed.com.tr/"
})

authAxios.interceptors.request.use(request => {
    request.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
    return request;
});

export default authAxios