import { ITransaction as IBackendTransaction } from "@/interfaces/transaction";
import { ITransaction } from "../types/transaction";

export const mapBackendTransactionToUI = (
  backendTx: IBackendTransaction
): ITransaction => {
  const date = new Date(backendTx.date);
  const dateStr = date.toISOString().split("T")[0];
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const type = backendTx.transaction_type_id === 1 ? "income" : "expense";

  const statusMap: { [key: number]: "completed" | "pending" | "failed" } = {
    1: "pending",
    2: "completed",
    3: "failed",
  };
  const status = statusMap[backendTx.state_id] || "pending";

  const iconMap: { [key: string]: string } = {
    income: "💰",
    expense: "💸",
  };
  const colorMap: { [key: string]: string } = {
    income: "var(--color-green)",
    expense: "var(--color-red)",
  };

  return {
    id: backendTx.id,
    name: backendTx.description.split(" ").slice(0, 2).join(" "),
    description: backendTx.description,
    category: backendTx.category?.name || "Uncategorized",
    date: dateStr,
    time: timeStr,
    amount: backendTx.amount,
    type,
    status,
    icon: iconMap[type],
    color: colorMap[type],
  };
};
