import React, { useState } from 'react'
import Hero from './Hero'
import Scroll from './scroll'
import Search from './search'
import {BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom'
const Home = () => {

  
  const [bodypart, setBodypart]=useState([]);
  const [body, setBody]=useState([])



  

  return (
   
    <div className="">
     <Hero />
     <Search body={body} setBody={setBody}/>
      <Scroll setBodypart={setBodypart} bodypart={bodypart} body={body} setBody={setBody} />
    </div>
    
   
  )
}

export default Home
