import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import Navbar from "./components/Navbar.jsx";
import ExerciseList from "./components/ExerciseList.jsx";
import CreateExercise from "./components/CreateExercise.jsx";
import CreateUser from "./components/CreateUser.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="container-fluid">
        <Route path="/" exact component={ExerciseList} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
