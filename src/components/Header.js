import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Mi E-commerce</div>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/products">Obras</Link>
      </nav>
      <Link to="/login" className="login-button">Ingresar</Link>
    </header>
  );
}

export default Header;