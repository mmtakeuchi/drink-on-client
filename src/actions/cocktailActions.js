import axios from "axios";

const BASE_URL = "http://localhost:3001/cocktails";

export const getCocktails = () => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}`)
      .then((response) => {
        console.log(response.data);
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
  console.log(values, userId);
  const cocktailObj = {
    name: values.name,
    ingredients: values.ingredients,
    instructions: values.instructions,
    image: values.image,
    user_id: userId,
  };
  console.log(cocktailObj);

  return (dispatch) => {
    axios
      .post(`${BASE_URL}`, cocktailObj)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response.data);
          return dispatch({
            type: "CREATE_COCKTAIL",
            payload: response.data.cocktails,
          });
        }
      })
      .catch((error) => console.log("api errors:", error));
  };
};
