import express from "express";
import mongoose from "mongoose";
import movieroutes from "./routes/moviesroute.js"; 
import cors from "cors";
import dotenv from "dotenv/config";
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
  console.log("Database connected");
})
.then(()=>{
  app.listen(3000,()=>console.log("Server started"));
})


app.use("/movies",movieroutes);
