const asyncHandler = require("express-async-handler")
const Doctor = require("../models/Doctor")
const Patient = require("../models/Patient")

exports.getAdminDoctor = asyncHandler(async(req,res) => {
    const result = await Doctor.find()
    res.json({message:"doctor get success",result})
})

exports.getAdminPatient = asyncHandler(async(req,res) => {
    const result = await Patient.find()
    res.json({message:"doctor get success",result})
})


exports.adminBlockUnblockDoctor = asyncHandler(async (req, res) => {
    const {aid} = req.params
    await Doctor.findByIdAndUpdate(aid, { isActive: req.body.isActive },{new:true})
    res.json({ message: "Account block success" })
})

exports.adminBlockUnblockPatient = asyncHandler(async (req, res) => {
    const {aid} = req.params
    await Patient.findByIdAndUpdate(aid, { isActive: req.body.isActive },{new:true})
    res.json({ message: "Account block success" })
})