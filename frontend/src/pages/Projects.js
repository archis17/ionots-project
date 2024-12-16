import React, { useState } from "react";

const Projects = () => {
  const [candidateId, setCandidateId] = useState("");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProjects = async () => {
    if (!candidateId.trim()) {
      setError("Candidate ID cannot be empty.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`http://localhost:5000/api/projects/candidate/${candidateId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json();
      setProjects(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {/* Input Section for Candidate ID */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2" htmlFor="candidateId">
          Enter Candidate ID:
        </label>
        <div className="flex">
          <input
            type="text"
            id="candidateId"
            value={candidateId}
            onChange={(e) => setCandidateId(e.target.value)}
            className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Candidate ID"
          />
          <button
            onClick={fetchProjects}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition"
          >
            Fetch Projects
          </button>
        </div>
      </div>

      {/* Error Message */}
      {error && <div className="text-red-500 mb-4">{error}</div>}

      {/* Loading State */}
      {loading && <div>Loading...</div>}

      {/* Display Projects */}
      {!loading && !error && projects.length === 0 && candidateId && (
        <div>No projects found for this candidate ID.</div>
      )}

      {projects.length > 0 && (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li key={project._id} className="p-4 bg-white shadow rounded-lg">
              <h2 className="text-xl font-semibold">{project.name}</h2>
              <p>Title: {project.title}</p>
              <p>Description: {project.description}</p>
              <p>Status: {project.status}</p>
              <p>Score: {project.score}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Projects;
