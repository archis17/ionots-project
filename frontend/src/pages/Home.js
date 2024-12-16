import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="text-center py-20">
        <h1 className="text-5xl font-bold text-blue-600">Welcome to Ionots</h1>
        <p className="text-gray-600 text-lg mt-4">
          Real-time, project-based learning for Data Science and AI.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
          Get Started
        </button>
      </div>
    </Layout>
  );
};

export default Home;
