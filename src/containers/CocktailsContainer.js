import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { fetchCocktails } from "../actions/cocktailActions";
// import { autoLoginUser } from "../actions/userActions";
import Cocktails from "../components/Cocktails";
import NewCocktail from "../components/NewCocktail";

export class CocktailsContainer extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <Switch>
          <Route exact path="/cocktails" component={Cocktails} />
          <Route path="/cocktails/new" component={NewCocktail} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCocktails: () => dispatch(fetchCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsContainer);
