// libs/layout/src/components/Layout.tsx
import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer, Header, Sidebar } from './index';
import { SidebarProvider } from '../context/sidebar-context';

export const Layout: FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <SidebarProvider>
          <Sidebar />
        </SidebarProvider>
        <main className="flex-1 p-4 bg-gray-50">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
