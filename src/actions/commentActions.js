import axios from "axios";
import API_ROOT from "../apiRoot";

export const getComments = (cocktailId) => {
  return (dispatch) => {
    axios
      .get(`${API_ROOT}/${cocktailId}/comments`)
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
      .post(`${API_ROOT}/${cocktailId}/comments`, commentObj)
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

export const updateComment = (cocktailId, comment, userId) => {
  const commentObj = {
    id: comment.id,
    content: comment,
    cocktail_id: cocktailId,
    user_id: userId,
  };

  return (dispatch) => {
    axios
      .patch(`${API_ROOT}/${cocktailId}/comments/${comment.id}`, commentObj)
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

export const deleteComment = (cocktailId, commentId) => {
  console.log(commentId, cocktailId);
  return (dispatch) => {
    axios
      .delete(`${API_ROOT}/${cocktailId}/comments/${commentId}`)
      .then((response) => {
        console.log(response);
        return dispatch({ type: "DELETE_COMMENT", payload: commentId });
      })
      .catch((error) => console.log("api errors:", error));
  };
};
