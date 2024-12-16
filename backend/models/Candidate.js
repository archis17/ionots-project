const mongoose = require("mongoose");

const CandidateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: "Project" }],
  totalScore: { type: Number, default: 0 },
});

module.exports = mongoose.model("Candidate", CandidateSchema);
