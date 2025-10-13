import { IconDots } from "@tabler/icons-react";
import { TRANSACTIONS_DATA } from "../../utils/constants/dashboardData";
import IconButton from "@/ui/components/IconButton";

interface RecentTransactionBodyProps {
  transactions: typeof TRANSACTIONS_DATA;
  onTransactionClick: (transactionId: number) => void;
}
export default function RecentTransactionBody({
  transactions,
  onTransactionClick,
}: RecentTransactionBodyProps): React.ReactNode {
  return (
    <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
      {transactions.map((transaction) => (
        <div
          key={transaction.id}
          className="flex items-center justify-between border border-[var(--color-gray-border)] p-2 rounded-lg cursor-pointer"
          style={{ backgroundColor: "var(--color-gray-2)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${transaction.color}20` }}
            >
              <span className="text-lg">{transaction.icon}</span>
            </div>
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: "var(--color-text-black)" }}
              >
                {transaction.name}
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--color-text-gray)" }}
              >
                {transaction.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span
              className="font-semibold text-sm"
              style={{ color: "var(--color-text-black)" }}
            >
              {transaction.amount}
            </span>
            <IconButton
              icon={IconDots}
              onClick={() => onTransactionClick(transaction.id)}
              variant="ghost"
              size="sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
