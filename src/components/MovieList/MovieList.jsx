import React from "react";
import { films } from "../../constants/Films";
import Movies from "./Movies/Movies";

const MovieList = () => {
  return (
    <>
      <div className="cardsList">
        {films.map((film, i) => {
          return <Movies film={film} key={i} />;
        })}
      </div>
      <div className="sip">Movies with above average rating</div>
      <div className="cardsList">
        {films
          .filter((film) => film.rate > 5)
          .map((film, i) => {
            return <Movies film={film} key={i} />;
          })}
      </div>
    </>
  );
};

export default MovieList;
