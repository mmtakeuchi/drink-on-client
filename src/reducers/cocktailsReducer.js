const cocktailsReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_COCKTAILS":
      return action.payload;
    case "CREATE_COCKTAIL":
      console.log(state);
      console.log(action.payload);
      return [...state, action.payload];
    case "GET_COCKTAIL":
      return action.payload;
    case "UPDATE_COCKTAIL":
      let otherDrinks = state.filter((drink) => drink.id !== action.payload.id);
      console.log(otherDrinks);
      return [...otherDrinks, action.payload];
    case "DELETE_COCKTAIL":
      let filteredDrinks = state.filter(
        (drink) => drink.id !== parseInt(action.payload)
      );
      return filteredDrinks;
    default:
      return state;
  }
};

export default cocktailsReducer;
