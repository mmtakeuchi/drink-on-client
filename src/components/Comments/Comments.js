import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { deleteComment } from "../../actions/commentActions";

const Comments = (props) => {
  console.log(props);
  const { comments, user } = props;

  const renderComments = () => {
    if (comments) {
      return comments.map((comment, i) => (
        // console.log(comment)
        <li key={i}>
          By: {comment.user.username}
          <br />
          {comment.content}
          {user.current.id === comment.user_id ? (
            <div>
              <Link
                to={`/cocktails/${comment.cocktail_id}/comments/${comment.id}/edit`}
                style={{ textDecoration: "none" }}
              >
                <Button variant="outlined" color="primary">
                  Edit
                </Button>
              </Link>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() =>
                  props.deleteComment(comment.cocktail_id, comment.id)
                }
              >
                Delete
              </Button>
            </div>
          ) : (
            ""
          )}
        </li>
      ));
    } else {
      <p>No Comments</p>;
    }
  };
  return (
    <>
      <h1>Some Comments</h1>
      <ul>{renderComments()}</ul>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (cocktailId, commentId) =>
    dispatch(deleteComment(cocktailId, commentId)),
});

export default connect(null, mapDispatchToProps)(Comments);
