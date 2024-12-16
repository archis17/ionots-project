const express = require("express");
const Candidate = require("../models/Candidate");
const router = express.Router();

// Add a candidate
router.post("/", async (req, res) => {
  const { name, email } = req.body;
  try {
    const candidate = new Candidate({ name, email });
    await candidate.save();
    res.status(201).json(candidate);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get leaderboard
router.get("/leaderboard", async (req, res) => {
  try {
    const candidates = await Candidate.find()
      .sort({ totalScore: -1 })
      .select("name totalScore");
    res.status(200).json(candidates);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
