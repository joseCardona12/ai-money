export const isOverBudget = (spent: number, budgeted: number): boolean => {
  return spent > budgeted;
};
