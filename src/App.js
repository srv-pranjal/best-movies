import "./App.css";
import { useState } from "react";
import Genre from "./components/genre";
import Movie from "./components/movie";
import GenreDictionary from "./components/genreDictionary";

function App() {
  const [genre, setGenre] = useState("Sci-Fi");
  var currentGenreList = GenreDictionary[genre];
  return (
    <div className="App">
      <h1>🎬 bestmovies</h1>
      <p>Checkout my favourite movies. Tap on any genre to get started</p>
      <Genre setGenre={setGenre} />
      <hr />
      {currentGenreList.map((item) => {
        return <Movie key={item} movieTitle={item} />;
      })}
    </div>
  );
}

export default App;
