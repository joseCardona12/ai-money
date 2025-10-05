import { IProvider } from "@/interfaces/provider";
import {
  IconGithub,
  IconGoogle,
  IconMicrosoft,
} from "../../../../../../public/icons";

export const CURRENT_PROVIDERS: IProvider[] = [
  {
    provider: "oauth_github",
    url: "/github",
    icon: <IconGithub />,
  },
  {
    provider: "oauth_google",
    url: "/google",
    icon: <IconGoogle />,
  },
  {
    provider: "oauth_microsoft",
    url: "/microsoft",
    icon: <IconMicrosoft />,
  },
];
