import axios from "axios";

const BASE_URL = "http://localhost:3001/cocktails/";

export const getComments = (cocktailId) => {
  return (dispatch) => {
    axios
      .get(`${BASE_URL}/${cocktailId}/comments`)
      .then((response) => {
        if (response.data) {
          return dispatch({
            type: "GET_COMMENTS",
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("comments errors:", error));
  };
};
