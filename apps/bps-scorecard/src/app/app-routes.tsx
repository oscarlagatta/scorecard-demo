import React, { lazy, Suspense } from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from 'react-router-dom';
import { Layout } from '@bofa/layout';

// Lazy loaded components
const LayoutScorecard = lazy(() =>
  import('@bofa/layout-scorecard').then((module) => ({
    default: module.LayoutScorecard,
  }))
);
const Dashboard = lazy(() =>
  import('@bofa/dashboard').then((module) => ({ default: module.Dashboard }))
);

const MetricInventory = lazy(() =>
  import('@bofa/metric-inventory').then((module) => ({
    default: module.MetricInventory,
  }))
);

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route
        path="scorecard"
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <LayoutScorecard />
          </Suspense>
        }
      >
        <Route
          path="dashboard"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Dashboard />
            </Suspense>
          }
        />
        <Route path="inventory" element={
          <Suspense fallback={<div>Loading...</div>}>
            <MetricInventory />
          </Suspense>
        } />
        {/* Optionally, you can redirect to a default tab */}
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
      {/* Optionally, you can redirect to the scorecard */}
      <Route index element={<Navigate to="/scorecard/dashboard" replace />} />
    </Route>
  )
);

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
