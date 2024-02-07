import React from 'react';
import bg from '../img/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg'
import re from '../img/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg'
import bio from '../img/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg'
import leo from '../img/qhb1qOilapbapxWQn9jtRCMwXJF.jpg'
import mia from '../img/gdIrmf2DdY5mgN6ycVP0XlzKzbE.jpg'
import fio from '../img/bkpPTZUdq31UGDovmszsg2CchiI.jpg'
import ret from '../img/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg'
import op from '../img/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg'

import Slider from "react-slick";


const Home = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div className='home'>
        <div className='container'>
            <div className='house'>
            <div className='home'>
<div className='circle'></div>
{/* <img src={bg} alt=''/> */}
            </div>
            <div className='welcome'>
                <h1>Welcome</h1>
                <p>Millions of movies, TV shows and people to discover. Explore now.</p>
                <div className='type'>
                <input placeholder='Search for a movie, tv show, person......' type=''/>
                <button>Search</button>
            </div>
            </div>
            </div>
             <Slider {...settings} className='joh'>
          <div>
          <img src={bg} alt=''/>
          </div>
          <div>
          <img src={re} alt=''/>
          </div>
          <div>
          <img src={bio} alt=''/>

          </div>
          <div>
          <img src={leo} alt=''/>
          </div>
          <div>
          <img src={mia} alt=''/>
          </div>
          <div>
          <img src={fio} alt=''/>
          </div>
          <div>
          <img src={ret} alt=''/>
          </div>
          <div>
          <img src={op} alt=''/>
          </div>
                    <div>
          <img src={leo} alt=''/>
          </div>
            <div>
          <img src={re} alt=''/>
          </div>
          <div>
          <img src={bio} alt=''/>
          </div>
        </Slider>
            </div>
            
        </div>
    );
};

export default Home;