import React, { useState } from 'react'
import { useEffect } from 'react';
import './home.css'
import axios from 'axios';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';

import Pagination from './pagination';
const Result = ({setBodyPart1, bodypart1,body,setBody}) => {
const [currentPage, setCurrentPage]=useState([1])
const [postPerPage, setPostPerPage]=useState([15]) 



useEffect(()=>{
    const fetch = async () => {
        try {
        const resultData = await axios.get(
            `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodypart1}`,
            {
            headers: {
                'X-RapidAPI-Key': '3f6806387amsh92f653117404258p186675jsn0dac8d2a1dc1',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
            }
            }
            
        );
        setBody(resultData.data)
        // console.log(res.data);

        } catch (err) {
        console.log(err);
        }
        
    };
    fetch()
    console.log(body)
    },[bodypart1])

    const lastPostIndex = currentPage * postPerPage;
    const firstPostIndex = lastPostIndex - postPerPage;
    const currentPost = body.slice(firstPostIndex, lastPostIndex)
   

  return (
    
    <div className="result">
        {currentPost.map((x,index) =>{
            return(
                <Link to={`/exercise/${x.id}`} className='card' key={x.id} >
                <img  src={x.gifUrl} alt=""  />
                <h4 >{x.bodyPart}</h4>
                <h6 >{x.name}</h6>
                </Link>
            )
            
        })}
        <Pagination totalpost={body.length} postPerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} key={body}/>
    </div>
  )
}

export default Result
