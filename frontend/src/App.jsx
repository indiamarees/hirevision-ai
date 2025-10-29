import React from "react";
import CandidateDashboard from "./components/CandidateDashboard.jsx";
import HRDashboard from "./components/HRDashboard.jsx";

export default function App() {
  const [view, setView] = React.useState("candidate");

  return (
    <div className="app">
      <header>
        <h1>HireVision AI</h1>
        <button onClick={() => setView("candidate")}>Candidate View</button>
        <button onClick={() => setView("hr")}>HR View</button>
      </header>
      {view === "candidate" ? <CandidateDashboard /> : <HRDashboard />}
    </div>
  );
}