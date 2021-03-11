import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Cocktails from "./Cocktails/Cocktails";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 50,
    margin: 200,
  },
  title: {
    fontSize: 30,
    fontStyle: "bold",
    color: "black",
    fontFamily: "Merienda One",
  },
  pos: {
    marginBottom: 12,
  },
  sign: {
    marginRight: 15,
  },
  log: {
    marginLeft: 15,
  },
}));

const Home = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Drink On
        </Typography>

        <Typography
          // className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Welcome to Drink On!
          <br /> Jump right in and explore the drinks.
          <br /> Feel free to share some of your own and comment on others!
        </Typography>
        <Button variant="contained" color="primary">
          <Link
            to="/cocktails"
            style={{ textDecoration: "none", color: "white" }}
          >
            View Cocktails
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Home;
