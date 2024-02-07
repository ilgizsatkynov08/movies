import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import MovieCard from "../MovieCard";

const TopRated = () => {
  const [TopRated, setTopRated] = useState([]);
  const getTopRated = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`
    ).then((res) => {
      setTopRated(res.data.results);
    });
  };
  useEffect(() => {
    getTopRated(API_KEY);
  }, []);
  console.log(TopRated);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {TopRated.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopRated;
