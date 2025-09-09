import React from "react";
import FilterBar from "../components/FilterBar";

const Home = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">📋 Todo App</h1>
      <FilterBar />
    </div>
  );
};

export default Home;
