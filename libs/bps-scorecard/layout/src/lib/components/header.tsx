import { FC } from 'react';
import { MainNav, Search, TeamSwitcher, UserNav } from '@bofa/ui';
//
// export const Headerv1: FC = () => {
//   return (
//     <header className="bg-white shadow-md px-4 py-2 flex justify-between items-center">
//       <Link to="/" className="text-xl font-bold">
//         Bank Scorecard
//       </Link>
//       <nav>
//         <Link to="/dashboard" className="mr-4 text-gray-700 hover:text-blue-500">
//           Dashboard
//         </Link>
//         <Link to="/reports" className="mr-4 text-gray-700 hover:text-blue-500">
//           Reports
//         </Link>
//         <Link to="/user-management" className="text-gray-700 hover:text-blue-500">
//           Users
//         </Link>
//       </nav>
//       {/*<UserMenu />*/}
//     </header>
//   );
// };

export const Header: FC = () => {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        <div className="ml-auto flex items-center space-x-4">
          <Search />
          <UserNav />
        </div>
      </div>
    </div>
  );
};
