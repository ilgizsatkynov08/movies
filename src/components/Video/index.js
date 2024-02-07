import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { API_KEY } from '../../API';

const Video = ({movieId}) => {
    const  [video, setVideo] =useState([])
    const getActors=(key)=>{
            axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`).then((res)=>{
setVideo(res.data.results)
            })
    }
    useEffect(()=>{
        getActors(API_KEY)
    }, []);
    console.log(video);
    return (
        <div id='video'>
            <div className='container'>
                <div className='tru'>
            <h1 className='tri' >Trailers</h1>

                <div className='video'>
                    {
                         video.map((el)=>(
                            <div className='wrap'>
                            <iframe width="500" height="450" src={`https://www.youtube.com/embed/${el.key}?list=RD5Ia2LeebYtc`} title="Miyagi &amp; Эндшпиль feat. Amigo - Самая (Lyric video)/ Andy Panda" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                            </div>
                         )    
    
                        )
                        
                    }

                </div>
                </div>
            </div>
            
        </div>
    );
};

export default Video;