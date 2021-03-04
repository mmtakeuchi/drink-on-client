import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
// import { getCocktail } from "../actions/cocktailActions";

class CocktailPage extends Component {
  render() {
    if (!this.props.cocktails.length) {
      return <Redirect to="/cocktails" />;
    }
    const { cocktails, match } = this.props;

    const renderDetails = () => {
      if (cocktails && cocktails.length >= 1) {
        const cocktail = cocktails.find(
          (cocktail) => cocktail.id === parseInt(match.params.id, 10)
        );
        console.log(cocktail);
        if (cocktail) {
          return (
            <>
              <h1>{cocktail.name}</h1>
              <h1>{cocktail.ingredients}</h1>
              <h1>{cocktail.instructions}</h1>
            </>
          );
        }
      }
    };

    return (
      <div>
        <h1>Looking for cocktail</h1>
        <>{renderDetails()}</>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cocktails: state.cocktails,
});

// const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, null)(CocktailPage);
