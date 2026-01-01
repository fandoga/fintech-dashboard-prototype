import React, { useEffect, useRef } from "react";
import { barOptions } from "../charts";

const DashChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      let chart: { destroy: () => void; render: () => void } | null = null;

      import("apexcharts").then((ApexCharts) => {
        chart = new ApexCharts.default(chartRef.current, barOptions);
        chart.render();
      });

      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }
  }, []);

  return (
    <div className="bg-light rounded-2xl shadow-s p-4 col-span-5">
      <p className="text-sm opacity-50 mb-3">Total profit</p>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DashChart;
