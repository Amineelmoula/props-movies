import React from "react";
import Rating from "@mui/material/Rating";
import "./Movies.css";

function Movies({ film }) {
  return (
    <div className="cards">
      <img src={film.image} alt={film.name} />
      <h1>{film.name}</h1>
      <h2 className="rate">
        <Rating
          name="customized-10"
          value={film.rate}
          precision={0.5}
          max={10}
        />

        {film.rate}
      </h2>
      <h3>{film.description}</h3>
    </div>
  );
}

export default Movies;
