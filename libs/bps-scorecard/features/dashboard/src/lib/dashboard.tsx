import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@bofa/shadcn-ui-components';
import { Overview } from './components';
import { RecentSales } from './components';
import { CardComponent } from './components';

export function Dashboard() {
  return (
    <div className="flex-1 space-y-4 pt-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <CardComponent
          title="Total Metric"
          svgPath={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          }
        >
          <div className="text-2xl font-bold">£45,231.89</div>
          <p className="text-xs text-muted-foreground">
            +20.1% from last month
          </p>
        </CardComponent>
        <CardComponent
          title="Subscriptions"
          svgPath={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <rect width="20" height="14" x="2" y="5" rx="2" />
              <path d="M2 10h20" />
            </svg>
          }
        >
          <div className="text-2xl font-bold">+2350</div>
          <p className="text-xs text-muted-foreground">
            +180.1% from last month
          </p>
        </CardComponent>
        <CardComponent
          title="Performance"
          svgPath={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          }
        >
          <div className="text-2xl font-bold">+12,234</div>
          <p className="text-xs text-muted-foreground">+19% from last month</p>
        </CardComponent>
        <CardComponent
          title="Active Now"
          svgPath={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="h-4 w-4 text-muted-foreground"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
            </svg>
          }
        >
          <div className="text-2xl font-bold">+573</div>
          <p className="text-xs text-muted-foreground">+201 since last hour</p>
        </CardComponent>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Performance Metrics</CardTitle>
            <CardContent className="pl-2">
              <RecentSales />
            </CardContent>
          </CardHeader>
          <CardContent>{/*<RecentSales />*/}</CardContent>
        </Card>
      </div>
      {/*<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"></div>*/}
      {/*<Tabs defaultValue="dashboard" className="space-y-4">*/}
      {/*  <TabsList>*/}
      {/*    <TabsTrigger value="overview">Dashboard</TabsTrigger>*/}
      {/*    <TabsTrigger value="analytics">Analytics</TabsTrigger>*/}
      {/*    <TabsTrigger value="reports" disabled>*/}
      {/*      Reports*/}
      {/*    </TabsTrigger>*/}
      {/*    <TabsTrigger value="notifications" disabled>*/}
      {/*      Notifications*/}
      {/*    </TabsTrigger>*/}
      {/*  </TabsList>*/}
      {/*  <TabsContent value="overview" className="space-y-4">*/}
      {/*    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">*/}
      {/*      <CardComponent*/}
      {/*        title="Total Metric"*/}
      {/*        svgPath={*/}
      {/*          <svg*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*            viewBox="0 0 24 24"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            strokeWidth="2"*/}
      {/*            className="h-4 w-4 text-muted-foreground"*/}
      {/*          >*/}
      {/*            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />*/}
      {/*            <circle cx="9" cy="7" r="4" />*/}
      {/*            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />*/}
      {/*          </svg>*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <div className="text-2xl font-bold">£45,231.89</div>*/}
      {/*        <p className="text-xs text-muted-foreground">*/}
      {/*          +20.1% from last month*/}
      {/*        </p>*/}
      {/*      </CardComponent>*/}
      {/*      <CardComponent*/}
      {/*        title="Subscriptions"*/}
      {/*        svgPath={*/}
      {/*          <svg*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*            viewBox="0 0 24 24"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            strokeWidth="2"*/}
      {/*            className="h-4 w-4 text-muted-foreground"*/}
      {/*          >*/}
      {/*            <rect width="20" height="14" x="2" y="5" rx="2" />*/}
      {/*            <path d="M2 10h20" />*/}
      {/*          </svg>*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <div className="text-2xl font-bold">+2350</div>*/}
      {/*        <p className="text-xs text-muted-foreground">*/}
      {/*          +180.1% from last month*/}
      {/*        </p>*/}
      {/*      </CardComponent>*/}
      {/*      <CardComponent*/}
      {/*        title="Performance"*/}
      {/*        svgPath={*/}
      {/*          <svg*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*            viewBox="0 0 24 24"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            strokeWidth="2"*/}
      {/*            className="h-4 w-4 text-muted-foreground"*/}
      {/*          >*/}
      {/*            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />*/}
      {/*          </svg>*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <div className="text-2xl font-bold">+12,234</div>*/}
      {/*        <p className="text-xs text-muted-foreground">*/}
      {/*          +19% from last month*/}
      {/*        </p>*/}
      {/*      </CardComponent>*/}
      {/*      <CardComponent*/}
      {/*        title="Active Now"*/}
      {/*        svgPath={*/}
      {/*          <svg*/}
      {/*            xmlns="http://www.w3.org/2000/svg"*/}
      {/*            viewBox="0 0 24 24"*/}
      {/*            fill="none"*/}
      {/*            stroke="currentColor"*/}
      {/*            strokeLinecap="round"*/}
      {/*            strokeLinejoin="round"*/}
      {/*            strokeWidth="2"*/}
      {/*            className="h-4 w-4 text-muted-foreground"*/}
      {/*          >*/}
      {/*            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />*/}
      {/*          </svg>*/}
      {/*        }*/}
      {/*      >*/}
      {/*        <div className="text-2xl font-bold">+573</div>*/}
      {/*        <p className="text-xs text-muted-foreground">*/}
      {/*          +201 since last hour*/}
      {/*        </p>*/}
      {/*      </CardComponent>*/}
      {/*    </div>*/}
      {/*    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">*/}
      {/*      <Card className="col-span-4">*/}
      {/*        <CardHeader>*/}
      {/*          <CardTitle>Overview</CardTitle>*/}
      {/*        </CardHeader>*/}
      {/*        <CardContent className="pl-2">*/}
      {/*          <Overview />*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}
      {/*      <Card className="col-span-3">*/}
      {/*        <CardHeader>*/}
      {/*          <CardTitle>Performance Metrics</CardTitle>*/}
      {/*          <CardContent className="pl-2">*/}
      {/*            <RecentSales />*/}
      {/*          </CardContent>*/}
      {/*        </CardHeader>*/}
      {/*        <CardContent>/!*<RecentSales />*!/</CardContent>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*  </TabsContent>*/}
      {/*  <TabsContent value="analytics" className="space-y-4">*/}
      {/*    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">*/}
      {/*      /!* Add your cards here if needed *!/*/}
      {/*    </div>*/}
      {/*    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">*/}
      {/*      <Card className="col-span-7">*/}
      {/*        <CardContent className="pl-2">*/}
      {/*          <Tasks />*/}
      {/*        </CardContent>*/}
      {/*      </Card>*/}
      {/*    </div>*/}
      {/*  </TabsContent>*/}
      {/*</Tabs>*/}
    </div>
  );
}

export default Dashboard;
