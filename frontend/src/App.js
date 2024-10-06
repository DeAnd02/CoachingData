import React, { useState } from 'react';
import { Menu, Mail, Lock } from 'lucide-react';
import './App.css';

const CoachingDataApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="app-container">
      {/* PNG Background Image */}
      <div className="background-image"></div>

      {/* Content */}
      <div className="content-container">
        {/* Header */}
        <header>
          <button onClick={toggleMenu} className="menu-button">
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content */}
        <main>
          <h1>CoachingData</h1>
          <p className="subtitle">The app for your athlete stats</p>

          <h2>Login</h2>

          <div className="login-container">
            <div className="input-container">
              <Mail className="input-icon" size={20} />
              <input type="email" placeholder="Indirizzo e-mail" />
            </div>
            <div className="input-container">
              <Lock className="input-icon" size={20} />
              <input type="password" placeholder="Password" />
            </div>
            <button className="login-button">Login</button>
            <a href="#" className="register-link">or register here</a>
          </div>
        </main>

        {/* Footer */}
        <footer>
          <a href="#" className="terms-link">Terms and condition</a>
        </footer>
      </div>

      {/* Animated Sidebar Menu */}
      <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          <button onClick={toggleMenu} className="close-menu">
            <Menu size={24} />
          </button>
          <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div className="overlay" onClick={toggleMenu}></div>
      )}
    </div>
  );
};

export default CoachingDataApp;