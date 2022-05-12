
const { Router } = require("express");
const patients = require("./patients");
const appointments = require("./appointments");
const doctors = require("./doctors");
const admin = require("./admin");
const accounts = require("./accounts");

const router = Router();

router.use("/patients", patients);
router.use("/doctors", doctors);
router.use("/appointments", appointments);
router.use("/admin", admin);
router.use("/accounts", accounts);

module.exports = router;