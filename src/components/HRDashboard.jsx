import React from "react";

export default function HRDashboard() {
  const mockCandidates = [
    { name: "Aditi Sharma", fitScore: 85, communication: 78, emotion: 80 },
    { name: "Rahul Mehta", fitScore: 72, communication: 65, emotion: 70 },
  ];

  return (
    <div className="dashboard">
      <h2>HR Dashboard</h2>
      <ul>
        {mockCandidates.map((c, idx) => (
          <li key={idx}>
            <strong>{c.name}</strong> - Fit Score: {c.fitScore}% | Communication: {c.communication}% | Emotion: {c.emotion}%
          </li>
        ))}
      </ul>
    </div>
  );
}