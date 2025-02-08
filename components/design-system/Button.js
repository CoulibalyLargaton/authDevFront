import React from "react";

const Button = ({ 
  onClick, 
  children, 
  variant = "primary", 
  size = "medium", 
  fullWidth = false, 
  disabled = false 
}) => {
  
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`rounded ${styles[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
