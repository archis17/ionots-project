const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: "Assigned" },
  score: { type: Number, default: 0 },
  candidate: { type: mongoose.Schema.Types.ObjectId, ref: "Candidate" },
});

module.exports = mongoose.model("Project", ProjectSchema);
