import React from 'react';
import { CogIcon } from '@heroicons/react/24/solid';

export const Footer: React.FC = () => {
  return (
    <footer className="text-black">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Branding and Year */}
          <div className="text-center md:text-left mb-2 md:mb-0">
            <p className="text-lg font-semibold">
              © {new Date().getFullYear()} Bank Scorecard. All rights reserved.
            </p>
            <p className="text-sm text-gray-400">
              Empowering Financial Solutions
            </p>
          </div>

          {/* Right: Settings Icon */}
          <div className="flex items-center space-x-6">
            <a href="/settings" className="hover:text-white transition">
              <CogIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-2 text-center text-sm text-gray-500">
          <a href="/privacy-policy" className="hover:text-white mx-2">
            Privacy Policy
          </a>
          <a href="/terms-of-service" className="hover:text-white mx-2">
            Terms of Service
          </a>
          <a href="/contact" className="hover:text-white mx-2">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};
