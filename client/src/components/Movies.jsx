import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import axios from 'axios';
import { Link } from 'react-router-dom';
import baseurl from '../api/baseurl.js';

const Movies = () => {

  let [moviesData,setMoviesData] = useState(null);

  let fetchData= async ()=>{
    let res = await axios.get(baseurl);
    let resdata = await res.data;
    setMoviesData(resdata);
  }
  
  useEffect(()=>{
    fetchData();
  },[moviesData])

  return (
    <>
    <Link to="/create-movie">Create Movie</Link>
    {moviesData && moviesData.map((movie)=>{
          return  <Movie key={movie._id} movieid={movie._id} moviename={movie.moviename} movierating={movie.movierating} />
 
    })}
       </>
  )
}

export default Movies
