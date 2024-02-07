import React from "react";
import { Link } from "react-router-dom";
import { SlOptions } from "react-icons/sl";


const MovieCard = ({ el }) => {
  return (
    <div className="movieCard">
      <Link to={`/movieDetalis/${el.id}`}>
<img className="type" src={`https://www.themoviedb.org/t/p/w220_and_h330_face/${el.poster_path}`} alt=""/>

      </Link>
<h4 className="era">{el.title}</h4>
<h5>{el.release_date}</h5>
<h6>
< SlOptions />

</h6>
    </div>
  )

};

export default MovieCard;
