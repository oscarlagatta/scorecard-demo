import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '@bofa/shadcn-ui-components';
import { ReactNode } from 'react';
import { useDrawer } from '../contexts';

interface DrawerLayoutProps {
  children: ReactNode
}

export function DrawerLayout({ children }: DrawerLayoutProps) {
  const { isOpen, closeDrawer, drawerContent, drawerTitle, drawerDescription } = useDrawer()

  return (
    <div className="flex h-screen">
      <main className="flex-1 overflow-y-auto p-4">
        {children}
      </main>
      <Sheet open={isOpen} onOpenChange={closeDrawer}>
        <SheetContent side="right" className="w-[400px] sm:w-[540px]">
          <SheetHeader>
            <SheetTitle>{drawerTitle || 'Metric Content'}</SheetTitle>
            <SheetDescription>{drawerDescription || 'Additional information about this drawer.'}</SheetDescription>
          </SheetHeader>
          {drawerContent}
        </SheetContent>
      </Sheet>
    </div>
  )
}
