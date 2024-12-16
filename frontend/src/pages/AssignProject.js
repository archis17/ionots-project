import React, { useState } from "react";
import axios from "axios";

const AssignProject = () => {
  const [candidateId, setCandidateId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/projects/assign", {
        candidateId,
        title,
        description,
      });
      setMessage(`Project "${res.data.title}" assigned successfully!`);
      setCandidateId("");
      setTitle("");
      setDescription("");
    } catch (error) {
      setMessage("Error assigning project. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Assign Project</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Candidate ID"
          value={candidateId}
          onChange={(e) => setCandidateId(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Assign Project
        </button>
      </form>
    </div>
  );
};

export default AssignProject;
