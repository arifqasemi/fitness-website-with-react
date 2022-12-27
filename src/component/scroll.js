import  { useEffect, useState } from 'react'

import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "./slick.css";
import './home.css'
import axios from "axios";
import Result  from './result';


const Scroll =  ({setBodypart,bodypart, setBody, body}) => {
  const [bodypart1, setBodypart1]=useState([]);


 
  useEffect(()=>{
    const fetchQuotes = async () => {
      try {
        const res = await axios.get(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPartList`,
          {
            headers: {
              'X-RapidAPI-Key': '3f6806387amsh92f653117404258p186675jsn0dac8d2a1dc1',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            // params: {category: 'all', count: '10'}
          }
          
        );
        setBodypart(res.data)
        // console.log(res.data);

      } catch (err) {
        console.log(err);
      }
     
    };
    fetchQuotes()
    console.log(bodypart)
  },[])

 

  
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slider'>
    <div className="container">
         <Slider {...settings} >
         {bodypart.map(item=>
          <div className='slide' key={item.id ||item} id={item.id ||item} onClick={() =>{setBodypart1(item)}}>
            <img src='images/arm2.png'  />
            <h4 key={item} id={item.id} title={item.title} className="workouttitle">{item}</h4>
          </div>
         )}
         
         
        </Slider>
        </div>
        <Result bodypart1={bodypart1} setBodypart1={setBodypart1} setBody={setBody} body={body}/>
    </div>
    
  )
}

export default Scroll
