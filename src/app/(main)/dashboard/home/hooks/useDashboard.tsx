"use client";
import { useState } from "react";
import {
  STATS_CARDS,
  CHART_DATA,
  TRANSACTIONS_DATA,
  ALERTS_DATA,
  QUICK_ACTIONS_DATA,
} from "../utils/constants/dashboardData";
import { ITransaction } from "../../transactions/types/transaction";
import {
  adaptDashboardTransactionToTransaction,
  findDashboardTransactionById,
} from "../utils/transactionAdapter";

export interface IDashboardData {
  statsCards: typeof STATS_CARDS;
  chartData: typeof CHART_DATA;
  transactions: typeof TRANSACTIONS_DATA;
  alerts: typeof ALERTS_DATA;
  quickActions: typeof QUICK_ACTIONS_DATA;
}

export interface IDetailsModalState {
  isOpen: boolean;
  selectedTransaction?: ITransaction;
}

export interface IDashboardActions {
  handleQuickAction: (actionId: number) => void;
  handleTransactionClick: (transactionId: number) => void;
  handleEditTransaction: (transactionId: number) => void;
  handleDeleteTransaction: (transactionId: number) => void;
  handleViewDetails: (transactionId: number) => void;
  handleDownloadReceipt: (transactionId: number) => void;
  closeDetailsModal: () => void;
}

export interface IUseDashboard extends IDashboardData, IDashboardActions {
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
  detailsModal: IDetailsModalState;
}

export default function useDashboard(): IUseDashboard {
  const [selectedTimeframe, setSelectedTimeframe] = useState("This year");
  const [detailsModal, setDetailsModal] = useState<IDetailsModalState>({
    isOpen: false,
    selectedTransaction: undefined,
  });

  const handleQuickAction = (actionId: number) => {
    console.log(`Quick action clicked: ${actionId}`);
  };

  const handleTransactionClick = (transactionId: number) => {
    console.log(`Transaction clicked: ${transactionId}`);
  };

  const handleViewDetails = (transactionId: number) => {
    const dashboardTransaction = findDashboardTransactionById(
      TRANSACTIONS_DATA,
      transactionId
    );
    if (dashboardTransaction) {
      const adaptedTransaction =
        adaptDashboardTransactionToTransaction(dashboardTransaction);
      setDetailsModal({
        isOpen: true,
        selectedTransaction: adaptedTransaction,
      });
    }
  };

  const handleEditTransaction = (transactionId: number) => {
    console.log("Edit transaction:", transactionId);
  };

  const handleDeleteTransaction = (transactionId: number) => {
    console.log("Delete transaction:", transactionId);
  };

  const handleDownloadReceipt = (transactionId: number) => {
    console.log("Download receipt:", transactionId);
  };

  const closeDetailsModal = () => {
    setDetailsModal({
      isOpen: false,
      selectedTransaction: undefined,
    });
  };

  return {
    // Data
    statsCards: STATS_CARDS,
    chartData: CHART_DATA,
    transactions: TRANSACTIONS_DATA,
    alerts: ALERTS_DATA,
    quickActions: QUICK_ACTIONS_DATA,

    // State
    selectedTimeframe,
    setSelectedTimeframe,
    detailsModal,

    // Actions
    handleQuickAction,
    handleTransactionClick,
    handleEditTransaction,
    handleDeleteTransaction,
    handleViewDetails,
    handleDownloadReceipt,
    closeDetailsModal,
  };
}
