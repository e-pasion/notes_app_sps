import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors'
import morgan from "morgan";
import userRoutes from './routes/user.routes.js';
import noteRoutes from './routes/note.routes.js';



const APP= express(); 
const PORT= 3000; 
const HOST = '0.0.0.0'; 
const URL='/api_notes_app/'


APP.use(express.json())
APP.use(cors({
    origin: "https://main--heartfelt-shortbread-5effc2.netlify.app/",
    credentials: true
}))
APP.use(morgan('dev'));

APP.use(`${URL}users`,userRoutes)
APP.use(`${URL}notes`,noteRoutes)


APP.listen(PORT,HOST,()=>{
    console.log(`http://localhost:${PORT}`); 
    connectDB();
}) 