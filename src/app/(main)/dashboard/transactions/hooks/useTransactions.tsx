"use client";
import { useState } from "react";
import {
  TRANSACTIONS_STATS,
  TRANSACTIONS_LIST,
  TRANSACTION_CATEGORIES,
  TRANSACTION_TYPES,
  TIME_PERIODS,
  TRANSACTION_ACTIONS,
} from "../utils/constants/transactionsData";
import { ITransaction } from "../types/transaction";
import { ITransactionRequest } from "@/interfaces/transactionRequest";

export interface ITransactionFilters {
  searchTerm: string;
  selectedCategory: string;
  selectedType: string;
  selectedTimePeriod: string;
}

export interface IModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  selectedTransaction?: ITransaction;
}

export interface ITransactionData {
  stats: typeof TRANSACTIONS_STATS;
  transactions: typeof TRANSACTIONS_LIST;
  categories: typeof TRANSACTION_CATEGORIES;
  types: typeof TRANSACTION_TYPES;
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
}

export default function useTransactions(): IUseTransactions {
  const [filters, setFilters] = useState<ITransactionFilters>({
    searchTerm: "",
    selectedCategory: "all",
    selectedType: "all",
    selectedTimePeriod: "30days",
  });

  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    mode: "add",
    selectedTransaction: undefined,
  });

  const handleSearch = (term: string) => {
    console.log(`Search: ${term}`);
  };

  const handleCategoryFilter = (category: string) => {
    console.log(`Category filter: ${category}`);
  };

  const handleTypeFilter = (type: string) => {
    console.log(`Type filter: ${type}`);
  };

  const handleTimePeriodFilter = (period: string) => {
    console.log(`Time period filter: ${period}`);
  };

  const handleTransactionClick = (transactionId: number) => {
    console.log(`Transaction clicked: ${transactionId}`);
  };

  const handleActionClick = (actionId: number) => {
    console.log(`Action clicked: ${actionId}`);
  };

  const clearFilters = () => {
    console.log("Clear filters");
  };

  const openAddModal = () => {
    setModal({
      isOpen: true,
      mode: "add",
      selectedTransaction: undefined,
    });
  };

  const openEditModal = (transaction: ITransaction) => {
    setModal({
      isOpen: true,
      mode: "edit",
      selectedTransaction: transaction,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      selectedTransaction: undefined,
    });
  };

  const handleModalSubmit = (data: ITransactionRequest) => {
    console.log("Modal submit:", data);
    closeModal();
  };

  const handlePageChange = (page: number) => {
    console.log("Page change:", page);
    // Aquí iría la lógica para cambiar de página
  };

  const handleEditTransaction = (transaction: ITransaction) => {
    console.log("Edit transaction:", transaction);
    openEditModal(transaction);
  };

  const handleDeleteTransaction = (transactionId: number) => {
    console.log("Delete transaction:", transactionId);
    // Aquí iría la lógica para eliminar la transacción
  };

  const handleViewDetails = (transaction: ITransaction) => {
    console.log("View details:", transaction);
    // Aquí iría la lógica para ver detalles
  };

  const handleDownloadReceipt = (transactionId: number) => {
    console.log("Download receipt:", transactionId);
    // Aquí iría la lógica para descargar el recibo
  };

  return {
    // Data
    stats: TRANSACTIONS_STATS,
    transactions: TRANSACTIONS_LIST,
    categories: TRANSACTION_CATEGORIES,
    types: TRANSACTION_TYPES,
    timePeriods: TIME_PERIODS,
    actions: TRANSACTION_ACTIONS,
    pagination: {
      currentPage: 1,
      itemsPerPage: 10,
      totalItems: 1234,
    },

    // State
    filters,
    modal,

    // Actions
    handleSearch,
    handleCategoryFilter,
    handleTypeFilter,
    handleTimePeriodFilter,
    handleTransactionClick,
    handleActionClick,
    clearFilters,
    openAddModal,
    openEditModal,
    closeModal,
    handleModalSubmit,
    handlePageChange,
    handleEditTransaction,
    handleDeleteTransaction,
    handleViewDetails,
    handleDownloadReceipt,
  };
}
