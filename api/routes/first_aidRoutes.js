const express = require("express");
const router = express.Router();
const data = require("../data.json");

/*
================================================
                  CONDITIONS
================================================
*/

// GET /conditions
router.get("/conditions", (req, res) => {
  res.json(data.conditions);
});

// GET /conditions/:id
router.get("/conditions/:id", (req, res) => {
  const condition = data.conditions.find(
    c => c.id === req.params.id
  );

  if (!condition) {
    return res.status(404).json({ message: "מצב רפואי לא נמצא" });
  }

  res.json(condition);
});

// GET /conditions/:id/steps
router.get("/conditions/:id/steps", (req, res) => {
  const condition = data.conditions.find(
    c => c.id === req.params.id
  );

  if (!condition) {
    return res.status(404).json({ message: "מצב רפואי לא נמצא" });
  }

  res.json(condition.steps);
});

// GET /conditions/:id/steps/:step
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

/*
================================================
               IDENTIFICATION
================================================
*/

// GET /identification
router.get("/identification", (req, res) => {
  res.json(data.identification);
});

// GET /identification/:id
router.get("/identification/:id", (req, res) => {
  const item = data.identification.find(
    i => i.id === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item);
});

// GET /identification/:id/key-signs
router.get("/identification/:id/key-signs", (req, res) => {
  const item = data.identification.find(
    i => i.id === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.key_signs || []);
});

// GET /identification/:id/quick-questions
router.get("/identification/:id/quick-questions", (req, res) => {
  const item = data.identification.find(
    i => i.id === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.quick_questions || []);
});

// GET /identification/:id/danger-signs
router.get("/identification/:id/danger-signs", (req, res) => {
  const item = data.identification.find(
    i => i.id === req.params.id
  );

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.danger_signs_call_101 || []);
});

module.exports = router;
