import React, { Component } from "react";
import { connect } from "react-redux";
import { getCocktail } from "../actions/cocktailActions";

class CocktailPage extends Component {
  componentDidMount() {
    this.props.getCocktail(this.props.match.params.id);
  }

  render() {
    const { cocktail } = this.props;

    const renderDetails = () => {
      if (cocktail) {
        return (
          <>
            <h1>{cocktail.name}</h1>
            <h1>{cocktail.ingredients}</h1>
            <h1>{cocktail.instructions}</h1>
          </>
        );
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
  cocktail: state.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  getCocktail: (cocktailId) => dispatch(getCocktail(cocktailId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CocktailPage);
