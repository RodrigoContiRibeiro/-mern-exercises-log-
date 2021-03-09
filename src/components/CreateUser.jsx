import React, { useState } from "react";
import axios from "axios";

function CreateUser() {
  const [username, setUsername] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
    };
    console.log(user);
  
    axios
      .post("http://localhost:5000/users/add", user)
      .then((res) => console.log(res.data))
      .catch((err) => {
        console.log(err);
        }
      );

    setUsername("");
  };

  return (
    <div>
      <h3>Criar novo Usuário: </h3>
      <form onSubmit={onSubmit}>
        <div className="form-floating mb-3">
          <input
            type="text"
            required
            className="form-control"
            id="userInput"
            value={username}
            onChange={onChangeUsername}
          />
          <label htmlFor="userInput">Usuário: </label>
        </div>
        <div className="mb-3">
          <input
            type="submit"
            value="Criar Usuário"
            className="mb-3 btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}

export default CreateUser;
