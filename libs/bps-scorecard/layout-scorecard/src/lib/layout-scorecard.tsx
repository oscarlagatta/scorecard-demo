import { Tabs, TabsList, TabsTrigger } from '@bofa/shadcn-ui-components';
import { Outlet, useNavigate } from 'react-router-dom';

export function LayoutScorecard() {
  // const location = useLocation();
  const navigate = useNavigate();
  // Determine the current tab based on the location
  // const currentTab = location.pathname.split('/').pop();
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Scorecard</h2>
        <div className="flex items-center space-x-2">
          {/*<CalendarDateRangePicker />*/}
          {/*<Button>Download</Button>*/}
        </div>
      </div>

      <Tabs defaultValue="dashboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard" onClick={() => navigate('dashboard')}>
            Dashboard
          </TabsTrigger>
          {/*<NavLink*/}
          {/*  to="dashboard"*/}
          {/*  className={({ isActive }) =>*/}
          {/*    [*/}
          {/*      'px-4 py-2 rounded',*/}
          {/*      isActive*/}
          {/*        ? 'bg-gray-900 text-white'*/}
          {/*        : 'bg-gray-300 text-gray-700',*/}
          {/*    ].join(' ')*/}
          {/*  }*/}
          {/*>*/}
          {/*  <button className="TabsTrigger" value="dashboard">*/}
          {/*    Dashboard*/}
          {/*  </button>*/}
          {/*</NavLink>*/}
          <TabsTrigger value="inventory" onClick={() => navigate('inventory')}>
            Inventory
          </TabsTrigger>
          {/*<NavLink*/}
          {/*  to="inventory"*/}
          {/*  className={({ isActive }) =>*/}
          {/*    [*/}
          {/*      'px-4 py-2 rounded',*/}
          {/*      isActive*/}
          {/*        ? 'bg-gray-900 text-white'*/}
          {/*        : 'bg-gray-300 text-gray-700',*/}
          {/*    ].join(' ')*/}
          {/*  }*/}
          {/*>*/}
          {/*  <button className="TabsTrigger" value="inventory">*/}
          {/*    Metric Inventory*/}
          {/*  </button>*/}
          {/*</NavLink>*/}
        </TabsList>
        {/*<TabsList>*/}
        {/*  <TabsTrigger value="dashboard">Dashboard</TabsTrigger>*/}
        {/*  <TabsTrigger value="inventory">Metric Inventory</TabsTrigger>*/}
        {/*  <TabsTrigger value="reports" disabled>*/}
        {/*    Reports*/}
        {/*  </TabsTrigger>*/}
        {/*  <TabsTrigger value="notifications" disabled>*/}
        {/*    Notifications*/}
        {/*  </TabsTrigger>*/}
        {/*</TabsList>*/}
        {/*<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">*/}
        <Outlet />
        {/*</div>*/}
      </Tabs>
    </div>
  );
}

export default LayoutScorecard;
