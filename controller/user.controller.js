import User from '../model/user.model.js'

export const registerUser=async(req,res)=>{
    try {
        const {email}=req.body
    const isUser=await User.findOne({email})
    if (!isUser){
        const user= new User(req.body)
        await user.save()
        res.status(200).json({
            status:true,
            data:user,
            message:"user registered successfully"
        })
    }
    else{
        res.status(400).json({
            status:false,
            message:"email is already registered"
        })
    }
    
        
    } catch (error) {
        res.status(400).json({
          status:false,
          error:error.message  
        })
        console.log(error)
        
    }

}