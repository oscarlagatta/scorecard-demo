import { useQuery } from '@tanstack/react-query';

import { Metric } from '../models/metric';
import { supabaseInstance } from '@bofa/utilities';
import { getMetrics, MetricDto } from '@bofa/api-services';

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


export function useMetricsData(): {
  metrics: MetricDto[] | undefined,
  isLoading: boolean,
  error: Error | null,
  // addMetric: ReturnType<typeof useMutation>,
  // updateMetricMutation: ReturnType<typeof useMutation>,
  // deleteMetricMutation: ReturnType<typeof useMutation>
} {
  // const queryClient = useQueryClient();

  const { data: metrics, isLoading, error } = useQuery<MetricDto[], Error>({
    queryKey: ['metricsData'],
    queryFn: async () => {
      const response = await getMetrics();
      if (response.data) {
        return response.data as MetricDto[];
      } else {
        throw new Error('Failed to fetch data');
      }
    },
  });

  // const addMetric = useMutation({
  //   mutationFn: postMetrics,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['metricsData']);
  //   },
  // });
  //
  // const updateMetricMutation = useMutation({
  //   mutationFn: updateMetric,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['metricsData']);
  //   },
  // });
  //
  // const deleteMetricMutation = useMutation({
  //   mutationFn: deleteMetric,
  //   onSuccess: () => {
  //     queryClient.invalidateQueries(['metricsData']);
  //   },
  // });

  return { metrics, isLoading, error};
}
