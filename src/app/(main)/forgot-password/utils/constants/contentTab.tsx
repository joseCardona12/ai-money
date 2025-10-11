import { ReactElement } from "react";
import { IconEmail, IconPhone } from "../../../../../../public/icons";

export interface IContentTab {
  icon: ReactElement;
  text: string;
  active: boolean;
  tab_key: string;
}

export const CURRENT_CONTENT_TAB: IContentTab[] = [
  {
    active: true,
    icon: <IconEmail />,
    tab_key: "email",
    text: "Email",
  },
  {
    active: false,
    icon: <IconPhone />,
    tab_key: "phone",
    text: "Phone",
  },
];
