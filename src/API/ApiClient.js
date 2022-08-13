import axios from "axios";

const axiosClient = axios.create({
    baseURL: process.env.VUE_APP_DTT_API,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
    },
});

export default axiosClient;
