const Doctor = require("../models/Doctor")
const Schedule = require("../models/Schedule")
const asyncHandler = require("express-async-handler")

exports.getPatientDoctors = asyncHandler(async(req,res) => {
  const result = await Doctor
  .find({isActive:true})
  .populate("schedule","day startTime endTime")
  res.json({message:"doctor fetch success",result})
})
