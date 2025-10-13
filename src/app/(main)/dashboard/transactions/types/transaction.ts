export interface ITransaction {
  id: number;
  name: string;
  description: string;
  category: string;
  date: string;
  time: string;
  amount: number;
  type: "income" | "expense";
  status: "completed" | "pending" | "failed";
  icon: string;
  color: string;
}
