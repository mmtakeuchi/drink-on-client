import React, { useState } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import OutlinedInput from "@material-ui/core/OutlinedInput";

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

const NewCocktail = (props) => {
  const classes = useStyles();

  const [values, setValues] = useState({
    name: "",
    image: "",
    ingredients: "",
    instructions: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(props);
  return (
    <React.Fragment>
      <div className={classes.root}>
        <h1>New Cocktail</h1>
        <form className={classes.form} noValidate autoComplete="off">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl className={classes.inputField} error>
                <InputLabel htmlFor="name">Email address</InputLabel>
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
                <FormHelperText id="component-error-text">Error</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl
                error
                className={classes.inputField}
                variant="outlined"
              >
                <InputLabel htmlFor="component-error">Instructions</InputLabel>
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
                <FormHelperText id="component-error-text">Error</FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              {/* <FormControl error className={classes.inputField}>
                <InputLabel htmlFor="image">Image</InputLabel>
                <Input
                  name="image"
                  value={values.image}
                  onChange={handleInputChange}
                  aria-describedby="component-error-text"
                  margin="normal"
                />
                <FormHelperText id="component-error-text">Error</FormHelperText>
              </FormControl> */}
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
                startIcon={<AddCircleOutlineIcon />}
              >
                Add Cocktail
              </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NewCocktail);
