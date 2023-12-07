const express = require('express');
const router = express.Router();
const data = require('../db.json').students;

router.get('/', (req, res) => {
  res.send(data)
});

router.get('/min-homework-scores', (req, res) => {
  let minValue = 100;
  let studentName = "";

  data.forEach(student => {
    const currentValue = student.scores.find(s => s.type === "homework").score;

    if (currentValue < minValue) {
      minValue = currentValue;
      studentName = student.name;
    }
  });

  res.send(`${studentName} has the worst score for homework - ${minValue}`);
});

module.exports = router;