import { ColumnDef } from '@tanstack/react-table';

import { Checkbox } from '@bofa/shadcn-ui-components';

import { DataTableColumnHeader } from './data-table-column-header';
import { MetricDto } from '@bofa/api-services';

export const createColumnsMetric = (): ColumnDef<MetricDto>[] => [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">
        {row.getValue('name')}
      </span>
    ),
  },
  {
    accessorKey: 'description',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Description" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">
        {row.getValue('description')}
      </span>
    ),
  },
  // {
  //   accessorKey: 'metricTypeId',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Metric Type ID" />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('metricTypeId')}</div>,
  // },
  // {
  //   accessorKey: 'runFrequencyId',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Run Frequency ID" />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('runFrequencyId')}</div>,
  // },
  {
    accessorKey: 'runDay',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Run Day" />
    ),
    cell: ({ row }) => <div>{row.getValue('runDay')}</div>,
  },
  // {
  //   accessorKey: 'serviceAlignmentId',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Service Alignment ID" />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('serviceAlignmentId')}</div>,
  // },
  // {
  //   accessorKey: 'dataGranularityId',
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Data Granularity ID" />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue('dataGranularityId')}</div>,
  // },
  {
    accessorKey: 'consequenceEligible',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Consequence Eligible" />
    ),
    cell: ({ row }) => (
      <div>{row.getValue('consequenceEligible') ? 'Yes' : 'No'}</div>
    ),
  },
  {
    accessorKey: 'metricCalculation',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Metric Calculation" />
    ),
    cell: ({ row }) => <div>{row.getValue('metricCalculation')}</div>,
  },
  {
    accessorKey: 'valueType',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Value Type" />
    ),
    cell: ({ row }) => <div>{row.getValue('valueType')}</div>,
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue('status')}</div>,
  },
  {
    accessorKey: 'createdUserId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created User ID" />
    ),
    cell: ({ row }) => <div>{row.getValue('createdUserId')}</div>,
  },
  {
    accessorKey: 'createdDateTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created DateTime" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">
      {new Date(row.getValue('createdDateTime')).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })}
    </span>
    ),
  },
  {
    accessorKey: 'updatedUserId',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated User ID" />
    ),
    cell: ({ row }) => <div>{row.getValue('updatedUserId')}</div>,
  },
  {
    accessorKey: 'updatedDateTime',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Updated DateTime" />
    ),
    cell: ({ row }) => (
      <span className="max-w-[500px] truncate font-medium">
      {new Date(row.getValue('updatedDateTime')).toLocaleString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      })}
    </span>
    ),
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => (
  //     <DataTableRowActions
  //       row={row}
  //       onEdit={onEdit}
  //       onDelete={onDelete}
  //       onCopy={onCopy}
  //     />
  //   ),
  // },
];
