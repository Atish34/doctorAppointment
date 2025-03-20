const Doctor = require("../models/Doctor");
const Schedule = require("../models/Schedule");
const asyncHandler = require("express-async-handler");

exports.getPatientDoctors = asyncHandler(async (req, res) => {
  const doctors = await Doctor.find({ isActive: true });
  const doctorIds = doctors.map((doc) => doc._id);

  const schedules = await Schedule.find({ doctorId: { $in: doctorIds } }).select(
    "doctorId day date startTime endTime"
  );

  const result = doctors.map((doctor) => ({
    ...doctor._doc,
    schedule: schedules.filter((schedule) =>
      schedule.doctorId.equals(doctor._id)
    ),
  }));

  res.json({ message: "Doctor fetch success", result });
});

exports.getSerachDoctor = asyncHandler(async(req,res)=>{
  const {term} = req.body
  console.log(req.body);
  

  const result = await Doctor.find({ $or: [{name:term}, {clinic:term}] })

  res.json({ message: "Doctor fetch success", result })
})
