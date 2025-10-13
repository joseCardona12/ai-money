"use client";
import { IconDots } from "@tabler/icons-react";
import { TRANSACTIONS_DATA } from "../utils/constants/dashboardData";

interface TransactionsSectionProps {
  transactions: typeof TRANSACTIONS_DATA;
  onTransactionClick: (transactionId: number) => void;
}

export default function TransactionsSection({
  transactions,
  onTransactionClick,
}: TransactionsSectionProps): React.ReactNode {
  return (
    <div
      className="p-6 rounded-xl border h-fit"
      style={{
        backgroundColor: "var(--color-white)",
        borderColor: "var(--color-gray)",
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Recent transactions</h3>
        <button className="text-sm" style={{ color: "var(--color-blue)" }}>
          Recent
        </button>
      </div>

      {/* Transactions List */}
      <div className="space-y-4 max-h-96 overflow-y-auto">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex items-center justify-between"
          >
            {/* Left Side */}
            <div className="flex items-center gap-3">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: `${transaction.color}20` }}
              >
                <span className="text-lg">{transaction.icon}</span>
              </div>
              <div>
                <p className="font-medium text-sm">{transaction.name}</p>
                <p
                  className="text-xs"
                  style={{ color: "var(--color-text-gray)" }}
                >
                  {transaction.date}
                </p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <span className="font-semibold text-sm">
                {transaction.amount}
              </span>
              <button
                onClick={() => onTransactionClick(transaction.id)}
                className="p-1 hover:bg-gray-50 rounded"
                style={{ color: "var(--color-text-gray)" }}
              >
                <IconDots className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
