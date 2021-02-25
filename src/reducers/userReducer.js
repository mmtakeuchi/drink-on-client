const usersReducer = (state = { user: {}, loggedIn: false }, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOGOUT_USER":
      return {
        ...state,
        user: {},
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default usersReducer;
