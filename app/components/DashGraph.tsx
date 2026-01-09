"use client";

import React, { useEffect, useRef } from "react";
import { getChartOptions } from "../charts";
import { useBreakpoints } from "../hooks/useMediaQuery";

const DashGraph = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const { isDesktop, isQuadHD } = useBreakpoints();

  const chartHeight = isQuadHD ? 350 : 250;

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      let chart: { destroy: () => void; render: () => void } | null = null;

      import("apexcharts").then((ApexCharts) => {
        const options = getChartOptions(chartHeight);
        chart = new ApexCharts.default(chartRef.current, options);
        chart.render();
      });

      return () => {
        if (chart) {
          chart.destroy();
        }
      };
    }
  }, [chartHeight]);

  return (
    <div className="bg-light rounded-2xl shadow-s p-4 col-span-5">
      <p className="text-sm opacity-50 mb-3">Total revenue</p>
      <h3 className="text-3xl font-semibold">$250.8k</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DashGraph;
