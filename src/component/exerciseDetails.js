import React from 'react'
import './home.css';
import { useEffect, useState } from 'react'
import axios from 'axios'

import Youtubevideo from './youtubevideo';
const ExerciseDetails = ({detail}) => {
    const {gifUrl,name,target,bodyPart,equipement}=detail;
    const [video, setVideo]=useState([])


    useEffect(()=>{
      const fetchyoutbevideo = async ()=>{
        const youtubVideo = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=
        snippet&key=AIzaSyC6yjRl-nADUJvfXhZkHk9mRckLSbgob_Q&type=video&q=${name}`)
  
       setVideo(youtubVideo.data.items)
  
      }
     fetchyoutbevideo()

    },[name])

    console.log()
  return (
    <div className="contain">
    <div className='single'>
    <div className="image1">
    <img className='singleImage1' src={gifUrl} alt={name} />
    </div>
    <div className="title">
      <h2>{name}</h2>
        <p>Exercise keep you strong, {name} {''} is one of the best exercise to target your {target}. <br></br>
        it will help you improve your mood and gain energy.</p>
        <h4 className='singletitle'>Target:{target}</h4>
        <h4 className='singletitle'>BodyPart:{bodyPart}</h4>
        <h4 className='singletitle'>{equipement}</h4>
    </div>
    </div>
    <div className="video">
    <div className="videotitle">
    <p >Watch <span className='exercisename'>{name} </span>Videos For More Details</p>
    </div>
      <Youtubevideo video={video}/>
    </div>
    </div>
  )
}

export default ExerciseDetails
