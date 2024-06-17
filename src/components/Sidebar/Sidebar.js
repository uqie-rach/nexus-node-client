import {
  RiCalendarScheduleLine,
  RiContactsBook3Line,
  RiDashboard3Line,
  RiGroupLine,
  RiLayout2Line,
  RiListOrdered2,
  RiLogoutCircleLine,
  RiMicrosoftLine,
  RiPriceTag3Line,
  RiReceiptLine,
  RiStackedView,
  RiTableView,
  RiTaskLine,
  RiToolsLine,
  RiUser3Line,
} from "@remixicon/react";

export const sidebar = [
  {
    group: "essentials",
    elements: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: RiDashboard3Line,
      },
      {
        path: "/subjects",
        name: "Subjects",
        icon: RiMicrosoftLine,
      },
      {
        path: "/projects",
        name: "Projects",
        icon: RiStackedView,
      },
      {
        path: "/tasks",
        name: "Tasks",
        icon: RiListOrdered2,
      },
      {
        path: "/profile",
        name: "Profile",
        icon: RiUser3Line,
      },
    ],
  },
  {
    group: "pages",
    elements: [
      {
        path: "/pricing",
        name: "Pricing",
        icon: RiPriceTag3Line,
      },
      {
        path: "/calendar",
        name: "Calendar",
        icon: RiCalendarScheduleLine,
      },
      {
        path: "/todo",
        name: "Todo",
        icon: RiTaskLine,
      },
      {
        path: "/contact",
        name: "Contact",
        icon: RiContactsBook3Line,
      },
      {
        path: "/invoice",
        name: "Invoice",
        icon: RiReceiptLine,
      },
      {
        path: "/ui-elements",
        name: "UI Elements",
        icon: RiLayout2Line,
      },
      {
        path: "/team",
        name: "Team",
        icon: RiGroupLine,
      },
      {
        path: "/table",
        name: "Table",
        icon: RiTableView,
      },
    ],
  },
  {
    group: "utilities",
    elements: [
      {
        path: "/settings",
        name: "Settings",
        icon: RiToolsLine,
      },
      {
        path: "/logout",
        name: "Logout",
        icon: RiLogoutCircleLine,
      },
    ],
  },
];
