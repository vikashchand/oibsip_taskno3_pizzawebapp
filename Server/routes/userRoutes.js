const express =require('express')
const router =express.Router()
const User =require('../Models/userModel')

router.post('/api/users/register',(req,res)=>{
    const{first_name,last_name,email,password}=req.body
    const newUser =new User({first_name,last_name,email,password})
    try {
        newUser.save()
        res.status(200).json({
            success:true,
            message:"registration success"


        })
    } catch (error) {
        

        res.status(400).json({

            message:error,
        });
    }
});

module.exports =router;