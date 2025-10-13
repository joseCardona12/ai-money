export const formatAmount = (amount: number, type: "income" | "expense") => {
  const formattedAmount = `$${amount.toFixed(2)}`;
  return type === "income" ? `+${formattedAmount}` : `-${formattedAmount}`;
};
