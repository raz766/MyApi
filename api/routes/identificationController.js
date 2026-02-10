const express = require("express");
const router = express.Router();
const data = require("../data.json");

/*
==============================
  קבלת כל זיהויי המצבים
==============================
*/
router.get("/identification", (req, res) => {
  res.json(data.identification);
});

/*
==============================
  קבלת זיהוי מצב רפואי לפי id
==============================
*/
router.get("/identification/:id", (req, res) => {
  const item = data.identification.find(i => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item);
});

/*
==============================
  קבלת סימנים עיקריים לפי id
==============================
*/
router.get("/identification/:id/key-signs", (req, res) => {
  const item = data.identification.find(i => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.key_signs);
});

/*
==============================
  קבלת שאלות מהירות לפי id
==============================
*/
router.get("/identification/:id/quick-questions", (req, res) => {
  const item = data.identification.find(i => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.quick_questions);
});

/*
==============================
  קבלת סימני סכנה שמחייבים 101 לפי id
==============================
*/
router.get("/identification/:id/danger-signs", (req, res) => {
  const item = data.identification.find(i => i.id === req.params.id);

  if (!item) {
    return res.status(404).json({ message: "זיהוי מצב רפואי לא נמצא" });
  }

  res.json(item.danger_signs_call_101);
});

module.exports = router;
