import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../logo.svg";
import "./Cocktail.css";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  icon: {
    float: "left",
  },
  heart: {
    color: red[500],
  },
}));

const Cocktail = ({ cocktail }) => {
  // console.log(cocktail);
  const classes = useStyles();
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <Link to={`/cocktails/${cocktail.id}`}>
          <CardHeader title={cocktail.name} />
          <CardMedia
            className={classes.media}
            image={cocktail.image ? cocktail.image : logo}
            title="Paella dish"
          />
        </Link>

        {/* <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent> */}

        <IconButton
          aria-label="add to favorites"
          className={classes.icon}
          onClick={handleLike}
        >
          <FavoriteIcon className={like ? classes.heart : ""} />
        </IconButton>
      </Card>
    </React.Fragment>
  );
};

export default Cocktail;
