const express = require("express");
const {  getAllBloodDonor, createbloodDonor, updatedonorDetails, deletebloodDonor } = require("../controllers/BloodController");
const router = express.Router();


router.route("/blood").get(getAllBloodDonor);

router.route("/blood/new").post(createbloodDonor);

router.route("/blood/:id").put(updatedonorDetails);

router.route("/blood/:id").delete(deletebloodDonor);


module.exports = router