import React from "react";

const ChurchTools: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        &copy; 2025-{currentYear} Enon Baptist Church
      </footer>
  );
};

export default ChurchTools;
