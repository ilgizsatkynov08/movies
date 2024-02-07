import React, { useContext, useState } from "react";
import logo from "../img/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg";
import { Link, useNavigate } from "react-router-dom";
import { languageContext } from "../Context";

const Header = () => {
  const [value, setValue] = useState("");
  const {setLanguage}=useContext(languageContext)
  let nav = useNavigate();
  console.log(setLanguage);
  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <img className="logo" src={logo} alt="img" />
          <div className="header--nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/popular"}>Popular</Link>
            <Link to={"/topRated"}>Top Rated</Link>
          </div>
          {/* <select onChange={(e)=>{
setLanguage(e.target.value)
          }}> */}
          <select>
            <option value="en-US">English</option>
            <option value="ru-RU">Русский</option>
          </select>
          <div className="header--search">
            <input
              placeholder="... довавить"
              type="text"
              onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={() => nav(`/movieSearch/${value}`)}>search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
