const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      // console.log(state);
      // console.log(action.payload);
      return [...action.payload];
    case "CREATE_COMMENT":
      // console.log(action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
