import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './home.css';

const Youtubevideo = ({video}) => {


  const shorted = video.slice(0,2);
  // console.log(shorted)
  
  return (
   
   <div className="videofromYoutub">
      {shorted.map((x,index) =>
      <div className="cont">
      <div className="vid"><a key={index} href={`https://www.youtube.com/watch?v=${x.id.videoId}`}>
      <img src={x.snippet.thumbnails.default.url} alt="" />
      <h4 >{x.snippet.title}</h4>
      </a>
      </div>
     
      </div>
    
      )}
     
      </div>
 
  )
}

export default Youtubevideo
