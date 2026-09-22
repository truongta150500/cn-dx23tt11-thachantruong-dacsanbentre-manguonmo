import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '1.5rem 2rem', background: 'var(--bg-card)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--glass-border)', position: 'sticky', top: 0, zIndex: 100 }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-main)' }}>Company<span style={{ color: 'var(--accent-color)' }}>Profile</span></Link>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/products">Products</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
