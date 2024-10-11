import React, { useState } from 'react';
import axios from 'axios';
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Button,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  toast,
} from '@bofa/shadcn-ui-components';

// Define types for our data structures
interface Metric {
  id: string;
  name: string;
  description: string;
  min_value: number | null;
  max_value: number | null;
  weight: number;
}

// Define types for form data
type MetricFormData = Omit<Metric, 'id'>;

// Supabase configuration
const supabaseUrl = 'https://ymvbjlrrwdgkfllcezzw.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InltdmJqbHJyd2Rna2ZsbGNlenp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg1ODg1MzYsImV4cCI6MjA0NDE2NDUzNn0.8WyLEQvSby5XL2oohBJGf1QGHggTbP5bS1MSAroHYpw';

// Create axios instance
const supabase = axios.create({
  baseURL: `${supabaseUrl}/rest/v1`,
  headers: {
    apikey: supabaseKey,
    Authorization: `Bearer ${supabaseKey}`,
    'Content-Type': 'application/json',
  },
});

// Create a client
const queryClient = new QueryClient();

// Fetch metrics function
const fetchMetrics = async (): Promise<Metric[]> => {
  const { data } = await supabase.get('/metric_inventory');
  return data;
};

// Add metric function
const addMetric = async (newMetric: MetricFormData): Promise<Metric> => {
  const { data } = await supabase.post('/metric_inventory', newMetric);
  return data[0];
};

// Update metric function
const updateMetric = async (updatedMetric: Metric): Promise<Metric> => {
  const { data } = await supabase.patch(
    `/metric_inventory?id=eq.${updatedMetric.id}`,
    updatedMetric
  );
  return data[0];
};

// Delete metric function
const deleteMetric = async (id: string): Promise<void> => {
  await supabase.delete(`/metric_inventory?id=eq.${id}`);
};

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  description: z.string().nonempty('Description is required.'),
  min_value: z.number().nullable(),
  max_value: z.number().nullable(),
  weight: z.number().min(0).max(1),
});

function MetricForm({
                      onSubmit,
                      initialData,
                    }: {
  onSubmit: SubmitHandler<MetricFormData>;
  initialData?: MetricFormData;
}) {
  const form = useForm<MetricFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: '',
      description: '',
      min_value: null,
      max_value: null,
      weight: 0,
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Metric name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Metric description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="min_value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Min Value</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Minimum value"
                  {...field}
                  value={field.value !== null ? field.value : ''}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="max_value"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Max Value</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Maximum value"
                  {...field}
                  value={field.value !== null ? field.value : ''}
                  onChange={(e) =>
                    field.onChange(
                      e.target.value ? Number(e.target.value) : null
                    )
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="weight"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Weight</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  placeholder="Metric weight"
                  {...field}
                  value={field.value || 0}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}

function MetricsTable() {
  const queryClient = useQueryClient();
  const [editingMetric, setEditingMetric] = useState<Metric | null>(null);
  const [open, setOpen] = useState(false);
  const {
    data: metrics,
    isLoading,
    error,
  } = useQuery<Metric[], Error>({
    queryKey: ['metrics'],
    queryFn: fetchMetrics,
  });
  const addMetricMutation = useMutation({
    mutationFn: addMetric,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
      toast({ title: 'Metric added successfully' });
      setOpen(false);
    },
  });
  const updateMetricMutation = useMutation({
    mutationFn: updateMetric,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
      toast({ title: 'Metric updated successfully' });
      setEditingMetric(null);
    },
  });
  const deleteMetricMutation = useMutation({
    mutationFn: deleteMetric,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['metrics'] });
      toast({ title: 'Metric deleted successfully' });
    },
  });
  if (isLoading)
    return <div className="text-center p-4">Loading metrics...</div>;
  if (error)
    return (
      <div className="text-center p-4 text-red-500">Error: {error.message}</div>
    );
  return (
    <div className="mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Metrics Management</h1>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button className="mb-4">Add New Metric</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add New Metric</DialogTitle>
          </DialogHeader>
          <MetricForm onSubmit={(data) => addMetricMutation.mutate(data)} />
        </DialogContent>
      </Dialog>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Min Value</TableHead>
            <TableHead>Max Value</TableHead>
            <TableHead>Weight</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {metrics?.map((metric) => (
            <TableRow key={metric.id}>
              <TableCell>{metric.name}</TableCell>
              <TableCell>{metric.description}</TableCell>
              <TableCell>{metric.min_value}</TableCell>
              <TableCell>{metric.max_value}</TableCell>
              <TableCell>{metric.weight}</TableCell>
              <TableCell>
                <Dialog
                  open={editingMetric?.id === metric.id}
                  onOpenChange={(open) => !open && setEditingMetric(null)}
                >
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="mr-2"
                      onClick={() => setEditingMetric(metric)}
                    >
                      Edit
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Metric</DialogTitle>
                    </DialogHeader>
                    {editingMetric && (
                      <MetricForm
                        onSubmit={(data) =>
                          updateMetricMutation.mutate({
                            ...editingMetric,
                            ...data,
                          })
                        }
                        initialData={editingMetric}
                      />
                    )}
                  </DialogContent>
                </Dialog>
                <Button
                  variant="destructive"
                  onClick={() => deleteMetricMutation.mutate(metric.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export function MetricInventoryCRUD() {
  return (
    <QueryClientProvider client={queryClient}>
      <MetricsTable />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
