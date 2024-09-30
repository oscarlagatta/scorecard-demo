import { columns } from '../components/data-table/columns';
import { DataTable } from '../components/data-table/data-table';

import { useEffect, useState } from 'react';

import data from '../data/tasks.json';
import { Task } from '../data/schema';

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>();

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
        <div className="flex items-center space-x-2">{/*<UserNav />*/}</div>
      </div>
      <DataTable data={tasks ?? []} columns={columns} />
    </div>
  );
}
