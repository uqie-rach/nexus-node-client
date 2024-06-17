import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // States
  const [sidebarItem, setSidebarItem] = useState(
    window.location.pathname.split("/")[1]
  );

  // Functions
  const updateSidebarItem = (data) => {
    setSidebarItem(data);
  };

  // Effects
  useEffect(() => {}, [sidebarItem, window.location.pathname.split("/")[1]]);

  return (
    <AppContext.Provider value={{ sidebarItem, updateSidebarItem }}>
      {children}
    </AppContext.Provider>
  );
};
