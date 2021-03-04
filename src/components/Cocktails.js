import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Cocktail from "./Cocktail";
import { getCocktails } from "../actions/cocktailActions";

export class Cocktails extends Component {
  componentDidMount() {
    this.props.getCocktails();
  }

  render() {
    const { cocktails } = this.props;

    const renderNewButton = () => {
      if (this.props.user.loggedIn) {
        return <Link to="/cocktails/new">New Cocktail</Link>;
      }
    };
    const renderCocktails = () => {
      console.log(cocktails);
      if (cocktails.length) {
        return (
          <Link to={`cocktails/${cocktails[0].id}`}>
            {cocktails[0].name}
            {/* <Cocktail key={cocktails[0].id} cocktail={cocktails[0]} /> */}
          </Link>
        );
      }
    };
    console.log(this.props);
    return (
      <div>
        <h2>Cocktails List</h2>
        <Link to="/cocktails/1">1 Cocktail</Link>
        <br />
        <>{renderCocktails()}</>
        <br />
        <React.Fragment>{renderNewButton()}</React.Fragment>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  cocktails: state.cocktails,
});

const mapDispatchToProps = (dispatch) => ({
  getCocktails: () => dispatch(getCocktails()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cocktails);
