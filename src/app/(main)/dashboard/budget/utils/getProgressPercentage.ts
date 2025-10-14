export const getProgressPercentage = (
  spent: number,
  budgeted: number
): number => {
  return Math.min((spent / budgeted) * 100, 100);
};
