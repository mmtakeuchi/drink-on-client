import React from "react";
import { connect } from "react-redux";
import Comments from "../components/Comments/Comments";
import CommentForm from "../components/Comments/CommentForm";

const CommentsContainer = (props) => {
  //   console.log(props);
  return (
    <div>
      <Comments user={props.user} cocktail={props.cocktail} />
      {props.user.loggedIn ? <CommentForm /> : ""}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
