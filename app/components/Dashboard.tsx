import React from "react";
import DashTop from "./DashTop";
import DashGraph from "./DashGraph";

const Dashboard = () => {
  return (
    <section className="w-full h-full p-[40px] pt-6">
      <div className="w-full flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, Fandy</h1>
          <p className="font-semibold text-light">
            Now you can check and analyse your buisness stats, strategies and
            find new ways to grow up.
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <button className="head-button">Export data</button>
          <button className="head-button active">Create report</button>
        </div>
      </div>
      <div className="bg-dark p-[12px] mx-[-12px] rounded-xl flex flex-col gap-3">
        <DashTop />
        <DashGraph />
      </div>
    </section>
  );
};

export default Dashboard;
