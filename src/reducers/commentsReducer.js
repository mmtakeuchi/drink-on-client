const commentsReducer = (state = { comments: [] }, action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      return {
        comments: [...state.comments],
      };
    default:
      return state;
  }
};

export default commentsReducer;
