import React from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions/userActions.js";
import { NavLink, useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LocalBarIcon from "@material-ui/icons/LocalBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  drinkButton: {
    textDecoration: "none",
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: theme.spacing(2),
    textDecoration: "none",
    color: "inherit",
  },
}));
console.log(this);
const NavBar = (props) => {
  console.log(props);
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    props.logoutUser();
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/">
            <IconButton
              className={classes.drinkButton}
              edge="start"
              size="medium"
              style={{ color: "#fff" }}
              aria-label="drink"
            >
              <LocalBarIcon className={classes.drinkButton} />
            </IconButton>
          </NavLink>

          <Typography variant="h6" className={classes.title}>
            <NavLink to="/cocktails" className={classes.link}>
              Drink On
            </NavLink>
          </Typography>
          {!props.user.loggedIn ? (
            <React.Fragment>
              <NavLink to="/signup" className={classes.link}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={classes.link}>
                Login
              </NavLink>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button onClick={() => handleClick()}>Logout</Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logoutUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
