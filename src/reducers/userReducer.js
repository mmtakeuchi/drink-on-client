const initialState = {
  current: {},
  loggedIn: false,
};

const userReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        current: { ...action.payload },
        loggedIn: true,
        errors: "",
      };
    case "LOGOUT_USER":
      return {
        current: {},
        loggedIn: false,
      };
    case "USER_ERROR":
      return {
        loggedIn: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
