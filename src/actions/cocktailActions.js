import axios from "axios";

const BASE_URL = "http://localhost:3001/cocktails";

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

export const createCocktail = (values, userId) => {
  const cocktailObj = {
    id: values.id,
    name: values.name,
    ingredients: values.ingredients,
    instructions: values.instructions,
    image: values.image,
    user_id: userId,
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
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};

export const getCocktail = (cocktailId) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${cocktailId}`)
      .then((response) => {
        if (response.data) {
          return dispatch({
            type: "GET_COCKTAIL",
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("cocktials errors:", error));
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
