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
          <TabsTrigger value="inventory" onClick={() => navigate('inventory')}>
            Metric Inventory
          </TabsTrigger>
          <TabsTrigger
            value="inventory"
            onClick={() => navigate('metric-management')}
          >
            Metric Management
          </TabsTrigger>
        </TabsList>

        <Outlet />
      </Tabs>
    </div>
  );
}

export default LayoutScorecard;
