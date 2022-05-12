const { Router } = require("express");
const appointment = require("../models/appointments");
const doctor = require("../models/doctors");
const patient = require("../models/patients");
const router = Router();

router.get("/", async (req, res) => {
  res.json(await appointment.find());
});

router.delete("/delete/:id", async (req, res) => {
  await appointment.deleteOne({ _id: req.params.id });
  res.end();
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body)
  res.json(
    await appointment.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
});


router.get("/", async (req, res) => {
  res.json(await doctor.find());
});

router.delete("/delete/:id", async (req, res) => {
  await doctor.deleteOne({ _id: req.params.id });
  res.end();
});

router.put("/update/:id", async (req, res) => {
  console.log(req.body)
  res.json(
    await doctor.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
  );
  
});
router.get("/", async (req, res) => {
    res.json(await patient.find());
});
  
router.delete("/delete/:id", async (req, res) => {
    await patient.deleteOne({ _id: req.params.id });
    res.end();
});
  
router.put("/update/:id", async (req, res) => {
    res.json(
      await patient.findByIdAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
      })
    );
});

module.exports = router;