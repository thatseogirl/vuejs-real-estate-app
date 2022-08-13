import axios from "axios";

export const axiosClient = axios.create({
  baseURL: process.env.VUE_APP_DTT_API,
  headers: {
    "content-type": "application/json",
    "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
  },
});

export const axiosMultiPartClient = axios.create({
  baseURL: process.env.VUE_APP_DTT_API,
  headers: {
    "content-type": "multipart/form-data",
    "X-Api-Key": process.env.VUE_APP_SECRET_KEY,
  },
});
