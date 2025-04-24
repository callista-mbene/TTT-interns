import React from 'react';
import './Footer.css';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="#"><Facebook size={20} /></a>
        <a href="#"><Twitter size={20} /></a>
        <a href="#"><Instagram size={20} /></a>
        <a href="#"><Github size={20} /></a>
      </div>
      <p className="footer-text">© 2025 Callista. All rights reserved.</p>
    </footer>
  );
};
export default Footer;