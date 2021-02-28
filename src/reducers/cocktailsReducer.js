const cocktailsReducer = (state = { cocktails: [] }, action) => {
  switch (action.type) {
    case "GET_COCKTAILS":
      return {
        ...state,
        cocktails: [...state, action.payload],
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
