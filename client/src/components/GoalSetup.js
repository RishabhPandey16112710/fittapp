import React, { useState } from "react";
export default function GoalSetup({ onSubmit }) {
  const [goal, setGoal] = useState("weight-loss");
  const [timeline, setTimeline] = useState(8);
  const [experience, setExperience] = useState("beginner");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit({ goal, timeline, experience });
      }}
    >
      <label>
        Goal:
        <select value={goal} onChange={e => setGoal(e.target.value)}>
          <option value="weight-loss">Weight Loss</option>
          <option value="muscle-gain">Muscle Gain</option>
          <option value="endurance">Endurance</option>
        </select>
      </label>
      <label>
        Timeline (weeks):
        <input type="number" value={timeline} onChange={e => setTimeline(Number(e.target.value))} />
      </label>
      <label>
        Experience:
        <select value={experience} onChange={e => setExperience(e.target.value)}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
        </select>
      </label>
      <button type="submit">Generate Roadmap</button>
    </form>
  );
}
