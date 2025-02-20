import React,{useState} from 'react'
import axios from "axios";
import { Link,useNavigate } from 'react-router-dom';
import baseurl from '../api/baseurl.js';
const CreateMovie = () => {
  let navigate = useNavigate();
  let [inputData,setInputData] = useState({
    moviename:"",
    movierating:""
  })
    
  let inputHandler = (e)=>{
    let {name,value} = e.target;
    setInputData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
    })

  }

  let submitHandler = async (e)=>{
    e.preventDefault();
    await axios.post(baseurl,inputData);
    navigate("/");
  }

  return (
    <>
    <form onSubmit={submitHandler}>
        <label htmlFor="moviename">Enter movie name:</label><br/>
        <input onChange={inputHandler} type="text" id='moviename' name="moviename"/><br/>
        <label htmlFor="movierating">Enter rating:</label><br/>
        <input onChange={inputHandler} type="number" id="movierating" name='movierating'/> <br/>
        <button>Add movie</button><br/>
        <Link to={"/"}>Go back</Link>
    </form>
    </>
  )
}

export default CreateMovie
