"use client";
import Modal from "@/ui/components/Modal";
import Button from "@/ui/components/Button";
import FormField from "@/ui/components/FormField";
import FormFieldNumber from "@/ui/components/FormFieldNumber";
import FormFieldSelect from "@/ui/components/FormFieldSelect";
import FormFieldTextarea from "@/ui/components/FormFieldTextarea";
import FormFieldDate from "@/ui/components/FormFieldDate";
import { SelectOption } from "@/interfaces/selectOption";
import { ITransaction } from "../types/transaction";
import { ITransactionRequest } from "@/interfaces/transactionRequest";
import useTransactionForm from "../hooks/useTransactionForm";

interface ITransactionModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  transaction?: ITransaction;
  onSubmit: (data: ITransactionRequest) => void;
  categories: SelectOption[];
  types: SelectOption[];
  states: SelectOption[];
  accounts: SelectOption[];
}

export default function TransactionModal({
  isOpen,
  onClose,
  mode,
  transaction,
  onSubmit,
  categories,
  types,
  states,
  accounts,
}: ITransactionModalProps): React.ReactNode {
  const title = mode === "add" ? "Add Transaction" : "Edit Transaction";
  const submitButtonText = mode === "add" ? "Add Transaction" : "Save Changes";

  const { control, handleSubmit, errors, handleFormSubmit, handleCancel } =
    useTransactionForm({
      mode,
      transaction,
      onSubmit,
      onCancel: onClose,
    });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title} size="md">
      <form onSubmit={handleSubmit(handleFormSubmit)} className="p-6 space-y-6">
        {/* Subtitle */}
        <p className="text-sm text-[var(--color-text-gray)]">
          {mode === "add"
            ? "Add a new income or expense transaction to track your finances."
            : "Edit the transaction details below."}
        </p>

        {/* Type Field */}
        <FormFieldSelect<ITransactionRequest>
          label="Type"
          name="type"
          control={control}
          error={errors.type}
          placeholder="Select type"
          options={types}
        />

        {/* Category Field */}
        <FormFieldSelect<ITransactionRequest>
          label="Category"
          name="category"
          control={control}
          error={errors.category}
          placeholder="Select category"
          options={categories}
        />

        {/* Amount Field */}
        <FormFieldNumber<ITransactionRequest>
          label="Amount"
          name="amount"
          control={control}
          error={errors.amount}
          placeholder="0.00"
          min={0.01}
        />

        {/* Date Field */}
        <FormFieldDate<ITransactionRequest>
          label="Date"
          name="date"
          control={control}
          error={errors.date}
          placeholder="Select transaction date"
        />

        {/* Description Field */}
        <FormFieldTextarea<ITransactionRequest>
          label="Description"
          name="description"
          control={control}
          error={errors.description}
          placeholder="Add notes about this transaction..."
          isOptional
          rows={3}
        />

        {/* State Field */}
        <FormFieldSelect<ITransactionRequest>
          label="State"
          name="state"
          control={control}
          error={errors.state}
          placeholder="Select state"
          options={states}
        />

        {/* Account Field */}
        <FormFieldSelect<ITransactionRequest>
          label="Account"
          name="account"
          control={control}
          error={errors.account}
          placeholder="Select account"
          options={accounts}
        />

        {/* Action Buttons */}
        <div className="flex items-center justify-end space-x-3 pt-4">
          <Button type="button" variant="ghost" onClick={handleCancel}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            {submitButtonText}
          </Button>
        </div>
      </form>
    </Modal>
  );
}
