import { useQuery } from '@tanstack/react-query';
import { supabaseInstance } from '../../index';

interface Metric {
  id: string
  name: string
  description: string
  category: string
  unit: string | null
  min_value: number | null
  max_value: number | null
  weight: number
}

const fetchMetric = async (): Promise<Metric[]> => {
  const { data } = await supabaseInstance.get('/metric_inventory', {
    params: {
      select: '*',
      order: 'name.asc',
    },
  });

  return data;
};

export function useMetrics() {
  const { data: metrics, isLoading, error } = useQuery<Metric[], Error>({
    queryKey: ['metrics'],
    queryFn: fetchMetric,
  });

  return {metrics, isLoading, error};
}
