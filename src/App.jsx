import React, { useState } from "react";
import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [allMovieData, setAllMovieData] = useState([]);
  const [searchMovie, setSearchMovie] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://omdbapi.com/?s=${searchMovie}&apikey=a1de9591`);
      const data = await res.json();

      // Check if the search results exist
      if (data.Search) {
        setAllMovieData(data.Search);
      } else {
        setAllMovieData([]); // No results, reset the array
      }

      console.log(data.Search);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setLoading(false);
    }
  };

  return (
    <div className="text-2xl">
      <Navbar />
      <div className="bg">
        <SearchBar
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        <MovieCard
          allMovieData={allMovieData}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default App;
