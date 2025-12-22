import React from "react";
import { datalistUp } from "../constants";

const Dashboard = () => {
  return (
    <section className="w-full h-full p-11 pt-6">
      <div className="w-full flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-1">Welcome back, Fandy</h1>
          <p className="font-semibold text-light">
            Now you can check and analisis your buisness stats, strategies and
            find new ways to grow up.
          </p>
        </div>
        <div className="flex justify-center gap-4 items-center">
          <button className="head-button">Export data</button>
          <button className="head-button active">Create report</button>
        </div>
      </div>
      <div>
        <div className="flex justify-between gap-4 items-center">
          {datalistUp.map((data) => (
            <div
              className="bg-dark p-4 w-full rounded-xl shadow-s"
              key={data.name}
            >
              <h3 className="text-sm opacity-50 mb-3">{data.name}</h3>
              <h2 className={"text-2xl font-semibold"}>{data.value}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
