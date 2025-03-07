const asyncHandler = require("express-async-handler")
const Doctor = require("../models/Doctor")

exports.getAdminDoctor = asyncHandler(async(req,res) => {
    const result = await Doctor.find()
    res.json({message:"doctor get success",result})
})