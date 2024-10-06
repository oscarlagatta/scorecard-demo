import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea,
  useToast,
} from '@bofa/shadcn-ui-components';
import { useOutletContext } from 'react-router-dom';
import { Task } from '@bofa/ui';

const overviewFormSchema = z.object({
  title: z
    .string()
    .min(40, {
      message: 'Tile must be at least 40 characters.',
    })
    .max(60, {
      message: 'Tile must not be longer than 60 characters.',
    }),
  status: z.string({
    required_error: 'Please select a status to display.',
  }),
  label: z.string().max(50).min(4),
  priority: z.string().max(50).min(4),
});

type OverviewFormValues = z.infer<typeof overviewFormSchema>;

// This can come from your database or API.
const defaultValues: Partial<OverviewFormValues> = {
  // title: 'I am a metric',
};

export function Overview() {
  const task = useOutletContext<Task>();

  const { toast } = useToast();

  const form = useForm<OverviewFormValues>({
    resolver: zodResolver(overviewFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  console.log('TASK', JSON.stringify(task));

  function onSubmit(data: OverviewFormValues) {
    console.log('DATA', JSON.stringify(data));
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>This the task title information</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified status to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="backlog">Backlog</SelectItem>
                  <SelectItem value="todo">Todo</SelectItem>
                  <SelectItem value="inprogress">In Progress</SelectItem>
                  <SelectItem value="done">Done</SelectItem>
                  <SelectItem value="canceled">Canceled</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us a little bit about the task"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="priority"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Priority</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Update task</Button>
      </form>
    </Form>
  );
}
