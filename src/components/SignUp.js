import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { createUser } from "../actions/userActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";

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

const SignUp = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [values, setValues] = useState({
    username: "",
    password: "",
    usernameError: "",
    passwordError: "",
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const validateInputs = () => {
    let isValid = true;
    let usernameError = "";
    let passwordError = "";
    let username = values.username;
    let password = values.password;

    if (!values.username) {
      usernameError = "Invalid username";
    }

    if (!values.password) {
      passwordError = "Password can't be empty.";
    }

    if (usernameError || passwordError) {
      setValues({ username, password, usernameError, passwordError });
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateInputs()) {
      props.createUser({
        username: values.username,
        password: values.password,
      });

      setValues({
        username: "",
        password: "",
      });

      history.push("/");
    }
  };

  const handleErrors = () => {
    if (values.errors) {
      return (
        <div>
          <ul>
            {values.errors.map((error) => {
              return (
                <li key={error} className="errorText">
                  {error}
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  };

  // console.log(values);
  return (
    <div className={classes.root}>
      <h2>Sign Up Form</h2>

      {values.usernameErrors ? handleErrors() : null}
      <form
        onSubmit={handleSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl
              className={classes.inputField}
              error={values.usernameError ? true : false}
            >
              {/* <InputLabel htmlFor="username">Username</InputLabel> */}
              {/* <label htmlFor="username">Username</label> */}
              <TextField
                label="Username"
                error={values.usernameError ? true : null}
                name="username"
                aria-describedby="my-helper-text"
                value={values.username}
                onChange={handleInputChange}
              />
              {/* <Input
                error={values.usernameError ? true : null}
                name="username"
                aria-describedby="my-helper-text"
                value={values.username}
                onChange={handleInputChange}
              /> */}

              <FormHelperText id="my-helper-text">
                {values.usernameError ? (
                  <div className="error">{values.usernameError}</div>
                ) : null}
              </FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl
              className={classes.inputField}
              error={values.passwordError ? true : null}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                error={values.passwordError ? true : null}
                name="password"
                aria-describedby="my-helper-text"
                value={values.password}
                onChange={handleInputChange}
              />
              <FormHelperText id="my-helper-text">
                {values.passwordError ? (
                  <div className="error">{values.passwordError}</div>
                ) : null}
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
              Sign Up
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createUser: (userInfo) => dispatch(createUser(userInfo)),
});

export default connect(null, mapDispatchToProps)(SignUp);
