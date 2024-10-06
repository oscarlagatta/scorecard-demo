// SingleTask.tsx
import React, { useEffect, useState } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom'; // To get the id from the URL
import data from '../data/tasks.json';
import { Task } from '../data/schema';
import {
  Button,
  Tabs,
  TabsList,
  TabsTrigger,
} from '@bofa/shadcn-ui-components';

export function TaskDetails() {
  const [task, setTask] = useState<Task | null>(null);
  const { id } = useParams<{ id: string }>(); // Assumes a route parameter named 'id'
  const navigate = useNavigate();

  useEffect(() => {
    const taskItem = data.find((task) => task.id === id);
    setTask(taskItem || null);
  }, [id]);

  const handleBackClick = () => {
    navigate('/scorecard/inventory'); // Adjust the path as necessary
  };

  if (!task) return <div>Task not found</div>;

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8  md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          {/*<h2 className="text-2xl font-bold tracking-tight">Task Details</h2>*/}
          <Button onClick={handleBackClick}>Back to Tasks</Button>

        </div>
        {/*<div className="flex items-center space-x-2">/!*<UserNav />*!/</div>*/}
      </div>
      <div className="flex-1 space-y-4 ">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview" onClick={() => navigate('overview')}>
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="deliverables"
              onClick={() => navigate('deliverables')}
            >
              Deliverables
            </TabsTrigger>
            <TabsTrigger value="issues" onClick={() => navigate('issues')}>
              Issues Management Record
            </TabsTrigger>
            <TabsTrigger
              value="additional"
              onClick={() => navigate('additional')}
            >
              Additional Detail
            </TabsTrigger>
          </TabsList>

          <Outlet context={task}/>
        </Tabs>
      </div>
    </div>
  );
}
