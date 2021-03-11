import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, useHistory, withRouter } from "react-router-dom";
import { CloudinaryContext } from "cloudinary-react";
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

  const [values, setValues] = useState({
    id: `${drink.id}`,
    name: `${drink.name}`,
    image: `${drink.image}`,
    ingredients: `${drink.ingredients}`,
    nameErrors: "",
    ingredientError: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let isValid = true;
    let name = values.name;
    let ingredients = values.ingredients;
    let nameError = "";
    let ingredientsError = "";

    if (!values.name) {
      nameError = "Invalid name";
    }

    if (!values.ingredients) {
      ingredientsError = "Ingredients can't be empty.";
    }

    if (nameError || ingredientsError) {
      setValues({ name, ingredients, nameError, ingredientsError });
      isValid = false;
    }

    return isValid;
  };

  const imageSubmit = () => {
    var myUploadWidget;
    myUploadWidget = window.cloudinary.openUploadWidget(
      {
        cloudName: "disiodpgq",
        uploadPreset: "ij6ulbcy",
      },
      (error, result) => {
        console.log(result);
        if (result.info.secure_url) {
          setValues({
            image: result.info.secure_url,
          });
        }
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      props.updateCocktail(values, props.user.current.id);
      history.push(`/cocktails/${values.id}`);
    }
  };

  const renderUser = () => {
    // console.log(props);
    return correctUser ? (
      <React.Fragment>
        <div className={classes.root}>
          <h1>Update Cocktail</h1>
          <CloudinaryContext cloudName="disiodpgq">
            <button
              id="upload_widget"
              onClick={imageSubmit}
              className="cloudinary-button"
            >
              Upload files
            </button>
          </CloudinaryContext>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormControl
                  className={classes.inputField}
                  error={values.nameError ? true : null}
                >
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    error={values.nameError ? true : null}
                    name="name"
                    aria-describedby="my-helper-text"
                    value={values.name}
                    onChange={handleInputChange}
                  />
                  <FormHelperText id="my-helper-text">
                    {values.nameError}
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl
                  error={values.ingredientsError ? true : null}
                  className={classes.inputField}
                  variant="outlined"
                >
                  <InputLabel htmlFor="component-error">Ingredients</InputLabel>
                  <OutlinedInput
                    multiline
                    rows={5}
                    error={values.ingredientsError ? true : null}
                    label="Ingredients"
                    id="component-error"
                    name="ingredients"
                    placeholder="Please seperate ingredients with a comma"
                    value={values.ingredients}
                    onChange={handleInputChange}
                    aria-describedby="component-error-text"
                  />
                  <FormHelperText id="component-error-text">
                    {values.ingredientsError
                      ? values.ingredientsError
                      : "Please seperate ingredients with a comma"}
                  </FormHelperText>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <Button
                  variant="outlined"
                  type="submit"
                  color="primary"
                  // className={classes.button}
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
