import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AuthContextProvider = ({ children }) => {
  // States
  const [sidebarItem, setSidebarItem] = useState(
    JSON.parse(localStorage.getItem("sidebar")) || null
  );

  // Functions
  const updateSidebarItem = (data) => {
    setSidebarItem(data);
  };

  // Effects
  useEffect(() => {
    localStorage.setItem("sidebar", JSON.stringify(sidebarItem));
  }, [sidebarItem]);

  return (
    <AppContext.Provider value={{ sidebarItem, updateSidebarItem }}>
      {children}
    </AppContext.Provider>
  );
};
