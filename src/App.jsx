import React from "react";
import "./App.css";
import Card from "./components/Card";



function App() {
  
  return (
    <main className={`outer-container`}>
      <div className="inner-container">
        <Card/>
      </div>
    </main>
  );
}

export default App;