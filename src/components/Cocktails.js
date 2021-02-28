import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCocktails } from "../actions/cocktailActions";

export class Cocktails extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h2>Cocktails List</h2>
        <Link to="/cocktails/new">New Cocktail</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
