import React from "react";

const Cocktail = ({ cocktail }) => {
  const rendering = () =>
    cocktail ? (
      <>
        <h1>{cocktail.name}</h1>
      </>
    ) : (
      <>
        <p>No Cocktails</p>
      </>
    );
  return (
    <>
      <h1>Show drink</h1>

      <p>{rendering()}</p>
    </>

    /* <div>
        <h1>{cocktail.name}</h1>
        <img src={cocktail.image} alt={cocktail.name} />
        <p>{cocktail.ingredients}</p>
        <p>{cocktail.instructions}</p>
      </div> */
  );
};

export default Cocktail;
