import React from "react";

const Button = ({
  onClick,
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  disabled = false,
  className = "", // Prop pour ajouter des classes personnalisées
  type = "button", // Prop pour spécifier le type de bouton (button, submit, link)
  href = null, // Prop pour gérer les liens si type === "link"
}) => {
  // Styles par défaut pour les variants
  const styles = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    danger: "bg-red-500 text-white hover:bg-red-700",
  };

  // Styles par défaut pour les tailles
  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  // Définir la structure du composant en fonction du type
  if (type === "link" && href) {
    return (
      <a
        href={href}
        className={`inline-block rounded ${styles[variant]} ${sizes[size]} ${
          fullWidth ? "w-full" : ""
        } ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type === "submit" ? "submit" : "button"} // Type button ou submit
      className={`rounded ${styles[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;