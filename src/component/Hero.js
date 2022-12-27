import React from 'react'
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import './home.css';
const Hero = () => {
  return (
  
    <div className='hero'>
      <div className="title">
      <p>Fitness Club</p>
      <h3>Sweat, Smile And Repeat</h3>
      <p>checkout the most effective Exercises personalised to you</p>
      <button className='btn'>Explore Exercises</button>
      <h2 className='word'>EXERCISE</h2>
      </div>
      <div className="image">
       <img src='../images/model.jpg'/>
      </div>
    </div>
     
  )
}

export default Hero
