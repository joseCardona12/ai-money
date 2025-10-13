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
  { icon: IconDashboard, label: "Dashboard", active: true, href: "/dashboard" },
  {
    icon: IconTransfer,
    label: "Transactions",
    active: false,
    href: "/transactions",
  },
  { icon: IconWallet, label: "Wallet", active: false, href: "/wallet" },
  { icon: IconTarget, label: "Goals", active: false, href: "/goals" },
  { icon: IconChartBar, label: "Budget", active: false, href: "/budget" },
  { icon: IconChartPie, label: "Analytics", active: false, href: "/analytics" },
  {
    icon: IconRobot,
    label: "AI Assistant",
    active: false,
    href: "/ai-assistant",
  },
  { icon: IconSettings, label: "Settings", active: false, href: "/settings" },
];

export const BOTTOM_MENU_ITEMS = [
  { icon: IconHelp, label: "Help", href: "/help" },
  { icon: IconLogout, label: "Log out", href: "/logout" },
  { icon: IconMoon, label: "Dark Mode", href: "#", isToggle: true },
];
