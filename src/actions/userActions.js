import axios from "axios";

const BASE_URL = "http://localhost:3001";

const validateUser = (userObj) => {
  return {
    type: "LOGIN_USER",
    payload: userObj,
  };
};

const logUserOut = () => ({ type: "LOGOUT_USER" });

export const loginUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/login`, { user }, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          return dispatch(validateUser(response.data));
        } else {
          return dispatch(logUserOut());
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const createUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/users`, user, { withCredentials: true })
      .then((response) => {
        if (response.status === 200) {
          return dispatch(validateUser(response.data.user));
        } else {
          return dispatch(logUserOut());
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const loginStatus = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/logged_in`, { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in) {
          return dispatch(validateUser(response.data.user));
        } else {
          return dispatch(logUserOut());
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    console.log("first logout");
    return dispatch(logUserOut());
  };
};
