const mongoose = require("mongoose")
const express = require("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const { doctorProtected, adminProtected, patientProtected } = require("./middleware/protected")
require("dotenv").config()

const app = express()
app.use(express.json()) 
app.use(cookieParser())  
app.use(cors({
    origin: true,
    credentials: true 
}))

app.use("/api/auth", require("./routes/auth.routes"))
app.use("/api/admin", adminProtected,require("./routes/admin.routes"))
app.use("/api/doctor",doctorProtected, require("./routes/doctor.routes"))
app.use("/api/schedule",doctorProtected, require("./routes/schedule.routes"))
app.use("/api/patient",patientProtected, require("./routes/patient.routes"))
app.use("/api/appointment", require("./routes/appointment.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})