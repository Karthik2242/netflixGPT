import React, { useRef } from "react";
import { createOptions } from "../utils/options";
import { API_OPTIONS } from "../utils/constant";
import { addGPTMovieResult } from "../utils/gptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchMovieTmdb = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const searchText = useRef(null);

  const handleGptSearchClick = async () => {
    const inputText = searchText.current.value;

    const options = createOptions(inputText);

    try {
      const response = await fetch(
        "https://api.edenai.run/v2/text/chat",
        options
      );
      const result = await response.json();

      if (result && result.openai && result.openai.generated_text) {
        console.log(result.openai.generated_text);
        const gptMovies = result.openai.generated_text.split(",");
        const promiseArray = gptMovies.map((movie) => searchMovieTmdb(movie));

        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(
          addGPTMovieResult({
            movieNames: gptMovies,
            movieResults: tmdbResults,
          })
        );
      }
    } catch (error) {
      console.error("Error generating response:", error);
    }
  };

  return (
    <div className="p-[10%] flex justify-center">
      <form
        className="bg-black opacity-80 w-[100%] md:w-[50%] grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like to watch today?"
          className="p-2 m-4 h-12 col-span-8  md:col-span-9 rounded-md opacity-100 "
        />
        <button
          className="flex items-center  justify-center p-4 m-4 bg-red-700 h-12  rounded-lg col-span-4 md:col-span-3 font-bold text-white text-lg"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
