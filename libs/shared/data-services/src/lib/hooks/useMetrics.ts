import { useQuery } from '@tanstack/react-query';

import { Metric } from '../models/metric';
import { supabaseInstance } from '@bofa/utilities';

const fetchMetric: () => Promise<Metric[]> = async (): Promise<Metric[]> => {
  const { data } = await supabaseInstance.get('/metric_inventory', {
    params: {
      select: '*',
      order: 'name.asc',
    },
  });

  return data;
};

export function useMetrics() {
  const {
    data: metrics,
    isLoading,
    error,
  } = useQuery<Metric[], Error>({
    queryKey: ['metrics'],
    queryFn: fetchMetric,
  });

  return { metrics, isLoading, error };
}
