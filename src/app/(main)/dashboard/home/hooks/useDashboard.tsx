"use client";
import { useState, useCallback } from "react";
import {
  STATS_CARDS,
  CHART_DATA,
  TRANSACTIONS_DATA,
  ALERTS_DATA,
  QUICK_ACTIONS_DATA,
} from "../utils/constants/dashboardData";

export interface IDashboardData {
  statsCards: typeof STATS_CARDS;
  chartData: typeof CHART_DATA;
  transactions: typeof TRANSACTIONS_DATA;
  alerts: typeof ALERTS_DATA;
  quickActions: typeof QUICK_ACTIONS_DATA;
}

export interface IDashboardActions {
  handleQuickAction: (actionId: number) => void;
  handleTransactionClick: (transactionId: number) => void;
}

export interface IUseDashboard extends IDashboardData, IDashboardActions {
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

export default function useDashboard(): IUseDashboard {
  const [selectedTimeframe, setSelectedTimeframe] = useState("This year");

  const handleQuickAction = useCallback((actionId: number) => {
    console.log(`Quick action clicked: ${actionId}`);
    // Here you can add logic to handle quick actions
  }, []);

  const handleTransactionClick = useCallback((transactionId: number) => {
    console.log(`Transaction clicked: ${transactionId}`);
    // Here you can add logic to handle transaction clicks
  }, []);

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

    // Actions
    handleQuickAction,
    handleTransactionClick,
  };
}
