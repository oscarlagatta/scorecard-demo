export type Payment = {
  id: string;
  amount: number;
  status: string;//"pending" | "processing" | "success" | "failed"
  email: string;
};
