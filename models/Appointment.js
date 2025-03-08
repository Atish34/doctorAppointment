const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctorId: { type: mongoose.Types.ObjectId, ref: "doctor" },
  patientId: { type: mongoose.Types.ObjectId, ref: "patient"},
  day: { type: String ,reqired:true},
  date: { type: String ,reqired:true},
  timeSlot: { type: String ,reqired:true},
  reason: { type: String ,reqired:true},
  status: {
    type: String,
    enum: ["pending","accept","reject", "completed"],
    default: "pending",
  }
});

module.exports = mongoose.model("appointment", appointmentSchema);
