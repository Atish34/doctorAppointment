const { bookAppointment, getPatientAppointment, getPatientCompletedAppointment } = require("../controller/appointment.controller");

const router = require("express").Router()

router
    .post("/book-appointment",bookAppointment)
    .get("/get-patient-appointment",getPatientAppointment)
    .get("/get-patient-completed-appointment",getPatientCompletedAppointment)
    
    
module.exports = router;