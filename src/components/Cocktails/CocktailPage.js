import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect, Link, withRouter } from "react-router-dom";
import CommentsContainer from "../../containers/CommentsContainer";
import Button from "@material-ui/core/Button";
import { deleteCocktail } from "../../actions/cocktailActions";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100vw",
    marginRight: "5%",
    marginLeft: "5%",
  },
  media: {
    height: 1,
    padding: "30%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  heart: {
    color: red[500],
  },
}));

const CocktailPage = (props) => {
  console.log(props);
  const { cocktails, match, user, history } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [like, setLike] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleLike = () => {
    setLike(!like);
  };

  if (!cocktails.length) {
    return <Redirect to="/cocktails" />;
  }

  const handleBack = () => {
    history.push("/cocktails");
  };

  const renderDetails = () => {
    if (cocktails && cocktails.length >= 1) {
      const cocktail = cocktails.find(
        (cocktail) => cocktail.id === parseInt(match.params.id, 10)
      );

      const handleDelete = () => {
        console.log(`${cocktail.id}`);
        this.props.deleteCocktail(`${cocktail.id}`);
        history.push("/cocktails");
      };

      if (cocktail) {
        const ingredients = cocktail.ingredients
          .split(",")
          .map((item, i) => item.trim())
          .filter((el) => el.length);

        return (
          <>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar aria-label="recipe" className={classes.avatar}>
                    R
                  </Avatar>
                }
                action={
                  <React.Fragment>
                    {user.current.id === cocktail.user_id ? (
                      <React.Fragment>
                        <IconButton aria-label="settings" onClick={handleClick}>
                          <MoreVertIcon />
                        </IconButton>

                        <Menu
                          id="simple-menu"
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                        >
                          <MenuItem onClick={handleClose}>
                            <Link
                              to={`/cocktails/${cocktail.id}/edit`}
                              style={{ textDecoration: "none", color: "black" }}
                            >
                              Edit
                            </Link>
                          </MenuItem>
                          <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                      </React.Fragment>
                    ) : (
                      ""
                    )}
                  </React.Fragment>
                }
                title={<h1>{cocktail.name}</h1>}
              />
              <CardMedia
                className={classes.media}
                image={cocktail.image}
                title="cocktail"
              />
              <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                  <ul>
                    Ingredients
                    {ingredients.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton
                  aria-label="add to favorites"
                  className={classes.icon}
                  onClick={handleLike}
                >
                  <FavoriteIcon className={like ? classes.heart : ""} />
                </IconButton>

                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                  <CommentsContainer cocktail={cocktail} />
                </CardContent>
              </Collapse>
            </Card>
          </>
        );
      }
    }
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleBack}>
        Back to Cocktails
      </Button>
      <>{renderDetails()}</>
    </div>
  );
};

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
