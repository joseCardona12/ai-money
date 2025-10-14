"use client";
import Modal from "@/ui/components/Modal";
import Button from "@/ui/components/Button";
import FormFieldSelect from "@/ui/components/FormFieldSelect";
import FormFieldNumber from "@/ui/components/FormFieldNumber";
import useBudgetForm from "../hooks/useBudgetForm";
import { IBudgetCategory } from "../types/budget";
import { IBudgetRequest } from "@/interfaces/budgetRequest";
import { SelectOption } from "@/interfaces/selectOption";

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit";
  category?: IBudgetCategory;
  onSubmit: (data: IBudgetRequest) => void;
  availableCategories: SelectOption[];
}

export default function AddCategoryModal({
  isOpen,
  onClose,
  mode,
  category,
  onSubmit,
  availableCategories,
}: AddCategoryModalProps): React.ReactNode {
  // Set default values based on mode and category
  const defaultValues =
    mode === "edit" && category
      ? {
          category: category.name
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/&/g, ""),
          monthlyBudget: category.budgeted,
        }
      : undefined;

  const { control, handleSubmit, errors, handleCancel } = useBudgetForm({
    onSubmit,
    onCancel: onClose,
    defaultValues,
  });

  if (!isOpen) return null;

  const title = mode === "add" ? "Add Budget Category" : "Edit Budget Category";
  const submitText = mode === "add" ? "Add Budget" : "Update Budget";

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <div className="p-6">
        <p className="text-sm text-gray-600 mb-6">
          Set a monthly budget limit for a spending category.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <FormFieldSelect<IBudgetRequest>
            label="Category"
            name="category"
            control={control}
            error={errors.category}
            placeholder="Select category"
            options={availableCategories}
          />

          {/* Monthly Budget */}
          <FormFieldNumber<IBudgetRequest>
            label="Monthly Budget"
            name="monthlyBudget"
            control={control}
            error={errors.monthlyBudget}
            placeholder="0.00"
          />

          <div className="text-sm text-gray-500 mt-2">
            Set how much you want to spend in this category per month
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-end gap-3 pt-4 border-t border-gray-200">
            <Button variant="outline" onClick={handleCancel}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              {submitText}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
