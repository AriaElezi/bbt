import PATHS from "src/routes/Paths";

const SidebarItems = [
  {
    path: PATHS.dashboard,
    icon: "icon-squares-four",
    name: "Übersicht",
    // roles: [],
  },
  {
    path: PATHS.orders,
    icon: "icon-file-text",
    name: "Aufträge",
    // roles: [],
  },
  {
    path: PATHS.administration,
    icon: "icon-book-open",
    name: "Verwaltung",
    // roles: [],
  },
  {
    path: PATHS.documents,
    icon: "icon-files",
    name: "Dokumente",
    // roles: [],
  },
  {
    path: PATHS.library,
    icon: "icon-books",
    name: "Bibliothek",
    // roles: [],
  },
  {
    path: PATHS.messages,
    icon: "icon-envelope-simple",
    name: "Systemnachrichten",
    // roles: [],
  },
];

export const useSidebarItems = () => {
  const sidebarItems = [...SidebarItems];

  return sidebarItems;
};

export default SidebarItems;