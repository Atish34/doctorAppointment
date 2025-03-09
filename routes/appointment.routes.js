const { bookAppointment, getPatientAppointment, getPatientCompletedAppointment, getAdminPatientAppointment, getAdminPatientCompletedAppointment, deletePatientAppointment, updatePatientAppointment } = require("../controller/appointment.controller");

const router = require("express").Router()

router
    .post("/book-appointment",bookAppointment)
    .get("/get-patient-appointment",getPatientAppointment)
    .get("/get-patient-completed-appointment",getPatientCompletedAppointment)
    
    .get("/get-admin-appointment",getAdminPatientAppointment)
    .get("/get-admin-completed-appointment",getAdminPatientCompletedAppointment)
    
    .delete("/delete-patient-appointment/:_id",deletePatientAppointment)
    .put("/update-patient-appointment/:_id",updatePatientAppointment)
    
module.exports = router;