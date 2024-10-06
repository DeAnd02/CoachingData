import React, { useState } from 'react';
import './LoginPage.css';  // Assicurati che il percorso sia corretto

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempted with:', { email, password });
    // Qui dovresti implementare la logica di autenticazione
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="card-header">
          <h2 className="card-title">Accedi</h2>
          <p className="card-description">Inserisci le tue credenziali per accedere</p>
        </div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                className="form-input"
                placeholder="nome@esempio.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                id="password"
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </form>
        </div>
        <div className="card-footer">
          <button className="btn btn-outline">Annulla</button>
          <button className="btn btn-primary" onClick={handleSubmit}>Accedi</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;