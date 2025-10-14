"use client";
import { useState } from "react";
import {
  WALLET_STATS,
  ACCOUNTS_DATA,
  RECENT_ACTIVITY_DATA,
} from "../utils/constants/walletData";
import { IAccount, IRecentActivity, IWalletStats } from "../types/wallet";
import { IAccountRequest } from "@/interfaces/accountRequest";
import {
  ACCOUNT_TYPES,
  ACCOUNT_COLORS,
} from "../utils/constants/accountFormSchema";

export interface IModalState {
  isOpen: boolean;
  mode: "add" | "edit";
  selectedAccount?: IAccount;
}

export interface IWalletData {
  stats: IWalletStats;
  accounts: IAccount[];
  recentActivity: IRecentActivity[];
  accountTypes: typeof ACCOUNT_TYPES;
  accountColors: typeof ACCOUNT_COLORS;
  modal: IModalState;
}

export interface IWalletActions {
  handleAddAccount: () => void;
  handleAccountClick: (accountId: number) => void;
  handleActivityClick: (activityId: number) => void;
  handleViewAccountDetails: (accountId: number) => void;
  handleEditAccount: (accountId: number) => void;
  handleSetPrimaryAccount: (accountId: number) => void;
  handleDeleteAccount: (accountId: number) => void;
  openAddModal: () => void;
  openEditModal: (account: IAccount) => void;
  closeModal: () => void;
  handleModalSubmit: (data: IAccountRequest) => void;
}

export interface IUseWallet extends IWalletData, IWalletActions {}

export default function useWallet(): IUseWallet {
  const [modal, setModal] = useState<IModalState>({
    isOpen: false,
    mode: "add",
    selectedAccount: undefined,
  });

  const handleAddAccount = () => {
    openAddModal();
  };

  const handleAccountClick = (accountId: number) => {
    console.log("Account clicked:", accountId);
    // Aquí iría la lógica para manejar click en cuenta
  };

  const handleActivityClick = (activityId: number) => {
    console.log("Activity clicked:", activityId);
    // Aquí iría la lógica para manejar click en actividad
  };

  const handleViewAccountDetails = (accountId: number) => {
    console.log("View account details:", accountId);
    // Aquí iría la lógica para ver detalles de la cuenta
  };

  const handleEditAccount = (accountId: number) => {
    console.log("Edit account:", accountId);
    // Aquí iría la lógica para editar la cuenta
  };

  const handleSetPrimaryAccount = (accountId: number) => {
    console.log("Set primary account:", accountId);
    // Aquí iría la lógica para establecer como cuenta principal
  };

  const handleDeleteAccount = (accountId: number) => {
    console.log("Delete account:", accountId);
    // Aquí iría la lógica para eliminar la cuenta
  };

  const openAddModal = () => {
    setModal({
      isOpen: true,
      mode: "add",
      selectedAccount: undefined,
    });
  };

  const openEditModal = (account: IAccount) => {
    setModal({
      isOpen: true,
      mode: "edit",
      selectedAccount: account,
    });
  };

  const closeModal = () => {
    setModal({
      isOpen: false,
      mode: "add",
      selectedAccount: undefined,
    });
  };

  const handleModalSubmit = (data: IAccountRequest) => {
    console.log("Account submitted:", data);
    // Aquí iría la lógica para guardar la cuenta
    closeModal();
  };

  return {
    // Data
    stats: WALLET_STATS,
    accounts: ACCOUNTS_DATA,
    recentActivity: RECENT_ACTIVITY_DATA,
    accountTypes: ACCOUNT_TYPES,
    accountColors: ACCOUNT_COLORS,
    modal,

    // Actions
    handleAddAccount,
    handleAccountClick,
    handleActivityClick,
    handleViewAccountDetails,
    handleEditAccount,
    handleSetPrimaryAccount,
    handleDeleteAccount,
    openAddModal,
    openEditModal,
    closeModal,
    handleModalSubmit,
  };
}
