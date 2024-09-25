import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white shadow-inner px-4 py-2 text-center text-sm text-gray-600">
      © {new Date().getFullYear()} Moshe Bank Scorecard. All rights reserved.
    </footer>
  );
};
