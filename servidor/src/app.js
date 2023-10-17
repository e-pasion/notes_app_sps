import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors'
import morgan from "morgan";

const APP= express(); 
const PORT= 3000; 


APP.use(express.json())
APP.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
APP.use(morgan('dev'));


APP.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`); 
    connectDB();
}) 