const BASE_URL = "http://localhost:3001/cocktails";

export const fetchCocktails = () => {
  return (dispatch) => {
    fetch(`${BASE_URL}`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "FETCH_COCKTAILS", payload: data.cocktails });
      })
      .catch((err) => console.log(err));
  };
};
