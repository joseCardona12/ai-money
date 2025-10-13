import {
  IconDashboard,
  IconTransfer,
  IconWallet,
  IconTarget,
  IconChartBar,
  IconChartPie,
  IconRobot,
  IconSettings,
  IconHelp,
  IconLogout,
  IconMoon,
} from "@tabler/icons-react";

export const MENU_ITEMS = [
  { icon: IconDashboard, label: "Dashboard", href: "/dashboard/home" },
  {
    icon: IconTransfer,
    label: "Transactions",
    href: "/dashboard/transactions",
  },
  { icon: IconWallet, label: "Wallet", href: "/dashboard/wallet" },
  { icon: IconTarget, label: "Goals", href: "/dashboard/goals" },
  { icon: IconChartBar, label: "Budget", href: "/dashboard/budget" },
  { icon: IconChartPie, label: "Analytics", href: "/dashboard/analytics" },
  { icon: IconRobot, label: "AI Assistant", href: "/dashboard/ai-assistant" },
  { icon: IconSettings, label: "Settings", href: "/dashboard/settings" },
];

export const BOTTOM_MENU_ITEMS = [
  { icon: IconHelp, label: "Help", href: "/help" },
  { icon: IconLogout, label: "Log out", href: "/logout" },
  { icon: IconMoon, label: "Dark Mode", href: "#", isToggle: true },
];
