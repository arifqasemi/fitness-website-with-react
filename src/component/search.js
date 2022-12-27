import React, { useState } from 'react'
import './home.css';
import axios from "axios";

const Search = ({setBody,body}) => {
  const [search,setSearch]=useState('')
  const searchHandler = async ()=>{
    if(search){
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises',
        headers: {
          'X-RapidAPI-Key': '3f6806387amsh92f653117404258p186675jsn0dac8d2a1dc1',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {

        const searchedExercise = response.data.filter(
          (item) => item.name?.toLowerCase().includes(search)
             ||item.target?.toLowerCase().includes(search)
             ||item.equipement?.toLowerCase().includes(search)
             ||item.bodyPart?.toLowerCase().includes(search)
        )
        // console.log(searchedExercise);
       setBody(searchedExercise);
    
      }).catch(function (error) {
        console.error(error);
      });
      
       

     
     
    }

  }
  return (
    <div className='search'>
      <input type="text" value={search} onChange={(e) =>setSearch(e.target.value.toLocaleLowerCase())} placeholder='Search Exercise'/>
      <button className='btn' onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Search
