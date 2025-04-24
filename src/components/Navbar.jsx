import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Callista</h1>
      <div className="nav-links">
        <a href="#">Works</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div className="menu-toggle">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <div className="mobile-menu">
          <a href="#">Works</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
        </div>
      )}
    </nav>
  );
};
export default Navbar;