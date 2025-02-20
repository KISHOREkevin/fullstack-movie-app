import Movie from "../models/moviesSchema.js";

const getAllMovies = async (req,res)=>{
  let movies;
  try {
    movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    console.log(error); 
  }
}

const createMovie = async (req,res)=>{
  let {moviename,movierating} = req.body;
  try {
    let movie = new Movie({moviename,movierating});
    movie.save();
    return res.status(201).json({msg:"Movie created successfully"});
  } catch (error) {
    
  }
}

const deleteMovie = async (req,res)=>{
  let {movieid} = req.params;
  try {
    let movie = await Movie.findByIdAndDelete(movieid); 
    return res.status(200).json({movie});
  } catch (error) {
    console.log(error); 
  }
}

const updateMovie = async (req,res)=>{
  let {movieid} = req.params;
  let {moviename,movierating} = req.body;
  try {
    let movie = await Movie.findByIdAndUpdate(movieid,{moviename,movierating});
    return res.status(200).json({movie});
  } catch (error) {
    console.log(error);
  }
}


export {getAllMovies,createMovie,deleteMovie,updateMovie};

