import { ITransactionState } from "@/services/transactionState";

/**
 * Default transaction states used as fallback when API fails
 */
export const DEFAULT_TRANSACTION_STATES: ITransactionState[] = [
  { id: 1, name: "Pending" },
  { id: 2, name: "Completed" },
  { id: 3, name: "Cancelled" },
];

