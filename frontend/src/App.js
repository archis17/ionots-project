import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateCandidate from "./pages/CreateCandidate";
import AssignProject from "./pages/AssignProject";
import UpdateProject from "./pages/UpdateProject";
import Projects from "./pages/Projects";
import Leaderboard from "./pages/Leaderboard";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Home Route */}
        <Route path="/" element={<Home />} />

        {/* Create Candidate Route */}
        <Route path="/create-candidate" element={<CreateCandidate />} />

        {/* Assign Project Route */}
        <Route path="/assign-project" element={<AssignProject />} />

        {/* Update Project Status and Score Route */}
        <Route path="/update-project" element={<UpdateProject />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

        {/* View All Projects Route */}
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
};

export default App;
