import express from "express";
import 'dotenv/config'
import indexRouter from './routes/indexRouter.js'
import { dbConnection } from "./config/db.config.js";

dbConnection()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/v1', indexRouter)

const PORT=process.env.PORT ||3000

app.listen(PORT, ()=>{
    console.log("server is running at port ", PORT)
})