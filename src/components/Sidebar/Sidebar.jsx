import { Icon } from "@tremor/react";
import { sidebar } from "./Sidebar";
import { Link } from "react-router-dom";

import "./Sidebar.css";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState(window.location.pathname.split("/")[1]);

  const handleActiveList = (elem) => {
    setActive(elem.path.split("/")[1]);
  };

  const isActive = (elem) => {
    return active === elem.path.split("/")[1];
  };
  return (
    <aside className="sidebar">
      <header className="sidebar__header">
        <h3 className="text-2xl font-bold">
          <span className="text-blue-500">Dash</span>
          Stack
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
