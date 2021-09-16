import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import workouts from "./workout";


function createWorkout(exercise){
  return (
    <Card
      key={exercise.id}
      src={exercise.src}
      name={exercise.name}
      description={exercise.description}
    / >
  );
}


function App() {
  return (
    <div>
      <Header />
      <div className="flex-container">
      {workouts.map(createWorkout)}
      </div>
    </div>
  );
}

export default App;
