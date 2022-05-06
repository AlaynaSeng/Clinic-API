
const { Router } = require("express");
const patients = require("./patients");
const appointments = require("./appointments");
const doctors = require("./doctors");

const router = Router();

router.use("/patients", patients);
router.use("/doctors", doctors);
router.use("/appointments", appointments);

module.exports = router;