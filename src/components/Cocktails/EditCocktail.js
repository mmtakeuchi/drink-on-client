import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import { updateCocktail } from "../../actions/cocktailActions";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    padding: theme.spacing(2),
  },
  inputField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "65%",
  },
}));

const EditCocktail = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const drink = props.cocktails.find(
    (cocktail) => cocktail.id === parseInt(props.match.params.id, 10)
  );

  const correctUser = props.user.current.id === drink.user_id;
  console.log(props);

  const [values, setValues] = useState({
    id: `${drink.id}`,
    name: `${drink.name}`,
    image: `${drink.image}`,
    ingredients: `${drink.ingredients}`,
    instructions: `${drink.instructions}`,
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.updateCocktail(values, props.user.current.id);
    history.push(`/cocktails/${values.id}`);
  };

  const renderUser = () => {
    return correctUser ? (
      <React.Fragment>
        <div className={classes.root}>
          <h1>Update Cocktail</h1>
          <form className={classes.form} noValidate autoComplete="off">
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl className={classes.inputField} error>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    name="name"
                    aria-describedby="my-helper-text"
                    value={values.name}
                    onChange={handleInputChange}
                  />
                  <FormHelperText id="my-helper-text">
                    We'll never share your email.
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  error
                  className={classes.inputField}
                  variant="outlined"
                >
                  <InputLabel htmlFor="component-error">Ingredients</InputLabel>
                  <OutlinedInput
                    multiline
                    rows={5}
                    label="Ingredients"
                    id="component-error"
                    name="ingredients"
                    value={values.ingredients}
                    onChange={handleInputChange}
                    aria-describedby="component-error-text"
                  />
                  <FormHelperText id="component-error-text">
                    Please seperate ingredients by a ","
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  error
                  className={classes.inputField}
                  variant="outlined"
                >
                  <InputLabel htmlFor="component-error">
                    Instructions
                  </InputLabel>
                  <OutlinedInput
                    multiline
                    rows={5}
                    label="Instructions"
                    id="component-error"
                    name="instructions"
                    value={values.instructions}
                    onChange={handleInputChange}
                    aria-describedby="component-error-text"
                  />
                  <FormHelperText id="component-error-text">
                    Please seperate instructions by a comma.
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <input
                  accept="image/*"
                  name="image"
                  // className={classes.inputField}
                  style={{ width: "35%" }}
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <label htmlFor="contained-button-file">
                  <Button variant="contained" color="primary" component="span">
                    Upload
                  </Button>
                </label>
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={handleSubmit}
                  startIcon={<AddCircleOutlineIcon />}
                >
                  Update Cocktail
                </Button>
              </Grid>
            </Grid>
          </form>
        </div>
      </React.Fragment>
    ) : (
      <Redirect to="/cocktails" />
    );
  };
  return <React.Fragment>{renderUser()}</React.Fragment>;
};

const mapStateToProps = (state) => ({
  user: state.user,
  cocktails: state.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  updateCocktail: (values, userId) => dispatch(updateCocktail(values, userId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditCocktail)
);