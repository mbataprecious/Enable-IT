import { ReactComponent as Store } from "./assets/icons/u_store.svg";
import { ReactComponent as Folder } from "./assets/icons/u_folder-open.svg";
import { ReactComponent as Users } from "./assets/icons/u_users-alt.svg";
import { ReactComponent as Notebook } from "./assets/icons/u_notebooks.svg";
import { ReactComponent as Dashboard } from "./assets/icons/u_home-alt.svg";
import { ReactComponent as Message } from "./assets/icons/u_message.svg";
import { ReactComponent as Report } from "./assets/icons/fi_bar-chart-2.svg";
import { ReactComponent as Settings } from "./assets/icons/u_setting.svg";

export const menuList = [
  {
    Icon: Dashboard,
    route: "/dashboard",
  },
  {
    Icon: Store,
    route: "/autocenter",
  },
  {
    Icon: Notebook,
    route: "/form",
  },
  {
    Icon: Folder,
    route: "/resource",
  },
  {
    Icon: Message,
    route: "/dispatch",
  },
  {
    Icon: Users,
    route: "/group",
  },
  {
    Icon: Report,
    route: "/report",
  },
  {
    Icon: Settings,
    route: "/setting",
  },
];

export interface User {
  ID: string;
  JobTitle: string;
  EmailAddress?: string;
  FirstNameLastName: string;
  Email: string;
  Phone: string;
  Company: string;
}
