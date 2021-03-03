const initialState = {
  current: {},
  loggedIn: false,
};

const userReducer = (state = { initialState }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      console.log(action.payload);
      return {
        current: { ...action.payload },
        loggedIn: true,
      };
    case "LOGOUT_USER":
      return {
        current: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
