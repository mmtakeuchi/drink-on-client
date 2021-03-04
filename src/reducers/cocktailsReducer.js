const cocktailsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COCKTAILS":
      return [...state, ...action.payload];
    case "CREATE_COCKTAIL":
      return [...state, action.payload];
    case "GET_COCKTAIL":
      return action.payload;
    default:
      return state;
  }
};

export default cocktailsReducer;
