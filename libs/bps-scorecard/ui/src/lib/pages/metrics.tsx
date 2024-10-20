import { DataTable } from '../components/data-table/data-table';

import { useMetricsData } from '@bofa/data-services';
import { createColumnsMetric } from '../components/data-table/columns-metric';
import { useDrawer } from '../contexts';
import { Button } from '@bofa/shadcn-ui-components';
import { DrawerLayout } from '../components';

export function Metrics() {
  const { metrics } = useMetricsData();
  const { openDrawer } = useDrawer();

  const handleEdit = (id: number) => {
    console.log('handleEdit', id);
    // navigate(`edit/${id}`);
    openDrawer(
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Edit Metric {id}</h2>
        <form>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 mb-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 mb-2 border rounded"
          />
          <Button type="submit" className="w-full">
            Update
          </Button>
        </form>
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
