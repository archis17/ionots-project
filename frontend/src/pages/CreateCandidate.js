import React, { useState } from "react";
import axios from "axios";

const CreateCandidate = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/candidates", {
        name,
        email,
      });
      setMessage(`Candidate ${res.data.name} created successfully!`);
      setName("");
      setEmail("");
    } catch (error) {
      setMessage("Error creating candidate. Please try again.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create New Candidate</h1>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-lg">
  <div>
    <label htmlFor="name" className="block text-gray-700 font-bold">
      Candidate Name
    </label>
    <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter candidate name"
    />
  </div>
  <div>
    <label htmlFor="email" className="block text-gray-700 font-bold">
      Email
    </label>
    <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter candidate email"
    />
  </div>
  <button
    type="submit"
    className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
  >
    Submit
  </button>
</form>

    </div>
  );
};

export default CreateCandidate;
