"use client";

import React, { useEffect, useRef } from "react";

const chartOptions = {
  series: [
    {
      name: "Profit",
      data: [8, 11, 12, 10, 14, 17, 12],
    },
    {
      name: "Clients",
      data: [6.7, 7.8, 7.6, 6.9, 9.4, 13.2, 11.3],
    },
  ],
  chart: {
    height: 350,
    type: "area" as const,
    background: "transparent",
    stacked: true,
    toolbar: {
      show: false,
    },
  },
  legend: {
    position: "top" as const,
    horizontalAlign: "right" as const,
  },
  theme: {
    mode: "dark" as const,
  },
  colors: ["#fff", "rgb(255, 202, 78)"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth" as const,
  },
  fill: {
    type: "gradient" as const,
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.7,
      opacityTo: 0.9,
      stops: [0, 90, 100],
    },
  },
  grid: {
    borderColor: "rgba(247, 247, 247, 0.2)",
  },
  tooltip: {
    custom: function ({
      series,
      seriesIndex,
      dataPointIndex,
    }: {
      series: number[][];
      seriesIndex: number;
      dataPointIndex: number;
    }) {
      return (
        '<div class="bg-dark p-2 w-25 h-15 flex justify-between items-center">' +
        '<div class="bg-yellow-400 rounded-full w-9 h-9 flex justify-center items-center">' +
        "<p class='text-xl text-dark font-bold'>" +
        series[seriesIndex][dataPointIndex] +
        "</p>" +
        "</div>" +
        '<div class="bg-white rounded-full w-9 h-9 flex justify-center items-center">' +
        "<p class='text-xl text-dark font-bold'>" +
        series[seriesIndex + 1][dataPointIndex] +
        "</p>" +
        "</div>" +
        "</div>"
      );
    },
  },
  xaxis: {
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  },
};

const DashGraph = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && chartRef.current) {
      let chart: { destroy: () => void; render: () => void } | null = null;

      import("apexcharts").then((ApexCharts) => {
        chart = new ApexCharts.default(chartRef.current, chartOptions);
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
    <div className="bg-light rounded-2xl shadow-s p-4 max-w-5/8">
      <p className="text-sm opacity-50 mb-3">Total revenue</p>
      <h3 className="text-3xl">$250.8k</h3>
      <div ref={chartRef}></div>
    </div>
  );
};

export default DashGraph;
