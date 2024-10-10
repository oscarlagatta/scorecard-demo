import { useMetrics } from '@bofa/data-access';

interface Metric {
  id: string;
  name: string;
  description: string;
  category: string;
  unit: string | null;
  min_value: number | null;
  max_value: number | null;
  weight: number;
}

export default function SupabaseEndpointExample() {
  const { metrics, isLoading } = useMetrics();

  if (isLoading)
    return <div className="text-center p-4">Loading metrics...</div>;
  // if (error)
  //   return <div className="text-center p-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">
        Metrics (using TanStack Query)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics?.map((metric: Metric) => (
          <div key={metric.id} className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{metric.name}</h2>
            <p className="text-gray-600 mb-2">{metric.description}</p>
            <div className="flex justify-between items-center text-sm">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                {metric.category}
              </span>
              <span className="font-medium">
                Weight: {metric.weight.toFixed(2)}
              </span>
            </div>
            {metric.unit && (
              <p className="text-sm text-gray-500 mt-2">Unit: {metric.unit}</p>
            )}
            {metric.min_value !== null && metric.max_value !== null && (
              <p className="text-sm text-gray-500">
                Range: {metric.min_value} - {metric.max_value}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
