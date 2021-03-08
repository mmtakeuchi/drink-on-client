import React, { Component } from "react";
import { connect } from "react-redux";
import Comments from "../components/Comments/Comments";
import CommentForm from "../components/Comments/CommentForm";
import { getComments } from "../actions/commentActions";

class CommentsContainer extends Component {
  componentDidMount() {
    this.props.getComments(this.props.cocktail.id);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.user.loggedIn ? <CommentForm /> : ""}
        <Comments user={this.props.user} cocktail={this.props.cocktail} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getComments: (cocktailId) => dispatch(getComments(cocktailId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);
