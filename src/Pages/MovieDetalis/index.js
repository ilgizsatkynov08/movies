import axios from 'axios';
import React, { useEffect } from 'react';
import { API_KEY } from '../../API';
import BgDetal from '../../components/Bgdetal';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TfiMenuAlt } from "react-icons/tfi";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import Actor from '../../components/Actor';
import Video from '../../components/Video';




const MovieDetalis = () => {
    const {id}=useParams(); 
    const[details,setDetalis]=useState({});
    const [heart , setHeart]=useState(false);
    const [res, setRes]=useState(false);
    const getMovieDetalis= async (key)=>{
        const res=await axios(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
       const {data}=await res
setDetalis(data)   
 }
    useEffect(()=>{
        getMovieDetalis(API_KEY)
    },[])
    console.log(details);
    return (
      
       <div className=''>
         <div id='detal' style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundImage: `linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 50%, rgba(31.5, 31.5, 31.5, 0.84) 100%), url("https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${details.backdrop_path}")`
      
        }}>
        <div className='container'>
            <div className='detal'>
                <div className='bg 'onClick={{
                    
                }}>
                </div>
             
            <img className='image'  src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${details.poster_path}`} alt=''/>
            <img src={`/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg${details.backdrop_path}`} alt=''/>
<div className='detalreb'>
<h1>{details.title}</h1>
    <div className='data'>
<h3>{details.release_date}</h3>
{
    details.genres ?.map((el)=>(
        <h3>{el.name}</h3>
    ))
}
<h5 className='a1'>{Math.floor(details.runtime/60)}h {Math.round(details.runtime%60)}min</h5>

    </div>
    <div className='doit'>
<h1 className='math'>{Math.trunc(details.vote_average*10)}%</h1>
<div className='icons'>
    <a href='#'><TfiMenuAlt /></a>
    <a href='#' onClick={()=>setHeart(!heart) } style={{
        color : heart ? "red" : "white"
    }} ><FaHeart />
</a>
    <a href='#' onClick={()=> setRes(!res)} style={{
        color: res ? "black" : "none"
    }}><FaBookmark /></a>
    <a href='#'><FaStar />
</a>
    </div>
</div>
<h6>{details.tagline}</h6>
<h2>Overview</h2>
<p>{details.overview}</p>

</div>

        </div>
        </div> 

        </div>
        <Actor movieId={id}/>
        <Video movieId={id}/>
       </div>
    );
};
export default MovieDetalis;