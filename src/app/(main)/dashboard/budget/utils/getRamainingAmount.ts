export const getRemainingAmount = (spent: number, budgeted: number): number => {
  return budgeted - spent;
};
