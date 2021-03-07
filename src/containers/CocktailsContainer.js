import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { getCocktails } from "../actions/cocktailActions";
import Cocktails from "../components/Cocktails/Cocktails";
import NewCocktail from "../components/Cocktails/NewCocktail";
import EditCocktail from "../components/Cocktails/EditCocktail";
import CocktailPage from "../components/Cocktails/CocktailPage";

export class CocktailsContainer extends Component {
  componentDidMount() {
    this.props.getCocktails();
  }

  render() {
    // console.log(this.props.cocktails);
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/cocktails/new" component={NewCocktail} />
          <Route path="/cocktails/:id/edit" component={EditCocktail} />
          <Route
            path="/cocktails/:id"
            render={(props) => (
              <CocktailPage {...props} cocktails={this.props.cocktails} />
            )}
          />
          <Route exact path="/cocktails" component={Cocktails} />
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
