const mongoose = require("mongoose")

const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    schedule: [{ type: mongoose.Schema.Types.ObjectId, ref: "Schedule" }],

    address: { type: String },
    clinic:{type:String},
    category:{type:String},
    city: { type: String },
    education: { type: String },
    degree: { type: String },
    gender: { type: String, enum: ["male", "female"] },
    isActive: { type: Boolean, default: false },
    infoComplete: { type: Boolean, default: false },
    otp: { type: String },
    otpSendOn: { type: Date },
}, { timestamps: true })

module.exports = mongoose.model("doctor", doctorSchema)