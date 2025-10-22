"use client";
import { useState, useEffect } from "react";
import {
  TRANSACTIONS_STATS,
  TIME_PERIODS,
  TRANSACTION_ACTIONS,
} from "../utils/constants/transactionsData";
import { ITransaction } from "../types/transaction";
import { ITransactionRequest } from "@/interfaces/transactionRequest";
import { transactionService } from "@/services/transaction";
import { categoryService, ICategory } from "@/services/category";
import {
  transactionTypeService,
  ITransactionType,
} from "@/services/transactionType";
import {
  transactionStateService,
  ITransactionState,
} from "@/services/transactionState";
import { accountService, IAccount } from "@/services/account";
import useAuthListener from "../../hooks/useAuthListener";
import { ITransaction as IBackendTransaction } from "@/interfaces/transaction";
import { SelectOption } from "@/interfaces/selectOption";

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

export interface IDetailsModalState {
  isOpen: boolean;
  selectedTransaction?: ITransaction;
}

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

// Helper function to map backend transaction to UI transaction
const mapBackendTransactionToUI = (
  backendTx: IBackendTransaction
): ITransaction => {
  const date = new Date(backendTx.date);
  const dateStr = date.toISOString().split("T")[0];
  const timeStr = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  // Determine transaction type based on transaction_type_id
  // Assuming: 1 = income, 2 = expense
  const type = backendTx.transaction_type_id === 1 ? "income" : "expense";

  // Determine status based on state_id
  // Database mapping: 1 = pending, 2 = completed, 3 = cancelled
  const statusMap: { [key: number]: "completed" | "pending" | "failed" } = {
    1: "pending",
    2: "completed",
    3: "failed", // Using "failed" for "cancelled" status
  };
  const status = statusMap[backendTx.state_id] || "pending";

  // Default icon and color based on type
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

export default function useTransactions(): IUseTransactions {
  const { user } = useAuthListener();
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

  const [detailsModal, setDetailsModal] = useState<IDetailsModalState>({
    isOpen: false,
    selectedTransaction: undefined,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [transactions, setTransactions] = useState<ITransaction[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [types, setTypes] = useState<ITransactionType[]>([]);
  const [states, setStates] = useState<ITransactionState[]>([]);
  const [accounts, setAccounts] = useState<IAccount[]>([]);
  const [searchInputValue, setSearchInputValue] = useState(""); // Local input state
  const itemsPerPage = 20;

  // Debounce timer for search
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );

  // Helper function to convert categories to SelectOption format
  const convertCategoriesToSelectOptions = (
    cats: ICategory[]
  ): SelectOption[] => {
    const options: SelectOption[] = [{ value: "all", label: "All Categories" }];
    return options.concat(
      cats.map((cat) => ({
        value: cat.id.toString(),
        label: cat.name,
      }))
    );
  };

  // Helper function to convert transaction types to SelectOption format
  const convertTypesToSelectOptions = (
    txTypes: ITransactionType[]
  ): SelectOption[] => {
    const options: SelectOption[] = [{ value: "all", label: "All Types" }];
    return options.concat(
      txTypes.map((type) => ({
        value: type.id.toString(),
        label: type.name,
      }))
    );
  };

  // Helper function to convert transaction states to SelectOption format
  const convertStatesToSelectOptions = (
    txStates: ITransactionState[]
  ): SelectOption[] => {
    const converted = txStates.map((state) => ({
      value: state.id.toString(),
      label: state.name,
    }));
    console.log("Converted states:", converted);
    return converted;
  };

  // Helper function to convert accounts to SelectOption format
  const convertAccountsToSelectOptions = (
    accts: IAccount[]
  ): SelectOption[] => {
    const converted = accts.map((account) => ({
      value: account.id.toString(),
      label: account.name,
    }));
    console.log("Converted accounts:", converted);
    return converted;
  };

  // Load categories, transaction types, states, and accounts on mount
  useEffect(() => {
    const loadFormData = async () => {
      try {
        console.log("🔄 Loading form data... user?.id:", user?.id);

        const [
          categoriesResponse,
          typesResponse,
          statesResponse,
          accountsResponse,
        ] = await Promise.all([
          categoryService.getAllCategories(),
          transactionTypeService.getAllTransactionTypes(),
          transactionStateService.getAllTransactionStates(),
          user?.id
            ? accountService.getAccountsByUserId(user.id)
            : Promise.resolve({ status: 400, data: [] }),
        ]);

        console.log("📡 API Responses:", {
          categoriesStatus: categoriesResponse.status,
          categoriesData: categoriesResponse.data,
          typesStatus: typesResponse.status,
          typesData: typesResponse.data,
          statesStatus: statesResponse.status,
          statesData: statesResponse.data,
          accountsStatus: accountsResponse.status,
          accountsData: accountsResponse.data,
        });

        if (categoriesResponse.status < 400 && categoriesResponse.data) {
          const categoriesData = Array.isArray(categoriesResponse.data)
            ? categoriesResponse.data
            : categoriesResponse.data.categories || [];
          setCategories(categoriesData);
        }

        if (typesResponse.status < 400 && typesResponse.data) {
          const typesData = Array.isArray(typesResponse.data)
            ? typesResponse.data
            : typesResponse.data.types || [];
          setTypes(typesData);
        }

        if (statesResponse.status < 400 && statesResponse.data) {
          const statesData = Array.isArray(statesResponse.data)
            ? statesResponse.data
            : statesResponse.data.states || [];
          console.log("States loaded:", statesData);
          setStates(statesData);
        } else {
          // Fallback: Use default states if API fails
          console.warn("States API failed, using defaults");
          const defaultStates: ITransactionState[] = [
            { id: 1, name: "Pending" },
            { id: 2, name: "Completed" },
            { id: 3, name: "Cancelled" },
          ];
          setStates(defaultStates);
        }

        if (accountsResponse.status < 400 && accountsResponse.data) {
          // Backend returns accounts directly as array in data
          const accountsData = Array.isArray(accountsResponse.data)
            ? accountsResponse.data
            : [];
          console.log("Accounts loaded:", accountsData);
          setAccounts(accountsData);
        } else {
          console.warn("Accounts API failed or no user ID");
        }
      } catch (error) {
        console.error("Error loading form data:", error);
        // Use fallback data if API fails
        setCategories([]);
        setTypes([]);
        setStates([]);
        setAccounts([]);
      }
    };

    // Only load if user is available
    console.log("✅ useEffect dependency check - user?.id:", user?.id);
    if (user?.id) {
      console.log("🚀 Calling loadFormData()");
      loadFormData();
    } else {
      console.log("⚠️ Skipping loadFormData - no user ID");
    }
  }, [user?.id]);

  // Load transactions on mount or when page/filters change
  useEffect(() => {
    const loadTransactions = async () => {
      if (!user?.id) return;

      setIsLoading(true);
      try {
        // Calculate date range based on selected time period
        const endDate = new Date();
        const startDate = new Date();

        switch (filters.selectedTimePeriod) {
          case "7days":
            startDate.setDate(startDate.getDate() - 7);
            break;
          case "30days":
            startDate.setDate(startDate.getDate() - 30);
            break;
          case "90days":
            startDate.setDate(startDate.getDate() - 90);
            break;
          case "1year":
            startDate.setFullYear(startDate.getFullYear() - 1);
            break;
          default:
            startDate.setDate(startDate.getDate() - 30);
        }

        const response = await transactionService.getTransactionsByUserId(
          user.id,
          currentPage,
          itemsPerPage,
          {
            search: filters.searchTerm,
            category: filters.selectedCategory,
            type: filters.selectedType,
            startDate: startDate.toISOString().split("T")[0],
            endDate: endDate.toISOString().split("T")[0],
          }
        );

        if (response.status < 400 && response.data) {
          // Handle paginated response
          const data = response.data;
          const transactionsData = Array.isArray(data)
            ? data
            : data.transactions || [];

          // Map backend transactions to UI format
          const mappedTransactions = transactionsData.map(
            mapBackendTransactionToUI
          );
          setTransactions(mappedTransactions);

          // Update total items if available in response
          if (data.total) {
            setTotalItems(data.total);
          } else if (data.pagination?.total) {
            setTotalItems(data.pagination.total);
          } else {
            setTotalItems(transactionsData.length);
          }
        }
      } catch (error) {
        console.error("Error loading transactions:", error);
        setTransactions([]);
        setTotalItems(0);
      } finally {
        setIsLoading(false);
      }
    };

    loadTransactions();
  }, [user?.id, currentPage, filters]);

  const handleSearch = (term: string) => {
    // Update input value immediately for real-time feedback
    setSearchInputValue(term);

    // Clear previous timeout
    if (searchTimeout) {
      clearTimeout(searchTimeout);
    }

    // Set new timeout for debounce (500ms) - only send to backend after user stops typing
    const timeout = setTimeout(() => {
      setFilters({ ...filters, searchTerm: term });
      setCurrentPage(1); // Reset to first page when searching
    }, 500);

    setSearchTimeout(timeout);
  };

  const handleCategoryFilter = (category: string) => {
    setFilters({ ...filters, selectedCategory: category });
    setCurrentPage(1); // Reset to first page
  };

  const handleTypeFilter = (type: string) => {
    setFilters({ ...filters, selectedType: type });
    setCurrentPage(1); // Reset to first page
  };

  const handleTimePeriodFilter = (period: string) => {
    setFilters({ ...filters, selectedTimePeriod: period });
    setCurrentPage(1); // Reset to first page
  };

  const handleTransactionClick = (transactionId: number) => {
    console.log(`Transaction clicked: ${transactionId}`);
  };

  const handleActionClick = (actionId: number) => {
    console.log(`Action clicked: ${actionId}`);
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      selectedCategory: "all",
      selectedType: "all",
      selectedTimePeriod: "30days",
    });
    setSearchInputValue(""); // Clear search input
    setCurrentPage(1);
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

  const handleModalSubmit = async (data: ITransactionRequest) => {
    try {
      if (!user?.id) {
        console.error("User ID not found");
        return;
      }

      // Convert form data to backend format
      const transactionData: IBackendTransaction = {
        description: data.description || "",
        amount: data.amount,
        date: new Date(data.date),
        transaction_type_id: parseInt(data.type, 10),
        category_id: parseInt(data.category, 10),
        state_id: data.state ? parseInt(data.state, 10) : 2, // Use selected state or default to "completed"
        account_id: data.account
          ? parseInt(data.account, 10)
          : accounts[0]?.id || 1, // Use selected account or first account
        user_id: user.id,
        id: 0, // Will be set by backend on create
        created_at: new Date(),
      };

      if (modal.mode === "add") {
        // Create new transaction
        const response = await transactionService.createTransaction(
          transactionData
        );
        if (response.status < 400) {
          console.log("Transaction created successfully");
          closeModal();
          // Reload transactions
          setCurrentPage(1);
        }
      } else if (modal.mode === "edit" && modal.selectedTransaction) {
        // Update existing transaction
        const response = await transactionService.updateTransaction(
          modal.selectedTransaction.id,
          transactionData
        );
        if (response.status < 400) {
          console.log("Transaction updated successfully");
          closeModal();
          // Reload transactions
          setCurrentPage(1);
        }
      }
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
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
    setDetailsModal({
      isOpen: true,
      selectedTransaction: transaction,
    });
  };

  const closeDetailsModal = () => {
    setDetailsModal({
      isOpen: false,
      selectedTransaction: undefined,
    });
  };

  const handleDownloadReceipt = (transactionId: number) => {
    console.log("Download receipt:", transactionId);
    // Aquí iría la lógica para descargar el recibo
  };

  const statesOptions = convertStatesToSelectOptions(states);
  const accountsOptions = convertAccountsToSelectOptions(accounts);

  console.log("Final states options:", statesOptions);
  console.log("Final accounts options:", accountsOptions);

  return {
    // Data
    stats: TRANSACTIONS_STATS.map((stat) => ({
      ...stat,
      value: "$0.00",
    })),
    transactions,
    categories: convertCategoriesToSelectOptions(categories),
    types: convertTypesToSelectOptions(types),
    states: statesOptions,
    accounts: accountsOptions,
    timePeriods: TIME_PERIODS,
    actions: TRANSACTION_ACTIONS,
    pagination: {
      currentPage,
      itemsPerPage,
      totalItems,
    },

    // State
    filters,
    modal,
    detailsModal,
    isLoading,
    searchInputValue,

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
    closeDetailsModal,
  };
}
