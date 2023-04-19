const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const userschema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"Please Enter Your Name"],
    maxlength:[30,"Name cannot exceed 30 characters"],
    minlength:[4,"Name cannot exceed 4 characters"],
},
email:{
    type:String,
    required:[true,"Please Enter Your Email"],
    unique:true,
    validate:[validator.isEmail,"Please Enter a valid Email"],

},
password:{
    type:String,
    required:[true,"Please Enter Your Password"],
    minlength:[8,"Password should be greater than 8 characters"],
    select:false,


},
avatar:{
    public_id:{
        type:String,
        required:true,

    },
    url:{
        type:String,
        required:true,

    },
    
},
createdAt:{
    type:Date,
    default:Date.now,

},
resetPasswordToken:String,
resetPasswordExpire:Date,
    

});

userschema.pre("save", async function (next) {
    if (!this.isModified("password")) {
      next();
    }
  
    this.password = await bcrypt.hash(this.password, 10);
  }); 
  
  // JWT TOKEN
  userschema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });
  };
  
  // Compare Password
  
  userschema.methods.comparePassword = async function (password) {
  
    console.log(this.password)
    console.log(password)
    return await bcrypt.compare(password, this.password);
  };
  
  

module.exports=mongoose.model("User",userschema);


