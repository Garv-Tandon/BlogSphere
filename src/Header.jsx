import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const handleAboutClick = () => {
    alert(
      "Welcome to BlogSphere – your creative space to write, share, and connect.\n\nWhether you're a seasoned writer or just starting out, BlogSphere empowers you to express your thoughts freely and reach readers around the world.\n\nStart your journey today – because every voice matters!"
    );
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">BlogSphere</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blogs">Blogs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleAboutClick}>About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
