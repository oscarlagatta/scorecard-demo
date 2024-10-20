import { Card, CardContent } from '@bofa/shadcn-ui-components';
import { Metrics } from './pages/metrics';


export function MetricInventory() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
      <Card className="col-span-7">
        <CardContent className="pl-2">
          <Metrics />
        </CardContent>
      </Card>
    </div>
  );
}

export default MetricInventory;
