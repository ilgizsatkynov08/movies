import React, { useEffect, useState } from "react";
import { API_KEY } from "../../api_key";
import axios from "axios";
import { Link } from "react-router-dom";
import MovieCard from "../MovieCard";

const Scrol = ({ idx }) => {
  const [scrol, setScrol] = useState([]);
  const getScrol = (key) => {
    axios(
      `https://api.themoviedb.org/3/person/${idx}/movie_credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setScrol(res.data.cast);
    });
  };
  useEffect(() => {
    getScrol(API_KEY);
  }, []);
  return (
    <div id="scrol">
      <div className="container">
        <div className="scrol">
          {scrol.map((el) => (
          <div className="block">
            <Link to={`/movieDetalis/${el.id}`}>
            <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`} alt=""/>

            </Link>
            <h3>{el.title}</h3>
          </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scrol;

