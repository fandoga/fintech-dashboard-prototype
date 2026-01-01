import React from "react";
import { datalistUp } from "../constants";

const DashTop = () => {
  return (
    <div className="flex justify-between gap-2 items-center">
      {datalistUp.map((data) => (
        <div
          className="bg-light p-4 w-full rounded-2xl shadow-s"
          key={data.name}
        >
          <h3 className="text-sm opacity-50 mb-3">{data.name}</h3>
          <h2 className={"text-2xl font-semibold"}>{data.value}</h2>
        </div>
      ))}
    </div>
  );
};

export default DashTop;
