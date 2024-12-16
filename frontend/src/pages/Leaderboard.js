import React, { useEffect, useState } from "react";
import axios from "axios";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/candidates/leaderboard").then((res) => {
      setLeaderboard(res.data);
    });
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Leaderboard</h1>
      {leaderboard.map((candidate, index) => (
        <div key={candidate._id} className="border p-4 mb-4">
          <p>
            {index + 1}. {candidate.name} - {candidate.totalScore} points
          </p>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
