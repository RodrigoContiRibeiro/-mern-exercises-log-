import React, { useState, useEffect } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateExercise() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/users/").then((res) => {
      if (res.data.length > 0) {
        setUsers(res.data.map((user) => user.username));
        setUsername(res.data[0].username)
      }
    });
  }, []);

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const onChangeDuration = (e) => {
    setDuration(e.target.value);
  };

  const onChangeDate = (date) => {
    setDate(date);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const exercise = {
      username,
      description,
      duration,
      date,
    };

    axios
      .post("http://localhost:5000/exercises/add", exercise)
      .then((res) => console.log(res.data));


  };

  return (
    <div>
      <h3>Crie um Novo Exercício!</h3>
      <form onSubmit={onSubmit}>
        <div className="form-floating mb-3">
          <select
            id="userInput"
            required
            className="form-select"
            value={username}
            onChange={onChangeUsername}
          >
            {users.map((user) => {
              return (
                <option key={user} value={user}>
                  {user}
                </option>
              );
            })}
          </select>
          <label className="form-label" htmlFor="userInput">
            Usuário:
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            id="descriptionInput"
            type="text"
            className="form-control"
            value={description}
            onChange={onChangeDescription}
          />
          <label className="form-label" htmlFor="descriptionInput">
            Descrição:
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="durationInput"
            value={duration}
            onChange={onChangeDuration}
          />
          <label htmlFor="durationInput" className="form-label">
            Duração em minutos:
          </label>
        </div>
        <div className="form-floating mb-3">
          <div>
            <DatePicker selected={date} onChange={onChangeDate} />
          </div>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Criar Exercício"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateExercise;
