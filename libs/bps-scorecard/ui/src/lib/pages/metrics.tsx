import { DataTable } from '../components/data-table/data-table';
import { useNavigate } from 'react-router-dom';

import { useMetricsData } from '@bofa/data-services';
import { createColumnsMetric } from '../components/data-table/columns-metric';

export function Metrics() {
  const { metrics } = useMetricsData();

  // const navigate = useNavigate();

  const columns = createColumnsMetric();

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Metrics</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your metrics!
          </p>
        </div>
        <div className="flex items-center space-x-2">{/*<UserNav />*/}</div>
      </div>
      <DataTable data={metrics ?? []} columns={columns} />
    </div>
  );
}
