import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cocktail from "./Cocktail";
import { getCocktails } from "../../actions/cocktailActions";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

const Cocktails = (props) => {
  // console.log(props);
  const { cocktails } = props;
  const classes = useStyles();

  const renderNewButton = () => {
    if (props.user.loggedIn) {
      return (
        <Link to="/cocktails/new">
          <Button color="primary">New Cocktail</Button>
        </Link>
      );
    }
  };

  const renderCocktails = () => {
    if (cocktails) {
      return cocktails.map((cocktail, i) => {
        return (
          <Grid item xs={6} sm={4} md={3} lg={2} key={i}>
            <Cocktail cocktail={cocktail} key={i} />
          </Grid>
        );
      });
    }
  };

  return (
    <div className={classes.root}>
      <h2>Cocktails List</h2>
      <React.Fragment>{renderNewButton()}</React.Fragment>
      <br />
      <Grid container spacing={3}>
        <React.Fragment>{renderCocktails()}</React.Fragment>
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  cocktails: state.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  getCocktails: () => dispatch(getCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
