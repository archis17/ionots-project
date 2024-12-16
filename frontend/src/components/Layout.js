import React from "react";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-2xl font-bold">Ionots Ed-Tech</h1>

          {/* Horizontal Navbar */}
          <nav className="flex space-x-6">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
            <Link
              to="/create-candidate"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Create Candidate
            </Link>
            <Link
              to="/assign-project"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Assign Project
            </Link>
            <Link
              to="/update-project"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Update Project
            </Link>
            <Link
              to="/leaderboard"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Leaderboard
            </Link>
            <Link
              to="/projects"
              className="text-white hover:text-gray-300 transition duration-200"
            >
              Projects
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto py-8 px-4">{children}</main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white text-center py-4">
        <p>&copy; 2024 Ionots. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
