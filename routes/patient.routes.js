const { getPatientDoctors, getSerachDoctor } = require("../controller/patient.controller");

const router = require("express").Router()

router
    .get("/get-patient-doctor",getPatientDoctors)
    .post("/get-search-doctor",getSerachDoctor)

    
    
module.exports = router;