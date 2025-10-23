"use client";
import { useState } from "react";
import { ITransaction } from "../types/transaction";

export interface IDetailsModalState {
  isOpen: boolean;
  selectedTransaction?: ITransaction;
}

export default function useTransactionDetails() {
  const [detailsModal, setDetailsModal] = useState<IDetailsModalState>({
    isOpen: false,
    selectedTransaction: undefined,
  });

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

  const handleDownloadReceipt = (_transactionId: number) => {
    // TODO: Implement receipt download logic
  };

  const handleDeleteTransaction = (_transactionId: number) => {
    // TODO: Implement transaction deletion logic
  };

  return {
    detailsModal,
    handleViewDetails,
    closeDetailsModal,
    handleDownloadReceipt,
    handleDeleteTransaction,
  };
}
