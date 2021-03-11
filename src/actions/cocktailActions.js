import axios from "axios";
let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = "https://drink-on-api.herokuapp.com/cocktails";
} else {
  BASE_URL = "http://localhost:3000/cocktails";
}

export const getCocktails = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        if (response.data) {
          return dispatch({
            type: "GET_COCKTAILS",
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("cocktials errors:", error));
  };
};

export const createCocktail = (values, user) => {
  const cocktailObj = {
    id: values.id,
    name: values.name,
    ingredients: values.ingredients,
    instructions: values.instructions,
    image: values.image,
    user_id: user.id,
  };

  return function (dispatch) {
    axios
      .post(`${BASE_URL}`, cocktailObj)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          console.log(response.data);
          return dispatch({
            type: "CREATE_COCKTAIL",
            payload: [response.data, user.username],
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const updateCocktail = (values, userId) => {
  const cocktailObj = {
    id: values.id,
    name: values.name,
    ingredients: values.ingredients,
    instructions: values.instructions,
    image: values.image,
    user_id: userId,
  };

  return (dispatch) => {
    axios
      .patch(`${BASE_URL}/${values.id}`, cocktailObj)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          return dispatch({
            type: "UPDATE_COCKTAIL",
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const deleteCocktail = (cocktailId) => {
  return (dispatch) => {
    axios
      .delete(`${BASE_URL}/${cocktailId}`)
      .then((response) => {
        console.log(response);
        return dispatch({ type: "DELETE_COCKTAIL", payload: cocktailId });
      })
      .catch((error) => console.log("api errors:", error));
  };
};
