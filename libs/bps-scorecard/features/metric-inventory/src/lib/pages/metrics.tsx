import { useMetricsData } from '@bofa/data-services';
import { DataTable, DrawerLayout, useDrawer } from '@bofa/ui';
import { createColumnsMetric } from '../components/columns-metric';
import MetricForm from '../forms/metric-form';

export function Metrics() {
  const { metrics } = useMetricsData();
  const { openDrawer } = useDrawer();

  const handleEdit = (id: number) => {
    console.log('handleEdit', id);
    openDrawer(
      <div className="p-2">
        <MetricForm />
      </div>
    );
  };
  const columns = createColumnsMetric(handleEdit);

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
      <DrawerLayout>
        <DataTable data={metrics ?? []} columns={columns} />
      </DrawerLayout>
    </div>
  );
}
