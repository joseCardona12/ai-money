"use client";
import { TRANSACTIONS_DATA } from "../utils/constants/dashboardData";
import RecentTransactionHeader from "./RecentTransaction/RecentTransactionHeader";
import RecentTransactionBody from "./RecentTransaction/RecentTransactionBody";

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
      className="p-6 rounded-xl border h-fit border-[var(--color-gray-border)]"
      style={{ backgroundColor: "var(--color-white)" }}
    >
      <RecentTransactionHeader
        options={[
          { value: "recent", label: "Recent" },
          { value: "thisYear", label: "This year" },
          { value: "lastYear", label: "Last year" },
        ]}
        value="recent"
        onChange={() => {}}
      />
      <RecentTransactionBody
        transactions={transactions}
        onTransactionClick={onTransactionClick}
      />
    </div>
  );
}
