"use client";
import { useState } from "react";
import {
  BUDGET_CATEGORIES,
  BUDGET_SUMMARY,
  BUDGET_ALERTS,
  AVAILABLE_CATEGORIES,
  MONTHS,
} from "../utils/constants/budgetData";
import {
  IBudgetCategory,
  IBudgetSummary,
  IBudgetAlert,
  IBudgetOption,
} from "../types/budget";
import { IBudgetRequest } from "@/interfaces/budgetRequest";
import { IconEye, IconEdit, IconTrash } from "@tabler/icons-react";

export interface IModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  selectedCategory?: IBudgetCategory;
}

export interface IDetailsModalState {
  isOpen: boolean;
  selectedCategory?: IBudgetCategory;
}

export interface IBudgetData {
  categories: IBudgetCategory[];
  summary: IBudgetSummary;
  alerts: IBudgetAlert[];
  availableCategories: typeof AVAILABLE_CATEGORIES;
  months: typeof MONTHS;
  modal: IModalState;
  detailsModal: IDetailsModalState;
  selectedMonth: string;
}

export interface IBudgetActions {
  handleAddCategory: () => void;
  handleCategoryClick: (categoryId: number) => void;
  handleViewCategoryDetails: (categoryId: number) => void;
  handleEditCategory: (categoryId: number) => void;
  handleDeleteCategory: (categoryId: number) => void;
  openAddModal: () => void;
  openEditModal: (category: IBudgetCategory) => void;
  closeModal: () => void;
  handleModalSubmit: (data: IBudgetRequest) => void;
  openDetailsModal: (category: IBudgetCategory) => void;
  closeDetailsModal: () => void;
  handleEditFromDetails: () => void;
  handleMonthChange: (month: string) => void;
  getCategoryOptions: (category: IBudgetCategory) => IBudgetOption[];
}

export interface IUseBudget extends IBudgetData, IBudgetActions {}

export default function useBudget(): IUseBudget {
  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    mode: "add",
    selectedCategory: undefined,
  });

  const [detailsModal, setDetailsModal] = useState<IDetailsModalState>({
    isOpen: false,
    selectedCategory: undefined,
  });

  const [selectedMonth, setSelectedMonth] = useState<string>("january");

  const handleAddCategory = () => {
    openAddModal();
  };

  const handleCategoryClick = (categoryId: number) => {
    console.log("Category clicked:", categoryId);
  };

  const handleViewCategoryDetails = (categoryId: number) => {
    const category = BUDGET_CATEGORIES.find((c) => c.id === categoryId);
    if (category) {
      openDetailsModal(category);
    }
  };

  const handleEditCategory = (categoryId: number) => {
    const category = BUDGET_CATEGORIES.find((c) => c.id === categoryId);
    if (category) {
      openEditModal(category);
    }
  };

  const handleDeleteCategory = (categoryId: number) => {
    console.log("Delete category:", categoryId);
  };

  const handleMonthChange = (month: string) => {
    setSelectedMonth(month);
    console.log("Month changed to:", month);
  };

  const getCategoryOptions = (category: IBudgetCategory): IBudgetOption[] => [
    {
      id: "view",
      text: "View Details",
      icon: <IconEye size={16} />,
      onClick: () => handleViewCategoryDetails(category.id),
    },
    {
      id: "edit",
      text: "Edit Category",
      icon: <IconEdit size={16} />,
      onClick: () => handleEditCategory(category.id),
    },
    {
      id: "delete",
      text: "Delete Category",
      icon: <IconTrash size={16} />,
      onClick: () => handleDeleteCategory(category.id),
      variant: "danger",
    },
  ];

  const openAddModal = () => {
    setModal({
      isOpen: true,
      mode: "add",
      selectedCategory: undefined,
    });
  };

  const openEditModal = (category: IBudgetCategory) => {
    setModal({
      isOpen: true,
      mode: "edit",
      selectedCategory: category,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      selectedCategory: undefined,
    });
  };

  const handleModalSubmit = (data: IBudgetRequest) => {
    console.log("Budget category submitted:", data);
    // Aquí iría la lógica para guardar la categoría
    closeModal();
  };

  const openDetailsModal = (category: IBudgetCategory) => {
    setDetailsModal({
      isOpen: true,
      selectedCategory: category,
    });
  };

  const closeDetailsModal = () => {
    setDetailsModal({
      isOpen: false,
      selectedCategory: undefined,
    });
  };

  const handleEditFromDetails = () => {
    if (detailsModal.selectedCategory) {
      closeDetailsModal();
      openEditModal(detailsModal.selectedCategory);
    }
  };

  return {
    // Data
    categories: BUDGET_CATEGORIES,
    summary: BUDGET_SUMMARY,
    alerts: BUDGET_ALERTS,
    availableCategories: AVAILABLE_CATEGORIES,
    months: MONTHS,
    modal,
    detailsModal,
    selectedMonth,

    // Actions
    handleAddCategory,
    handleCategoryClick,
    handleViewCategoryDetails,
    handleEditCategory,
    handleDeleteCategory,
    openAddModal,
    openEditModal,
    closeModal,
    handleModalSubmit,
    openDetailsModal,
    closeDetailsModal,
    handleEditFromDetails,
    handleMonthChange,
    getCategoryOptions,
  };
}
