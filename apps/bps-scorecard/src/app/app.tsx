import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from 'react-router-dom';
import { router } from './app-routes';
import { Toaster } from '@bofa/shadcn-ui-components';
import { DrawerProvider } from '@bofa/ui';

const queryClient = new QueryClient();

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <DrawerProvider>
        <div className="flex flex-col items-center justify-center py-2">
          <RouterProvider router={router} />
        </div>
        <Toaster />
      </DrawerProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
