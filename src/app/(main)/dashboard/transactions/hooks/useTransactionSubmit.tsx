"use client";
import { transactionService } from "@/services/transaction";
import { ITransaction as IBackendTransaction } from "@/interfaces/transaction";
import { ITransactionRequest } from "@/interfaces/transactionRequest";
import { IAccount } from "@/services/account";
import useAuthListener from "../../hooks/useAuthListener";
import { IModalState } from "./useTransactionModal";

export default function useTransactionSubmit(
  modal: IModalState,
  accounts: IAccount[],
  onSuccess: () => void
) {
  const { user } = useAuthListener();

  const handleModalSubmit = async (data: ITransactionRequest) => {
    try {
      if (!user?.id) {
        return;
      }

      const transactionData: IBackendTransaction = {
        description: data.description || "",
        amount: data.amount,
        date: new Date(data.date),
        transaction_type_id: parseInt(data.type, 10),
        category_id: parseInt(data.category, 10),
        state_id: data.state ? parseInt(data.state, 10) : 2,
        account_id: data.account
          ? parseInt(data.account, 10)
          : accounts[0]?.id || 1,
        user_id: user.id,
        id: 0,
        created_at: new Date(),
      };

      if (modal.mode === "add") {
        const response = await transactionService.createTransaction(
          transactionData
        );
        if (response.status < 400) {
          onSuccess();
        }
      } else if (modal.mode === "edit" && modal.selectedTransaction) {
        const response = await transactionService.updateTransaction(
          modal.selectedTransaction.id,
          transactionData
        );
        if (response.status < 400) {
          onSuccess();
        }
      }
    } catch (_error) {
      // TODO: Handle error appropriately
    }
  };

  return {
    handleModalSubmit,
  };
}
