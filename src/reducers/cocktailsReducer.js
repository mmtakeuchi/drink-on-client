const cocktailsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COCKTAILS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cocktailsReducer;
