import {  columns } from "./column"
import { DataTable } from "./data-table"
import { Payment } from '../models/payment';
import { useEffect, useState } from 'react';
import data from '../data/data.json';

export function DemoPage() {
  const [payments, setPayments] = useState<Payment[]>([]);

  useEffect(() => {
   setPayments(data)
  }, [payments])

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
