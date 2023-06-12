import mongoose from 'mongoose'
import 'dotenv/config'

const MONGO_URL=process.env.MONGO_URL

export const dbConnection=async()=>{
    const connection=await mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
    }
    )
    console.log("mongodb connected at", connection.connection.host)
    
}



