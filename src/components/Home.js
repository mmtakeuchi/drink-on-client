import React from "react";
import "./Home.css";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" className="container">
        <h1>Home</h1>
        <Link to="/signup">Sign Up</Link>
        <br />
        <Link to="/login">Log In</Link>
        <br />
        <Link to="/cocktails">Cocktails</Link>
      </Container>
    </React.Fragment>
  );
};

export default Home;
