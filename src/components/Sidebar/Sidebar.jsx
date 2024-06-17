import { Icon } from "@tremor/react";
import { sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../utils/context/AppContext";

const Sidebar = () => {
  const { sidebarItem, updateSidebarItem } = useContext(AppContext);

  const handleActiveList = (url) => {
    const elem = url.path.split("/")[1];

    updateSidebarItem(elem);
  };

  const isActive = (elem) => {
    return sidebarItem === elem.path.split("/")[1];
  };

  useEffect(() => {}, [sidebarItem]);

  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <h3 className="text-2xl font-bold">
          <span className="text-blue-500">Nexus</span>
          Node
        </h3>
      </header>

      <ul className="group-container h-[90%] overflow-auto pb-32 pt-4 border-y border-blue-50">
        {sidebar.map((_, i) => (
          <li key={i} className="group">
            {_.group && <p className="uppercase">{_.group}</p>}

            <ul className="group-element">
              {_.elements.map((elem, i) => (
                <Link
                  to={`${elem.path}`}
                  key={i}
                  className={`element ${
                    isActive(elem) ? "bg-blue-500" : "bg-white"
                  }`}
                  onClick={() => handleActiveList(elem)}
                >
                  <Icon
                    icon={elem.icon}
                    color="slate"
                    className={`s-icon ${
                      isActive(elem) ? "text-white" : "text-slate-600"
                    }`}
                  />
                  <span
                    className={`s-text s-icon ${
                      isActive(elem) ? "text-white" : "text-slate-600"
                    }`}
                  >
                    {elem.name}
                  </span>
                </Link>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
