import React, { useState } from "react";
import axios from "axios";
import GoalSetup from "./GoalSetup";

const Dashboard = () => {
  const [roadmap, setRoadmap] = useState([]);

  const setGoal = async (goalData) => {
    const token = localStorage.getItem("token");
    const { data } = await axios.post(
      "http://localhost:5000/api/roadmap/setup",
      { ...goalData, token }
    );
    setRoadmap(data.roadmap);
  };

  return (
    <div>
      <h2>Your Fitness Dashboard</h2>
      <GoalSetup onSubmit={setGoal} />
      <h3>Your Roadmap</h3>
      <ul>
        {roadmap.map((r, i) => (
          <li key={i}>Week {r.week}: {r.activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
