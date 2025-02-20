import mongoose from "mongoose";
const moviesSchema = new mongoose.Schema({
  moviename: { type: String, required: true },
  movierating: { type: Number, required: true },
});
const Movie = mongoose.model("Movie", moviesSchema);

export default Movie;
