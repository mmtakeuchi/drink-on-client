import React, { useState } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { createComment } from "../../actions/commentActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  formDisplay: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
  },
  inputField: {
    margin: theme.spacing(1),
    width: "50vw",
  },
}));

const CommentForm = (props) => {
  // console.log(props);
  const classes = useStyles();
  const [content, setContent] = useState("");

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(props.cocktail.id, body);
    // console.log(body);
    props.createComment(props.cocktail.id, content, props.user.current.id);
  };
  // console.log(props);
  return (
    <React.Fragment>
      <form
        className={classes.formDisplay}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <FormControl>
          <OutlinedInput
            className={classes.inputField}
            id="standard-adornment-weight"
            value={content}
            name="content"
            onChange={handleChange}
            endAdornment={
              <Button type="submit" variant="contained" color="primary">
                Comment
              </Button>
            }
            aria-describedby="standard-weight-helper-text"
          />
          <FormHelperText id="standard-weight-helper-text">
            Comment
          </FormHelperText>
        </FormControl>
      </form>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createComment: (cocktailId, commentObj, userId) =>
    dispatch(createComment(cocktailId, commentObj, userId)),
});
export default connect(null, mapDispatchToProps)(CommentForm);
