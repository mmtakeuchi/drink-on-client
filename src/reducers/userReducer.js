const usersReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: [...state.users],
      };
    default:
      return state;
  }
};

export default usersReducer;
