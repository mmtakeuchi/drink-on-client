import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
import "./Cocktail.css";

const Cocktail = ({ cocktail }) => {
  console.log(cocktail);
  return (
    <div className="cocktail-card">
      <Link to={`/cocktails/${cocktail.id}`}>
        <div>
          <img src={logo} className="App-logo" alt="cocktail" />
          <h2>{cocktail.name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default Cocktail;
