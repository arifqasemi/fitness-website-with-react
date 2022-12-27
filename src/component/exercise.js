import React from 'react'
import { useEffect, useState } from 'react'
import { useParam} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import ExerciseDetails from './exerciseDetails';
import Youtubevideo from './youtubevideo';
const Exercise = () => {
  const [detail,setDetail]=useState([])
  // const [video, setVideo]=useState([])

  const {id} = useParams();
  const exerciseUrl = 'https://exercisedb.p.rapidapi.com/exercises/exercise';

  useEffect(()=>{

    // console.log(id)
   const detailsData = async ()=>{
    try {
      const resultData = await axios.get(
          `${exerciseUrl}/${id}`,
          {
          headers: {
            'X-RapidAPI-Key': '3f6806387amsh92f653117404258p186675jsn0dac8d2a1dc1',
              'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
          }
          }
          
      );
      setDetail(resultData.data)
    
      } catch (err) {
      console.log(err);
      }
    }
    detailsData()
  },[id])
  return (
    <div>
    <ExerciseDetails detail={detail}/>
    </div>
  )
}

export default Exercise
