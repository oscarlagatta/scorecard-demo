import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@bofa/shadcn-ui-components';
import { ReactNode } from 'react';
import { useDrawer } from '../contexts';
import './dreawer-layout.css';

interface DrawerLayoutProps {
  children: ReactNode;
}

export function DrawerLayout({ children }: DrawerLayoutProps) {
  const { isOpen, closeDrawer, drawerContent, drawerTitle, drawerDescription } =
    useDrawer();

  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto p-4">{children}</main>
      <Sheet open={isOpen} onOpenChange={closeDrawer}>
        <SheetContent side="right" className="w-full custom-drawer-width overflow-y-auto">
          <SheetHeader className="sticky top-0 bg-white">
            <SheetTitle>{drawerTitle || 'Metric Details'}</SheetTitle>
            <SheetDescription>
              {drawerDescription || 'Update the metric content here.'}
            </SheetDescription>
          </SheetHeader>
          {drawerContent}
        </SheetContent>
      </Sheet>
    </div>
  );
}
