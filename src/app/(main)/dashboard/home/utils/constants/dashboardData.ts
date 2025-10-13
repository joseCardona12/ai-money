import {
  IconPlus,
  IconArrowUpRight,
  IconTarget,
  IconAlertTriangle,
  IconBulb,
} from "@tabler/icons-react";

export const STATS_CARDS = [
  {
    title: "Total balance",
    amount: "$16,500.00",
    currency: "USD",
    change: "+20%",
    changeText: "you have extra $1,700 compared to last month",
    positive: true,
  },
  {
    title: "Income",
    amount: "$16,500.00",
    currency: "USD",
    change: "+20%",
    changeText: "you have extra $1,700 compared to last month",
    positive: true,
  },
  {
    title: "Expenses",
    amount: "$16,500.00",
    currency: "USD",
    change: "+20%",
    changeText: "you have extra $1,700 compared to last month",
    positive: true,
  },
];

export const CHART_DATA = [
  { month: "Jan", budget: 200, expense: 180 },
  { month: "Feb", budget: 250, expense: 220 },
  { month: "Mar", budget: 300, expense: 280 },
  { month: "Apr", budget: 350, expense: 320 },
  { month: "May", budget: 400, expense: 380 },
  { month: "Jun", budget: 450, expense: 420 },
  { month: "Jul", budget: 500, expense: 480 },
  { month: "Aug", budget: 550, expense: 520 },
  { month: "Sep", budget: 600, expense: 580 },
  { month: "Oct", budget: 650, expense: 620 },
  { month: "Nov", budget: 700, expense: 680 },
  { month: "Dec", budget: 750, expense: 720 },
];

export const TRANSACTIONS_DATA = [
  {
    id: 1,
    name: "Gym",
    date: "03 august",
    amount: "$56.50",
    icon: "🏋️",
    color: "var(--color-orange)",
  },
  {
    id: 2,
    name: "Uber",
    date: "03 august",
    amount: "$56.50",
    icon: "🚗",
    color: "var(--color-purple)",
  },
  {
    id: 3,
    name: "Netflix",
    date: "03 august",
    amount: "$56.50",
    icon: "📺",
    color: "var(--color-blue)",
  },
  {
    id: 4,
    name: "Gym",
    date: "03 august",
    amount: "$56.50",
    icon: "🏋️",
    color: "var(--color-orange)",
  },
  {
    id: 5,
    name: "Uber",
    date: "03 august",
    amount: "$56.50",
    icon: "🚗",
    color: "var(--color-purple)",
  },
  {
    id: 6,
    name: "Netflix",
    date: "03 august",
    amount: "$56.50",
    icon: "📺",
    color: "var(--color-blue)",
  },
  {
    id: 7,
    name: "Gym",
    date: "03 august",
    amount: "$56.50",
    icon: "🏋️",
    color: "var(--color-orange)",
  },
  {
    id: 8,
    name: "Gym",
    date: "03 august",
    amount: "$56.50",
    icon: "🏋️",
    color: "var(--color-orange)",
  },
  {
    id: 9,
    name: "Gym",
    date: "03 august",
    amount: "$56.50",
    icon: "🏋️",
    color: "var(--color-orange)",
  },
];

export const ALERTS_DATA = [
  {
    id: 1,
    type: "warning",
    icon: IconAlertTriangle,
    message: "You spent 26% more on restaurants this month.",
    color: "var(--color-orange)",
  },
  {
    id: 2,
    type: "tip",
    icon: IconBulb,
    message: "You could save $350 if you reduce leisure spending.",
    color: "var(--color-green)",
  },
];

export const QUICK_ACTIONS_DATA = [
  {
    id: 1,
    title: "Add Income",
    icon: IconPlus,
    color: "var(--color-green)",
    bgColor: "var(--color-green-light)",
  },
  {
    id: 2,
    title: "Add Expense",
    icon: IconArrowUpRight,
    color: "var(--color-red)",
    bgColor: "var(--color-red-light)",
  },
  {
    id: 3,
    title: "Transfer",
    icon: IconArrowUpRight,
    color: "var(--color-blue)",
    bgColor: "var(--color-blue-light)",
  },
  {
    id: 4,
    title: "New Goal",
    icon: IconTarget,
    color: "var(--color-purple)",
    bgColor: "var(--color-purple-light)",
  },
];

export const CHART_CONFIG = {
  maxValue: 800,
  height: 192, // h-48 in pixels
};
