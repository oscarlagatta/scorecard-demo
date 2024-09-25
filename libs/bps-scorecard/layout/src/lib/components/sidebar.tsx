// libs/layout/src/components/Sidebar.tsx

import { Link } from 'react-router-dom';
import { useSidebar } from '../context/sidebar-context';
import { FC } from 'react';

export const Sidebar: FC = () => {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <>
      {/* Toggle button for mobile */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >

        {/* Icon for toggle, e.g., hamburger */}☰
      </button>
      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block w-64 bg-gray-100 h-full p-4 transition-all duration-300`}
      >
        <ul>
          <li>
            <Link
              to="/dashboard"
              className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/reports"
              className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded"
            >
              Reports
            </Link>
          </li>
          <li>
            <Link
              to="/user-management"
              className="block py-2 px-3 text-gray-700 hover:bg-gray-200 rounded"
            >
              User Management
            </Link>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </aside>
    </>
  );
};
