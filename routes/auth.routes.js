const { registerAdmin, loginAdmin, verifyAdminOTP, logoutAdmin, registerDoctor, loginDoctor, verifyDoctorOTP, logoutDoctor, registerPatient, loginPatient, verifyPatientOTP, logoutPatient } = require("../controller/auth.controller")

const router = require("express").Router()

router
    .post("/register-admin", registerAdmin)
    .post("/login-admin", loginAdmin)
    .post("/verify-admin-otp", verifyAdminOTP)
    .post("/logout-admin", logoutAdmin)
    
    .post("/register-doctor", registerDoctor)
    .post("/login-doctor", loginDoctor)
    .post("/verify-doctor-otp", verifyDoctorOTP)
    .post("/logout-doctor", logoutDoctor)
    
    .post("/register-patient", registerPatient)
    .post("/login-patient", loginPatient)
    .post("/verify-patient-otp", verifyPatientOTP)
    .post("/logout-patient", logoutPatient)

module.exports = router