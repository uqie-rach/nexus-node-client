import { Button } from "@tremor/react";

import AppRoutes from "./routes";

import "./App.css";
import { Navbar, Sidebar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AppContext } from "./utils/context/AppContext";

function App() {
  const { updateSidebarItem } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("popstate", () => {
      updateSidebarItem(window.location.pathname.split("/")[1]);
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="containers">
        {/* Sidebar */}
        <Sidebar />
        {/* Navbar */}
        <Navbar />

        {/* Router */}
        <div className="content">
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
