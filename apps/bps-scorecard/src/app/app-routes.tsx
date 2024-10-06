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

const TaskDetails = lazy(() =>
  import('@bofa/ui').then((module) => ({
    default: module.TaskDetails,
  }))
);

const Additional = lazy(() =>
  import('@bofa/metric-inventory').then((module) => ({
    default: module.Additional,
  }))
);

const Deliverables = lazy(() =>
  import('@bofa/metric-inventory').then((module) => ({
    default: module.Deliverables,
  }))
);

const Issues = lazy(() =>
  import('@bofa/metric-inventory').then((module) => ({
    default: module.Issues,
  }))
);

const Overview = lazy(() =>
  import('@bofa/metric-inventory').then((module) => ({
    default: module.Overview,
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
        <Route path="inventory">
          <Route
            index
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MetricInventory />
              </Suspense>
            }
          />
          <Route
            path="create"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                {/*<CreateInventoryItem />*/}
              </Suspense>
            }
          />
          <Route
            path="edit/:id"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <TaskDetails />
              </Suspense>
            }
          >
            <Route
              path="overview"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Overview />
                </Suspense>
              }
            />
            <Route
              path="deliverables"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Deliverables />
                </Suspense>
              }
            />
            <Route
              path="issues"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Issues />
                </Suspense>
              }
            />
            <Route
              path="additional"
              element={
                <Suspense fallback={<div>Loading...</div>}>
                  <Additional />
                </Suspense>
              }
            />
            <Route index element={<Navigate to="overview" replace />} />
          </Route>
        </Route>
        <Route index element={<Navigate to="dashboard" replace />} />
      </Route>
      <Route index element={<Navigate to="/scorecard/dashboard" replace />} />
    </Route>
  )
);
// export const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route
//         path="scorecard"
//         element={
//           <Suspense fallback={<div>Loading...</div>}>
//             <LayoutScorecard />
//           </Suspense>
//         }
//       >
//         <Route
//           path="dashboard"
//           element={
//             <Suspense fallback={<div>Loading...</div>}>
//               <Dashboard />
//             </Suspense>
//           }
//         />
//         <Route path="inventory">
//           <Route
//             index
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 <MetricInventory />
//               </Suspense>
//             }
//           />
//           <Route
//             path="create"
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 {/*<CreateInventoryItem />*/}
//               </Suspense>
//             }
//           />
//           <Route
//             path="edit/:id"
//             element={
//               <Suspense fallback={<div>Loading...</div>}>
//                 <TaskDetails />
//               </Suspense>
//             }
//           />
//         </Route>
//         <Route index element={<Navigate to="dashboard" replace />} />
//       </Route>
//       <Route index element={<Navigate to="/scorecard/dashboard" replace />} />
//     </Route>
//   )
// );

export const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
