import React, { useState } from 'react';
import { Menu, Mail, Lock } from 'lucide-react';

const CoachingDataApp = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,0 Q50,100 100,0 L100,100 L0,100 Z" fill="#f8d7da" />
          <path d="M0,50 Q50,100 100,50 L100,100 L0,100 Z" fill="#dc3545" />
        </svg>
      </div>

      {/* PNG Background Image */}
      <div
        className="absolute inset-0 z-10 bg-no-repeat bg-center opacity-50"
        style={{
          backgroundImage: "url(img/pista.png)",
          backgroundSize: '50%', // Adjust size here
          backgroundPosition: 'center center', // Adjust position here
        }}
      ></div>

      {/* Content */}
      <div className="relative z-20 flex flex-col h-full">
        {/* Header */}
        <header className="p-4">
          <button onClick={toggleMenu} className="text-gray-700 z-30">
            <Menu size={24} />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <h1 className="text-4xl font-bold mb-2">CoachingData</h1>
          <p className="text-gray-600 mb-8">The app for your athlete stats</p>

          <h2 className="text-3xl font-bold mb-6">Login</h2>

          <div className="w-full max-w-xs">
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Indirizzo e-mail"
                className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-200 text-gray-700"
              />
            </div>
            <div className="mb-4 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 pl-10 pr-3 rounded-lg bg-gray-200 text-gray-700"
              />
            </div>
            <button className="w-full bg-blue-500 text-white py-2 rounded-lg font-bold">
              Login
            </button>
            <a href="#" className="block text-center mt-2 text-blue-500 text-sm">
              or register here
            </a>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 text-center">
          <a href="#" className="text-sm text-gray-600">Terms and condition</a>
        </footer>
      </div>

      {/* Animated Sidebar Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* ... (menu content remains the same) ... */}
      </div>

      {/* Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleMenu}
        ></div>
      )}
    </div>
  );
};

export default CoachingDataApp;