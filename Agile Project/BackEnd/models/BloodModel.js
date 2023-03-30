const mongoose = require("mongoose");

const bloodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Donor's Name"],
    trim: true,
  },
 address: {
    type: String,
    required: [true, "Please Enter  Address of Donor"],
  },
  Bloodgroup: {
    type: String,
    required: [true, "Please Enter Bloodgroup of Donor"],
    
  },
  email: {
    type: String,
    required: [true, "Please Enter  Donor s' mail id"],
    
  },
  Phone: {
    type: Number,
    required: [true, "Please Enter contact number of Donor"],
    
  },
  donatedDetails: {
    type: String,
    required: [true, "Please Enter Donor s' donated details"],
  },
  Age: {
    type: Number,
    required: [true, "Please Enter Donor's contact number"],
    maxLength: [2, "Age cannot exceed 2 characters"],
    default: 1
  },
  weight: {
    type: String,
    required: [true, "Please Enter weight of Donor"],
    
  },
 
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blood", bloodSchema);