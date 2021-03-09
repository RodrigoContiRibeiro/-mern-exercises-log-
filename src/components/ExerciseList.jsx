import React, { useEffect, useState } from "react";
import axios from "axios";

const Exercise = (props) => (
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0, 10)}</td>
    <td>
      <button
        onClick={() => {
          props.deleteExercise(props.exercise._id);
        }}
      >
        Deletar
      </button>
    </td>
  </tr>
);

function ExerciseList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => {
        setExercises(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteExercise = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    setExercises(exercises.filter((el) => el._id !== id));
  };

  const exerciseList = () => {
    return exercises.map((currentExercise) => {
      return (
        <Exercise
          exercise={currentExercise}
          deleteExercise={deleteExercise}
          key={currentExercise._id}
        />
      );
    });
  };

  return (
    <div>
      <h3>Exercícios Registrados</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Usuário</th>
            <th>Descrição</th>
            <th>Duração</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>{exerciseList()}</tbody>
      </table>
    </div>
  );
}

export default ExerciseList;
