import axios from "axios";

const BASE_URL = "http://localhost:3001/cocktails";

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
      .catch((error) => console.log("comments errors: ", error));
  };
};

export const createComment = (cocktailId, comment, userId) => {
  const commentObj = {
    content: comment,
    cocktail_id: cocktailId,
    user_id: userId,
  };

  return (dispatch) => {
    axios
      .post(`${BASE_URL}/${cocktailId}/comments`, commentObj)
      .then((response) => {
        console.log(response);
        if (response.data) {
          return dispatch({
            type: "CREATE_COMMENT",
            payload: response.data,
          });
        }
      })
      .catch((error) => console.log("comment error: ", error));
  };
};
