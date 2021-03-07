import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from "react-router-dom";
import CommentsContainer from "../../containers/CommentsContainer";
import Button from "@material-ui/core/Button";
import { deleteCocktail } from "../../actions/cocktailActions";

class CocktailPage extends Component {
  render() {
    console.log(this.props);
    const { cocktails, match, user } = this.props;

    if (!cocktails.length) {
      return <Redirect to="/cocktails" />;
    }

    const renderDetails = () => {
      if (cocktails && cocktails.length >= 1) {
        const cocktail = cocktails.find(
          (cocktail) => cocktail.id === parseInt(match.params.id, 10)
        );

        const handleDelete = () => {
          console.log(`${cocktail.id}`);
          this.props.deleteCocktail(`${cocktail.id}`);
          this.props.history.push("/cocktails");
        };

        if (cocktail) {
          const ingredients = cocktail.ingredients
            .split(",")
            .map((item, i) => item.trim())
            .filter((el) => el.length);

          return (
            <>
              <h1>{cocktail.name}</h1>

              <ul>
                Ingredients
                {ingredients.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h1>{cocktail.instructions}</h1>
              {user.current.id === cocktail.user_id ? (
                <div>
                  <Link to={`/cocktails/${cocktail.id}/edit`}>
                    <Button variant="outlined" color="primary">
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={handleDelete}
                  >
                    Delete
                  </Button>
                </div>
              ) : (
                ""
              )}

              <div className="comments-box">
                <CommentsContainer cocktail={cocktail} />
              </div>
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
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  deleteCocktail: (cocktailId) => dispatch(deleteCocktail(cocktailId)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CocktailPage)
);
