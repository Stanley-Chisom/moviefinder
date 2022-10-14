import React, { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import Movie from "./Movie";

const API_URL = "http://www.omdbapi.com/?apikey=44c5d8fe&plot=full";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const getMovies = async (getTitle) => {
    const response = await fetch(`${API_URL}&s=${getTitle}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  useEffect(() => {
    getMovies("Superman");
  }, []);

  return (
    <div className="app">
      <h1>Home Theater</h1>
      <div className="search">
        <input
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={() => getMovies(search)} />
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movie movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
