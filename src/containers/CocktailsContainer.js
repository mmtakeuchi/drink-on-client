import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCocktails } from "../actions/cocktailActions";
import Cocktails from "../components/Cocktails";
import NewCocktail from "../components/NewCocktail";
import Cocktail from "../components/Cocktail";

export class CocktailsContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/cocktails" component={Cocktails} />
          <Route path="/cocktails/new" component={NewCocktail} />
          <Route path="/cocktails/:id" component={Cocktail} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  getCocktails: () => dispatch(getCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsContainer);
