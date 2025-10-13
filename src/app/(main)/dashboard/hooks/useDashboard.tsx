"use client";
import { useState, useCallback } from "react";
import { 
  STATS_CARDS, 
  CHART_DATA, 
  TRANSACTIONS_DATA, 
  ALERTS_DATA, 
  QUICK_ACTIONS_DATA,
  USER_DATA 
} from "../utils/constants/dashboardData";

export interface IDashboardData {
  statsCards: typeof STATS_CARDS;
  chartData: typeof CHART_DATA;
  transactions: typeof TRANSACTIONS_DATA;
  alerts: typeof ALERTS_DATA;
  quickActions: typeof QUICK_ACTIONS_DATA;
  userData: typeof USER_DATA;
}

export interface IDashboardActions {
  handleQuickAction: (actionId: number) => void;
  handleTransactionClick: (transactionId: number) => void;
  handleMenuItemClick: (href: string) => void;
  toggleDarkMode: () => void;
  refreshData: () => void;
}

export interface IUseDashboard extends IDashboardData, IDashboardActions {
  isLoading: boolean;
  isDarkMode: boolean;
  selectedTimeframe: string;
  setSelectedTimeframe: (timeframe: string) => void;
}

export default function useDashboard(): IUseDashboard {
  const [isLoading, setIsLoading] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState("This year");

  const handleQuickAction = useCallback((actionId: number) => {
    console.log(`Quick action clicked: ${actionId}`);
    // TODO: Implement quick action logic
  }, []);

  const handleTransactionClick = useCallback((transactionId: number) => {
    console.log(`Transaction clicked: ${transactionId}`);
    // TODO: Implement transaction detail logic
  }, []);

  const handleMenuItemClick = useCallback((href: string) => {
    console.log(`Menu item clicked: ${href}`);
    // TODO: Implement navigation logic
  }, []);

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(prev => !prev);
    // TODO: Implement dark mode toggle logic
  }, []);

  const refreshData = useCallback(async () => {
    setIsLoading(true);
    try {
      // TODO: Implement data refresh logic
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    } catch (error) {
      console.error("Error refreshing data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    // Data
    statsCards: STATS_CARDS,
    chartData: CHART_DATA,
    transactions: TRANSACTIONS_DATA,
    alerts: ALERTS_DATA,
    quickActions: QUICK_ACTIONS_DATA,
    userData: USER_DATA,
    
    // State
    isLoading,
    isDarkMode,
    selectedTimeframe,
    setSelectedTimeframe,
    
    // Actions
    handleQuickAction,
    handleTransactionClick,
    handleMenuItemClick,
    toggleDarkMode,
    refreshData,
  };
}
