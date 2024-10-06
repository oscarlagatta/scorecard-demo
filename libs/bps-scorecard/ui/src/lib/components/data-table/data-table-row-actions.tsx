import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@bofa/shadcn-ui-components';
import { taskSchema } from '../../data/schema';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  onCopy: (id: string) => void;
}

export function DataTableRowActions<TData>({
  row,
  onEdit,
  onDelete,
  onCopy,
}: DataTableRowActionsProps<TData>) {
  const task = taskSchema.parse(row.original);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <DotsHorizontalIcon className="h-4 w-4" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        <DropdownMenuItem>View</DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onEdit(task.id)}>
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem onSelect={() => onCopy(task.id)}>
          Copy
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>

        <DropdownMenuItem onSelect={() => onDelete(task.id)}>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
