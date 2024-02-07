import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { API_KEY } from "../../api_key";
import MovieCard from "../MovieCard";
const Popular = () => {

  const [popular, setPopular] = useState([]);
  const getPopular = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-En&page=1`
    ).then((res) => {
      setPopular(res.data.results);
    });
  };
  useEffect(() => {
    getPopular(API_KEY);
  }, []);
  console.log(popular);
  return (
    <div id="popular">
      <div className="container">
        <div className="popular">
          {popular.map((el) => (
            <MovieCard el={el} />
          ))}
        </div>
      </div>
    </div> 
  );
};

export default Popular;
