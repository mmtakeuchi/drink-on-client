const BASE_URL = "http://localhost:3000";

const validateUser = (userObj) => {
  return {
    type: "LOGIN_USER",
    payload: userObj,
  };
};

export function createUser(userInfo) {
  return (dispatch) => {
    dispatch({ type: "SIGN_UP_USER" });
    fetch(`${BASE_URL}/sign_up`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        dispatch(validateUser(data.user));
      })
      .catch((err) => console.log(err));
  };
}

export function loginUser(userInfo) {
  return (dispatch) => {
    dispatch({ type: "AUTH_USER" });
    fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("token", data.jwt);
        dispatch(validateUser(data.user));
      });
  };
}
