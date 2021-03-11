import axios from "axios";
let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://drink-on-api.herokuapp.com";
} else {
  BASE_URL = "http://localhost:3000";
}

const validateUser = (userObj) => {
  return {
    type: "LOGIN_USER",
    payload: userObj,
  };
};

export const errorCreator = (error) => {
  return {
    type: "USER_ERROR",
    errors: error,
  };
};

const logUserOut = () => ({ type: "LOGOUT_USER" });

export const loginUser = (user) => {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/login`, { user }, { withCredentials: true })
      .then((response) => {
        if (response.status === 200 && !response.data.errors) {
          return dispatch(validateUser(response.data));
        } else {
          return dispatch(errorCreator(response.data.errors));
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
        console.log(response);
        if (response.data.status === "created") {
          return dispatch(validateUser(response.data));
        } else {
          return dispatch({
            type: "USER_ERROR",
            payload: response.data.errors,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        return dispatch(errorCreator(error));
      });
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
          return console.log("errors:", response.data.error);
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    return dispatch(logUserOut());
  };
};
