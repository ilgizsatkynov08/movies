import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_KEY } from "../../API";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Actor = ({ movieId }) => {
  const [actors, setActors] = useState([]);
  const getActors = (key) => {
    axios(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${key}&language=en-US`
    ).then((res) => {
      setActors(res.data.cast);
    });
  };
  useEffect(() => {
    getActors(API_KEY);
  }, []);
  console.log(actors);
  return (
    <div className="container">
      <div className="actorr">
        <h1>Actor</h1>

        <div className="actors">
          {actors.map((el) => (
            <div className="actor">
              <Link to={`/biografy/${el.id}`}>
                {
                  <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.profile_path}`}alt=""/>
                }
              </Link>
              <h1>{el.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Actor;
