import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCocktails } from "../actions/cocktailActions";
import Cocktails from "../components/Cocktails/Cocktails";
import NewCocktail from "../components/Cocktails/NewCocktail";
import CocktailPage from "../components/Cocktails/CocktailPage";

export class CocktailsContainer extends Component {
  render() {
    // console.log(this.props.cocktails);
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/cocktails/new" component={NewCocktail} />
          <Route exact path="/cocktails" component={Cocktails} />
          <Route
            path="/cocktails/:id"
            render={(props) => (
              <CocktailPage {...props} cocktails={this.props.cocktails} />
            )}
          />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  getCocktails: () => dispatch(getCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailsContainer);
