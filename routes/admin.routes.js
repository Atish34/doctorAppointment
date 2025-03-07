const { getAdminDoctor } = require("../controller/admin.controller");

const router = require("express").Router()

router
    .get("/get-admin-doctor",getAdminDoctor)
    
    
module.exports = router;