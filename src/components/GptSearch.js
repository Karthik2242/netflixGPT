import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { bgImg } from "../utils/constant";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-20">
        <img
          src={bgImg}
          alt="background"
          className="object-cover w-screen h-screen"
        />
      </div>
      <div className="pt-[40%] md:p-0">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch;
