import { RiBox1Fill } from "@remixicon/react";
import { Card, Icon } from "@tremor/react";
import React from "react";
import { mockDashboard } from "./dashboard";

const Dashboard = () => {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-10">Dashboard</h1>

      <div className="flex items-center gap-4">
        {mockDashboard.map((item, i) => (
          <Card className="shadow-tremor-card w-1/4 flex gap-4 justify-between">
            <div>
              <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mb-2">
                {item.category}
              </p>
              <p className="text-3xl text-tremor-content-strong dark:text-dark-tremor-content-strong font-semibold">
                {item.count}
              </p>
            </div>
            <Icon icon={item.icon} size="xl" variant="light" color={item.color} className="rounded-xl w-[64px]" />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Dashboard;
