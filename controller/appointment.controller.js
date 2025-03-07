const asyncHandler = require("express-async-handler");
const Appointment = require("../models/Appointment");

exports.bookAppointment = asyncHandler(async (req, res) => {
    console.log(req.body);
        await Appointment.create({
            patientId: req.loggedInPatient,
            doctorId: req.loggedInDoctor,
            day: req.body.data.day,
            date: req.body.data.date,
            timeSlot: req.body.data.timeSlot,
            reson: req.body.data.reson,
        })
        res.json({ message: "order place success"})
    })

exports.getPatientAppointment = asyncHandler(async (req,res)=>{
        const result = await Appointment
        .find({
            patient:req.loggedInPatient,
        })
        .populate("doctor","name email mobile address")
        res.json({message:"order get success",result})
    })
    
exports.getPatientCompletedAppointment = asyncHandler(async (req,res)=>{
        const result = await Appointment
        .find({
            patient:req.loggedInPatient,
            status:'completed'
        })
        .populate("doctor","name email mobile address")
        res.json({message:"order get success",result})
    })
    