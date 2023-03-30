const mongoose = require("mongoose");

async function connectDatabase(){
  try{
    await mongoose.connect(process.env.DB_URI);
    console.log("Connected to MongoDB")
  } catch(error){
    console.error(error);
  }
}



module.exports = connectDatabase;