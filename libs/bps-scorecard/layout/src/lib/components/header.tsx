
import { Link } from 'react-router-dom';
import { FC } from 'react';
// import { UserMenu } from '@your-monorepo/ui'; // Assuming UserMenu is in ui library

export const Header: FC = () => {
  return (
    <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
        Bank Scorecard
      </Link>
      <nav>
        <Link to="/dashboard" className="mr-4 text-gray-700 hover:text-blue-500">
          Dashboard
        </Link>
        <Link to="/reports" className="mr-4 text-gray-700 hover:text-blue-500">
          Reports
        </Link>
        <Link to="/user-management" className="text-gray-700 hover:text-blue-500">
          Users
        </Link>
      </nav>
      {/*<UserMenu />*/}
    </header>
  );
};
