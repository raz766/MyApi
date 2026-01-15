const express = require("express");
const router = express.Router();
const data = require("../data.json");

/*
==============================
  קבלת כל המצבים הרפואיים
==============================
*/
router.get("/conditions", (req, res) => {
  res.json(data.conditions);
});

/*
==============================
  קבלת מצב רפואי לפי id
==============================
*/
router.get("/conditions/:id", (req, res) => {
  const condition = data.conditions.find(
    c => c.id === req.params.id
  );

  if (!condition) {
    return res.status(404).json({ message: "מצב רפואי לא נמצא" });
  }

  res.json(condition);
});

/*
==============================
  קבלת כל השלבים של מצב רפואי
==============================
*/
router.get("/conditions/:id/steps", (req, res) => {
  const condition = data.conditions.find(
    c => c.id === req.params.id
  );

  if (!condition) {
    return res.status(404).json({ message: "מצב רפואי לא נמצא" });
  }

  res.json(condition.steps);
});

/*
==============================
  קבלת שלב מסוים לפי מספר שלב
==============================
*/
router.get("/conditions/:id/steps/:step", (req, res) => {
  const condition = data.conditions.find(
    c => c.id === req.params.id
  );

  if (!condition) {
    return res.status(404).json({ message: "מצב רפואי לא נמצא" });
  }

  const stepNumber = parseInt(req.params.step);
  const step = condition.steps.find(
    s => s.step === stepNumber
  );

  if (!step) {
    return res.status(404).json({ message: "שלב לא נמצא" });
  }

  res.json(step);
});

module.exports = router;
