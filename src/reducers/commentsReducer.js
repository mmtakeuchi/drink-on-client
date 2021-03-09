const commentsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COMMENTS":
      // console.log(state);
      // console.log(action.payload);
      return [...action.payload];
    case "CREATE_COMMENT":
      // console.log(action.payload);
      return [...state, action.payload];
    case "DELETE_COMMENT":
      let filteredComments = state.filter(
        (comment) => comment.id !== parseInt(action.payload)
      );
      return filteredComments;
    default:
      return state;
  }
};

export default commentsReducer;
