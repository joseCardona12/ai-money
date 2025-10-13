import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";
import {
  transactionFormSchema,
  CURRENT_FORM_TRANSACTION,
} from "../utils/constants/transactionFormSchema";
import { ITransactionRequest } from "@/interfaces/transactionRequest";
import { ITransaction } from "../types/transaction";

interface IUseTransactionFormProps {
  mode: "add" | "edit";
  transaction?: ITransaction;
  onSubmit: (data: ITransactionRequest) => void;
  onCancel: () => void;
}

export default function useTransactionForm({
  mode,
  transaction,
  onSubmit,
  onCancel,
}: IUseTransactionFormProps) {
  const getDefaultValues = () => {
    if (mode === "edit" && transaction) {
      return {
        type: transaction.type,
        category: transaction.category,
        amount: transaction.amount,
        date: transaction.date,
        description: transaction.description || "",
      };
    }
    return CURRENT_FORM_TRANSACTION;
  };

  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<z.infer<typeof transactionFormSchema>>({
    resolver: zodResolver(transactionFormSchema),
    defaultValues: getDefaultValues(),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleFormSubmit = async (data: ITransactionRequest): Promise<void> => {
    try {
      onSubmit(data);
    } catch (error) {
      console.error("Error submitting transaction:", error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return {
    control,
    handleSubmit,
    setError,
    errors,
    handleFormSubmit,
    handleCancel,
  };
}
