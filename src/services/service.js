import axios from "axios";

export const baseURL = process.env.API_HOST || "";

export const gpAxios = axios.create({
  baseURL,
  headers: { "Content-Type": "application/json" }
});

/**
 *
 * @param token
 */

export const setUserToken = (token) => {
  if (token) {
    gpAxios.defaults.headers.common[
      "User-Key"
    ] = `${process.env.REACT_APP_TOKEN}`;
    gpAxios.defaults.headers.common["x-access-token"] = token;
    gpAxios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
  } else {
    delete gpAxios.defaults.headers.common["User-Key"];
    delete gpAxios.defaults.headers.common["x-access-token"];
  }
};
