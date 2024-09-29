import { Card, CardContent, CardHeader, CardTitle } from '@bofa/shadcn-ui-components';

const getCardClass = (title: string) => {
  switch (title) {
    case "Total Metric":
      return "bg-pastel-blue";
    case "Subscriptions":
      return "bg-pastel-green";
    case "Performance":
      return "bg-pastel-yellow";
    case "Active Now":
      return "bg-red-200";
    default:
      return "";
  }
};


export const CardComponent = ({
  title,
  children,
  svgPath
}: {
  title: string;
  children: React.ReactNode;
  svgPath: JSX.Element
}) => (
  <Card className={getCardClass(title)}>
    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
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
        {svgPath}
      </svg>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);
