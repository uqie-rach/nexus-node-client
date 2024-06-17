import { Button } from "@tremor/react";

import AppRoutes from "./routes";

import "./App.css";
import { Navbar, Sidebar } from "./components";
import { BrowserRouter } from "react-router-dom";

function App() {
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
