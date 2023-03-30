const Blood = require("../models/BloodModel")



//create  --Admin
exports.createbloodDonor = async (req,res,next)=>{
    console.log(req.body);
    const blood = await Blood.create(req.body);

    res.status(201).json({
        success:true,
        blood
    })
} 


//get all Blood Donor details
exports.getAllBloodDonor = async (req,res) =>{

    const blood = await Blood.find();
    res.status(201).json({
        success:true,
        blood
    })
}


//get one particular Blood donor  details
exports.getDonorDetails = async (req,res,next) =>{

    const blood = await Blood.findById(req.params.id);

    if(!Blood){
        return res.status(500).json({
            success:false,
            message:"Blood Donor not found"
        });
    }

    res.status(201).json({
        success:true,
        blood
    })
}


//Update Blood Donor --Admin
exports.updatedonorDetails = async (req,res,next) =>{

    let blood = await Blood.findById(req.params.id);

    if(!blood){
        return res.status(500).json({
            success:false,
            message:"Blood Donor not found"
        })
    }

    blood = await Blood.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });

    res.status(200).json({
        success:true,
        blood
    })
}


//Delete Blood Donor --Admin

exports.deletebloodDonor = async(req,res,next)=>{

    const blood = await Blood.findByIdAndRemove(req.params.id);

    if(!blood){
        return res.status(500).json({
            success:false,
            message:"Blood Donor not found"
        });
    }


    res.status(200).json({
        success:true,
        message:"Blood Donor Daleted Successfully"
    })
}