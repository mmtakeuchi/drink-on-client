const BASE_URL = "http://localhost:3001";

const validateUser = (userObj) => {
  return {
    type: "LOGIN_USER",
    payload: userObj,
  };
};

export function createUser(userInfo) {
  return (dispatch) => {
    fetch(`${BASE_URL}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      withCreditials: true,
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
    const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userInfo),
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", data.jwt);
          dispatch(validateUser(data.user));
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
}

export function autoLoginUser() {
  return (dispatch) => {
    const token = localStorage.token;
    if (token) {
      return fetch(`${BASE_URL}/auto_login`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.error) {
            alert(data.error);
            localStorage.removeItem("token");
          } else {
            dispatch(loginUser(data));
          }
        });
    }
  };
}

export function logoutUser(userInfo) {
  return (dispatch) => {
    localStorage.removeItem("token");
    return dispatch({ type: "LOGOUT_USER", payload: userInfo });
  };
}
