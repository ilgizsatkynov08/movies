import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_KEY } from "../../API";
import Scrol from "../Scrol";

const Biografy = () => {
  const [read, setRead] = useState(false);
  let { id } = useParams();
  let [biografy, setBiografy] = useState([]);
  async function getBio(key) {
    let res = await axios(
      `https://api.themoviedb.org/3/person/${id}?api_key=${key}&language=en-US`
    );
    let { data } = await res;
    setBiografy(data);
  }
  console.log(biografy);
  useEffect(() => {
    getBio(API_KEY);
  }, []);
  return (
    <div id="boi">
      <div className="container">
        <div className="boi">
          {
            <div className="bio-img">
              <img
                src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${biografy.profile_path}`}
                alt=""
              />
              <h1>Personal Info</h1>
              <h3>Known For</h3>
              <h2>{biografy.known_for_department}</h2>
              <h3>Gender</h3>
              <h2>{biografy.gender}</h2>
              <h3>Birthday</h3>
              <h2>{biografy.birthday}</h2>
              <h3>Place of Birth</h3>
              <h2>{biografy.place_of_birth}</h2>
              <h3>Also Known As </h3>
              <h2>{biografy.also_known_as}</h2>
            </div>
          }
          <div className="bio-style">
            <h2>{biografy.name}</h2>
            <h1>Biography</h1>
            <h3>{biografy.name}</h3>
            <p>
              {read === false
                ? biografy.biography?.slice(0, 305)
                : biografy.biography}{" "}
              <span
                onClick={() => {
                  setRead(!read);
                }}
              >
                Читать далее
              </span>
            </p>
            <Scrol idx={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biografy;
