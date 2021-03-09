import React from "react";

const Comments = (props) => {
  console.log(props);
  const { comments } = props;
  console.log(comments);

  const findUser = (users, userId) => users.find((user) => user.id === userId);
  const renderComments = () => {
    if (comments) {
      return comments.map((comment, i) => <li key={i}>{comment.content}</li>);
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

export default Comments;
