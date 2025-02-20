import React from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import baseurl from '../api/baseurl.js'
const Movie = (props) => {

  let deleteButtonHandler = async (e)=>{
    await axios.delete(`${baseurl}/${props.movieid}`);

  }
  return (
    <>
    <div style={{border:"2px solid black"}}>
    <h1>{props.moviename}</h1>
    <h3>{props.movierating}</h3>
    <Link to={`/update-movie/${props.movieid}`}>Update</Link>
    <button onClick={deleteButtonHandler}>Delete</button>
    </div>
    </>
  )
}

export default Movie
