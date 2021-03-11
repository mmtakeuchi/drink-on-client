import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import Button from "@material-ui/core/Button";
import { deleteComment } from "../../actions/commentActions";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    jusitfyContent: "center",
    alignItems: "center",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  chip: {
    margin: theme.spacing(0.5),
    marginBottom: "10px",
  },
  section1: {
    margin: theme.spacing(3, 2),
  },
  section2: {
    margin: theme.spacing(2),
  },
  section3: {
    margin: theme.spacing(3, 1, 1),
  },
}));

const Comments = (props) => {
  const classes = useStyles();
  // console.log(props);
  const { comments, user } = props;

  const renderComments = () => {
    if (comments) {
      return comments.map((comment, i) => (
        <React.Fragment key={i}>
          <ListItem button>
            <ListItemText
              primary={comment.content}
              secondary={`By: ${comment.user.username}`}
            />
          </ListItem>
          {user.current.id === comment.user_id ? (
            <div>
              <Link
                to={`/cocktails/${comment.cocktail_id}/comments/${comment.id}/edit`}
                style={{ textDecoration: "none" }}
              >
                <Chip
                  className={classes.chip}
                  variant="outlined"
                  color="primary"
                  label="Edit"
                />
              </Link>
              <Chip
                className={classes.chip}
                variant="outlined"
                color="secondary"
                onClick={() =>
                  props.deleteComment(comment.cocktail_id, comment.id)
                }
                label="Delete"
              />
            </div>
          ) : (
            ""
          )}
          <Divider />
        </React.Fragment>
      ));
    } else {
      <p>No Comments</p>;
    }
  };
  return (
    <>
      <h1>Some Comments</h1>
      <List
        component="nav"
        className={classes.root}
        aria-label="mailbox folders"
      >
        {renderComments()}
      </List>
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (cocktailId, commentId) =>
    dispatch(deleteComment(cocktailId, commentId)),
});

export default connect(null, mapDispatchToProps)(Comments);
