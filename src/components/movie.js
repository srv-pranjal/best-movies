import React from "react";
import MovieDetails from "./movieDetails";

export default function Movie({ movieTitle }) {
  const movieData = MovieDetails[movieTitle];
  const movieImageSource = movieData[0];
  const movieRating = movieData[1];
  const movieDescription = movieData[2];
  return (
    <div>
      <img src={movieImageSource} alt={movieTitle} />
      <div>
        <h2>{movieTitle}</h2>
        <p>⭐ {movieRating}/10</p>
        <p>{movieDescription}</p>
      </div>
    </div>
  );
}
