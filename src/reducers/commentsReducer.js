const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default commentsReducer;
