const cocktailsReducer = (state = { cocktails: [] }, action) => {
  switch (action.type) {
    case "GET_COCKTAILS":
      return {
        cocktails: [...state.cocktails],
      };
    default:
      return state;
  }
};

export default cocktailsReducer;
