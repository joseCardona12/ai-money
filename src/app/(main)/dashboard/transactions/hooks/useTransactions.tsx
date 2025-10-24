"use client";
import {
  TRANSACTIONS_STATS,
  TIME_PERIODS,
  TRANSACTION_ACTIONS,
} from "../utils/constants/transactionsData";
import { ITransaction } from "../types/transaction";
import { ITransactionRequest } from "@/interfaces/transactionRequest";
import { SelectOption } from "@/interfaces/selectOption";
import useTransactionModal, { IModalState } from "./useTransactionModal";
import useTransactionDetails, {
  IDetailsModalState,
} from "./useTransactionDetails";
import useTransactionFormData from "./useTransactionFormData";
import useTransactionList from "./useTransactionList";
import { ITransactionFilters } from "../utils/constants/filter";
import useTransactionFilters from "./useTransactionFilters";
import useMonthlyStats from "./useMonthlyStats";
import { CURRENT_ITEMS_PER_PAGE } from "../utils/constants/constants";

export type { IModalState } from "./useTransactionModal";
export type { IDetailsModalState } from "./useTransactionDetails";

export interface ITransactionData {
  stats: typeof TRANSACTIONS_STATS;
  transactions: ITransaction[];
  categories: SelectOption[];
  types: SelectOption[];
  states: SelectOption[];
  accounts: SelectOption[];
  timePeriods: typeof TIME_PERIODS;
  actions: typeof TRANSACTION_ACTIONS;
  pagination: {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
  };
}

export interface ITransactionActions {
  handleSearch: (term: string) => void;
  handleCategoryFilter: (category: string) => void;
  handleTypeFilter: (type: string) => void;
  handleTimePeriodFilter: (period: string) => void;
  handleTransactionClick: (transactionId: number) => void;
  handleActionClick: (actionId: number) => void;
  clearFilters: () => void;
  openAddModal: () => void;
  openEditModal: (transaction: ITransaction) => void;
  closeModal: () => void;
  handleModalSubmit: (data: ITransactionRequest) => void;
  handlePageChange: (page: number) => void;
  handleEditTransaction: (transaction: ITransaction) => void;
  handleDeleteTransaction: (transactionId: number) => void;
  handleViewDetails: (transaction: ITransaction) => void;
  handleDownloadReceipt: (transactionId: number) => void;
}

export interface IUseTransactions
  extends ITransactionData,
    ITransactionActions {
  filters: ITransactionFilters;
  modal: IModalState;
  detailsModal: IDetailsModalState;
  closeDetailsModal: () => void;
  isLoading: boolean;
  searchInputValue: string;
}

export default function useTransactions(): IUseTransactions {
  // Use individual hooks for each section
  const filterHook = useTransactionFilters();
  const modalHook = useTransactionModal();
  const detailsHook = useTransactionDetails();
  const formDataHook = useTransactionFormData();
  const listHook = useTransactionList(filterHook.filters);
  const monthlyStats = useMonthlyStats();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleTransactionClick = (_transactionId: number) => {
    // TODO: Implement transaction click handler
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleActionClick = (_actionId: number) => {
    // TODO: Implement action click handler
  };

  const formatCurrency = (amount: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return {
    // Data
    stats: [
      {
        ...TRANSACTIONS_STATS[0],
        value: formatCurrency(monthlyStats.totalAmount),
        change: monthlyStats.totalAmountChange || "N/A",
        changeText: monthlyStats.totalAmountChange
          ? "from last month"
          : "no data from last month",
        positive: monthlyStats.totalAmountChangePositive,
      },
      {
        ...TRANSACTIONS_STATS[1],
        value: formatCurrency(monthlyStats.totalIncome),
        change: monthlyStats.totalIncomeChange || "N/A",
        changeText: monthlyStats.totalIncomeChange
          ? "from last month"
          : "no data from last month",
        positive: monthlyStats.totalIncomeChangePositive,
      },
      {
        ...TRANSACTIONS_STATS[2],
        value: formatCurrency(monthlyStats.totalExpenses),
        change: monthlyStats.totalExpensesChange || "N/A",
        changeText: monthlyStats.totalExpensesChange
          ? "from last month"
          : "no data from last month",
        positive: monthlyStats.totalExpensesChangePositive,
      },
    ],
    transactions: listHook.transactions,
    categories: filterHook.categories,
    types: filterHook.types,
    states: formDataHook.states,
    accounts: formDataHook.accounts,
    timePeriods: TIME_PERIODS,
    actions: TRANSACTION_ACTIONS,
    pagination: {
      currentPage: listHook.currentPage,
      itemsPerPage: CURRENT_ITEMS_PER_PAGE,
      totalItems: listHook.totalItems,
    },

    // State
    filters: filterHook.filters,
    modal: modalHook.modal,
    detailsModal: detailsHook.detailsModal,
    isLoading: listHook.isLoading || monthlyStats.isLoading,
    searchInputValue: filterHook.searchInputValue,

    // Actions
    handleSearch: filterHook.handleSearch,
    handleCategoryFilter: filterHook.handleCategoryFilter,
    handleTypeFilter: filterHook.handleTypeFilter,
    handleTimePeriodFilter: filterHook.handleTimePeriodFilter,
    handleTransactionClick,
    handleActionClick,
    clearFilters: filterHook.clearFilters,
    openAddModal: modalHook.openAddModal,
    openEditModal: modalHook.openEditModal,
    closeModal: modalHook.closeModal,
    handleModalSubmit: () => {},
    handlePageChange: listHook.handlePageChange,
    handleEditTransaction: modalHook.handleEditTransaction,
    handleDeleteTransaction: detailsHook.handleDeleteTransaction,
    handleViewDetails: detailsHook.handleViewDetails,
    handleDownloadReceipt: detailsHook.handleDownloadReceipt,
    closeDetailsModal: detailsHook.closeDetailsModal,
  };
}
