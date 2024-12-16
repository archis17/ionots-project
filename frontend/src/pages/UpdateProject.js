import React, { useState } from "react";
import axios from "axios";

const UpdateProject = () => {
  const [projectId, setProjectId] = useState("");
  const [status, setStatus] = useState("");
  const [score, setScore] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.patch(
        `http://localhost:5000/api/projects/update/${projectId}`,
        { status, score }
      );
      setMessage(`Project "${res.data.title}" updated successfully!`);
      setProjectId("");
      setStatus("");
      setScore("");
    } catch (error) {
      setMessage("Error updating project. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Update Project</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Project ID"
          value={projectId}
          onChange={(e) => setProjectId(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          type="text"
          placeholder="New Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <input
          type="number"
          placeholder="Score"
          value={score}
          onChange={(e) => setScore(e.target.value)}
          className="w-full p-2 border"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Update Project
        </button>
      </form>
    </div>
  );
};

export default UpdateProject;
