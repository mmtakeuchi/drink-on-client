import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/signup">Sign Up</Link>
      <br />
      <Link to="/login">Log In</Link>
      <br />
      <Link to="/cocktails">Cocktails</Link>
    </div>
  );
};

export default Home;