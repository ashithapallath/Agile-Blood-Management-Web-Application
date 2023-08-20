const ErrorHander = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");

// Registering a user
exports.registerUser = catchAsyncErrors(async (req, res, next) => {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
        return next(new ErrorHander("Passwords do not match", 400));
    }

    const user = await User.create({
        name,
        email,
        password,
        confirmPassword,
        avatar: {
            public_id: "sample id",
            url: "profile pic url",
        },
    });

    sendToken(user, 201, res);
});




// Login User
exports.loginUser = catchAsyncErrors(async (req, res, next) => {
    const { email, password } = req.body;
  
    // checking if user has given password and email both
  
    if (!email || !password) {
      console.log("1")
      return next(new ErrorHander("Please Enter Email & Password", 400));
    }
  
    const user = await User.findOne({ email }).select("+password");
  
    if (!user) {
      console.log("2")
      return next(new ErrorHander("Invalid email or password", 401)); 
    }
  
    const isPasswordMatched = await user.comparePassword(password);
    console.log(isPasswordMatched)
    if (!isPasswordMatched) {
      console.log("3")
      return next(new ErrorHander("Invalid email or password", 401));
    }
  
    sendToken(user, 200, res);
  });