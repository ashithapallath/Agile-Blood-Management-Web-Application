const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");

//registering a user

exports.registerUser=catchAsyncErrors(async(req,res,next)=>{


    const{name,email,password}=req.body;

    const user=await User.create({
        name,
        email,
        password,
        avatar:{
            public_id:"sample id",
            url:"profile pic url",
        },
    

    })
    res.status(201).json({
        success:true,
        user
    });
});