const asyncHandler = require("express-async-handler");
const Appointment = require("../models/Appointment");
const Doctor = require("../models/Doctor");

exports.bookAppointment = asyncHandler(async (req, res) => {
    
        await Appointment.create({
            patientId: req.loggedInPatient,
            doctorId: req.body.doctorId,
            day: req.body.day,
            date: req.body.date,
            timeSlot: req.body.timeSlot,
            reason: req.body.reason,
        })
        res.json({ message: "book appointment success"})
    })

exports.getPatientAppointment = asyncHandler(async (req,res)=>{
        const result = await Appointment
        .find({
            patientId:req.loggedInPatient,
        })
        .populate({
            path: "doctorId",
            select: "name email mobile address"
        });
        res.json({message:"appointment get success",result})
    })
    
exports.getPatientCompletedAppointment = asyncHandler(async (req,res)=>{
        const result = await Appointment
        .find({
            patient:req.loggedInPatient,
            status:'completed'
        })
        .populate("doctor","name email mobile address")
        res.json({message:"appointment get success",result})
    })
    