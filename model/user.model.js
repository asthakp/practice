import mongoose from "mongoose";
import pkg from 'validator'
const {isEmail}=pkg
import bcrypt from 'bcrypt'

const userSchema=mongoose.Schema({
    name:{
        type:String,
        minLength:[2, 'name should have minimum of 2 characters'],
        maxLength:[20, 'name should have maximum of 20 characters'],
        required:[true,'name is a required field']

    },

    email:{
        type:String,
        required:[true, 'email is a required field'],
        unique:[true, 'email should be unique'],
        lowercase:true,
        validate:[isEmail, 'please enter a valid email']
    },

    password:{
        type:String,
        minLength:[8, 'password should have atleast 8 characters'],
        required:[true, 'password is a required field']
    }
    
},
{
    timestamps:true
}
)

userSchema.pre('save', async function (next){
    const salt=await bcrypt.genSalt(10)
    this.password=await bcrypt.hash(this.password, salt)
    next()
})

const userModel=mongoose.model('users', userSchema)

export default userModel