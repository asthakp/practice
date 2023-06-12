import mongoose from "mongoose";

const productSchema= mongoose.Schema({
    title:{
        type:String,
        minLength:5,
        maxLength:30
    },
    price:{
        type:Number,
        min:500,
        max:50000
    },
    description:{
        type:String
    },
    category:{
        type:String
    }
},
{
    timestamps:true
}
)

const productModel=mongoose.model('Products', productSchema)

export default productModel