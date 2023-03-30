const mongoose=require("mongoose");
const validator=require("validator");

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

module.exports=mongoose.model("User",userschema);


