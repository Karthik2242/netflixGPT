import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);
  if (!movieNames) return null;
  return (
    <div className="p-4 m-6 bg-black text-white  bg-opacity-80">
      <div className="">
        {movieNames.map((movieName,index) => <MovieList  key={movieName} title={movieName} movies={movieResults[index]} />)}
        
      </div>
    </div>
  );
};

export default GptMovieSuggestions;