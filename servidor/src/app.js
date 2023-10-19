import express from "express";
import connectDB from "./config/db.js";
import cors from 'cors'
import morgan from "morgan";
import userRoutes from './routes/user.routes.js';
import noteRoutes from './routes/note.routes.js';



const APP= express(); 
const URL='/api_notes_app/'


APP.use(express.json())
APP.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
APP.use(morgan('dev'));

APP.use(`${URL}users`,userRoutes)
APP.use(`${URL}notes`,noteRoutes)


APP.listen('0.0.0.0',()=>{
    console.log('server started'); 
    connectDB();
}) 