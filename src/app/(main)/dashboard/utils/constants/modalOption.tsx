import { IModalOption } from "@/interfaces/ModalOption";
import { IconSettings, IconUser } from "../../../../../../public/icons";

export const USER_MODAL_OPTIONS: IModalOption[] = [
  {
    title: "My account",
    icon: <IconUser className="text-sm text-[var(--color-text-gray)]" />,
    text: "Profile",
    url: "/dashboard/my-account",
  },
  {
    title: "Settings",
    icon: <IconSettings className="text-sm text-[var(--color-text-gray)]" />,
    text: "Settings",
    url: "/dashboard/settings",
  },
];
