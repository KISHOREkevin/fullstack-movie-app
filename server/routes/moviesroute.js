import express from "express";
import { createMovie, deleteMovie, getAllMovies, updateMovie } from "../controllers/moviescontroller.js";
const movieroutes = express.Router();

movieroutes.get("/",getAllMovies);
movieroutes.post("/",createMovie);
movieroutes.put("/update-movie/:movieid",updateMovie);

movieroutes.delete("/:movieid",deleteMovie);

export default movieroutes
