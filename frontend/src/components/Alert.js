import React from 'react';

const Alert = ({ children, variant = 'info' }) => {
  const baseStyle = "px-4 py-3 rounded relative";
  const variantStyles = {
    info: "bg-blue-100 border border-blue-400 text-blue-700",
    success: "bg-green-100 border border-green-400 text-green-700",
    warning: "bg-yellow-100 border border-yellow-400 text-yellow-700",
    error: "bg-red-100 border border-red-400 text-red-700"
  };

  return (
    <div className={`${baseStyle} ${variantStyles[variant]}`} role="alert">
      {children}
    </div>
  );
};

export default Alert;