import React from "react";
import MovieDetails from "./movieDetails";
import "../App.css";

export default function Movie({ movieTitle }) {
  const movieData = MovieDetails[movieTitle];
  const movieImageSource = movieData[0];
  const movieRating = movieData[1];
  const movieDescription = movieData[2];
  return (
    <div className="movie-box">
      <img src={movieImageSource} alt={movieTitle} />
      <div>
        <h4>{movieTitle}</h4>
        <p className="rating">⭐ {movieRating}/10</p>
        <p>{movieDescription}</p>
      </div>
    </div>
  );
}
