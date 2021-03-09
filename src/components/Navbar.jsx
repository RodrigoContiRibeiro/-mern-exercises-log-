import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          Monitorador de Exercícios
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Exercícios
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Criar Exercício
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/user" className="nav-link">
                Criar Usuário
              </Link>
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
