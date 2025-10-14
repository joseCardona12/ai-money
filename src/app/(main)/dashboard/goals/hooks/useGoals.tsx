"use client";
import { useState } from "react";
import {
  GOALS_DATA,
  OVERALL_PROGRESS,
  GOAL_CATEGORIES,
  GOAL_COLORS,
} from "../utils/constants/goalsData";
import { IGoal, IOverallProgress, IGoalOption } from "../types/goals";
import { IGoalRequest } from "@/interfaces/goalRequest";
import { IContributionRequest } from "@/interfaces/contributionRequest";
import { IconEye, IconEdit, IconTrash } from "@tabler/icons-react";

export interface IModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  selectedGoal?: IGoal;
}

export interface IContributionModalState {
  isOpen: boolean;
  selectedGoal?: IGoal;
}

export interface IGoalsData {
  goals: IGoal[];
  overallProgress: IOverallProgress;
  goalCategories: typeof GOAL_CATEGORIES;
  goalColors: typeof GOAL_COLORS;
  modal: IModalState;
  contributionModal: IContributionModalState;
}

export interface IGoalsActions {
  handleAddGoal: () => void;
  handleGoalClick: (goalId: number) => void;
  handleViewGoalDetails: (goalId: number) => void;
  handleEditGoal: (goalId: number) => void;
  handleDeleteGoal: (goalId: number) => void;
  handleAddContribution: (goalId: number) => void;
  openAddModal: () => void;
  openEditModal: (goal: IGoal) => void;
  closeModal: () => void;
  handleModalSubmit: (data: IGoalRequest) => void;
  openContributionModal: (goal: IGoal) => void;
  closeContributionModal: () => void;
  handleContributionSubmit: (
    goalId: number,
    data: IContributionRequest
  ) => void;
  getGoalOptions: (goal: IGoal) => IGoalOption[];
}

export interface IUseGoals extends IGoalsData, IGoalsActions {}

export default function useGoals(): IUseGoals {
  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    mode: "add",
    selectedGoal: undefined,
  });

  const [contributionModal, setContributionModal] =
    useState<IContributionModalState>({
      isOpen: false,
      selectedGoal: undefined,
    });

  const handleAddGoal = () => {
    openAddModal();
  };

  const handleGoalClick = (goalId: number) => {
    console.log("Goal clicked:", goalId);
  };

  const handleViewGoalDetails = (goalId: number) => {
    console.log("View goal details:", goalId);
  };

  const handleEditGoal = (goalId: number) => {
    const goal = GOALS_DATA.find((g) => g.id === goalId);
    if (goal) {
      openEditModal(goal);
    }
  };

  const handleDeleteGoal = (goalId: number) => {
    console.log("Delete goal:", goalId);
  };

  const handleAddContribution = (goalId: number) => {
    const goal = GOALS_DATA.find((g) => g.id === goalId);
    if (goal) {
      openContributionModal(goal);
    }
  };

  const getGoalOptions = (goal: IGoal): IGoalOption[] => [
    {
      id: "view",
      text: "View Details",
      icon: <IconEye size={16} />,
      onClick: () => handleViewGoalDetails(goal.id),
    },
    {
      id: "edit",
      text: "Edit Goal",
      icon: <IconEdit size={16} />,
      onClick: () => handleEditGoal(goal.id),
    },
    {
      id: "delete",
      text: "Delete Goal",
      icon: <IconTrash size={16} />,
      onClick: () => handleDeleteGoal(goal.id),
      variant: "danger" as const,
    },
  ];

  const openAddModal = () => {
    setModal({
      isOpen: true,
      mode: "add",
      selectedGoal: undefined,
    });
  };

  const openEditModal = (goal: IGoal) => {
    setModal({
      isOpen: true,
      mode: "edit",
      selectedGoal: goal,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      selectedGoal: undefined,
    });
  };

  const handleModalSubmit = (data: IGoalRequest) => {
    console.log("Goal submitted:", data);
    // Aquí iría la lógica para guardar la meta
    closeModal();
  };

  const openContributionModal = (goal: IGoal) => {
    setContributionModal({
      isOpen: true,
      selectedGoal: goal,
    });
  };

  const closeContributionModal = () => {
    setContributionModal({
      isOpen: false,
      selectedGoal: undefined,
    });
  };

  const handleContributionSubmit = (
    goalId: number,
    data: IContributionRequest
  ) => {
    console.log("Contribution submitted for goal:", goalId, data);
    // Aquí iría la lógica para agregar la contribución
    closeContributionModal();
  };

  return {
    // Data
    goals: GOALS_DATA,
    overallProgress: OVERALL_PROGRESS,
    goalCategories: GOAL_CATEGORIES,
    goalColors: GOAL_COLORS,
    modal,
    contributionModal,

    // Actions
    handleAddGoal,
    handleGoalClick,
    handleViewGoalDetails,
    handleEditGoal,
    handleDeleteGoal,
    handleAddContribution,
    openAddModal,
    openEditModal,
    closeModal,
    handleModalSubmit,
    openContributionModal,
    closeContributionModal,
    handleContributionSubmit,
    getGoalOptions,
  };
}
