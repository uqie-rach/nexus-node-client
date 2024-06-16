import {
  RiCalendarScheduleLine,
  RiContactsBook3Line,
  RiDashboard3Line,
  RiGroupLine,
  RiHeart2Line,
  RiLayout2Line,
  RiListOrdered2,
  RiLogoutCircleLine,
  RiMailUnreadLine,
  RiMicrosoftLine,
  RiPriceTag3Line,
  RiReceiptLine,
  RiStackedView,
  RiTableView,
  RiTaskLine,
  RiToolsLine,
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
        path: "/products",
        name: "Products",
        icon: RiMicrosoftLine,
      },
      {
        path: "/favorites",
        name: "Favorites",
        icon: RiHeart2Line,
      },
      {
        path: "/inbox",
        name: "Inbox",
        icon: RiMailUnreadLine,
      },
      {
        path: "/order-lists",
        name: "Order Lists",
        icon: RiListOrdered2,
      },
      {
        path: "/product-stock",
        name: "Product Stock",
        icon: RiStackedView,
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
