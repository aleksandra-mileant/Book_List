import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';

export const NavBar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-around">
        <Link className="navbar-brand" to="/">Home</Link>
        <Link className="navbar-brand" to="/books">My Books List</Link>
        <Link className="navbar-brand" to="/search">Find Book</Link>
        <Link className="btn btn-outline-success" to="/add">Add</Link>
      </div>
    </nav>
  );
};
