export const chartOptions = {
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
export const barOptions = {
  series: [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66, 72, 68, 70],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 94, 91, 99, 94, 88, 76, 84],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 46, 52, 59],
    },
  ],
  chart: {
    type: "bar",
    height: 170,
    background: "transparent",
    toolbar: {
      show: false,
    },
  },
  colors: ["#fff", "rgb(255, 202, 78)", "rgb(255, 97, 139)"],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "45%",
      borderRadius: 2,
      borderRadiusApplication: "end",
    },
  },
  theme: {
    mode: "dark" as const,
  },
  grid: {
    borderColor: "rgba(247, 247, 247, 0.2)",
  },
  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    show: true,
    width: 2,
    colors: ["transparent"],
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
  yaxis: {
    max: 100,
  },
  fill: {
    opacity: 1,
  },
  tooltip: {
    y: {
      formatter: function (val: string) {
        return "$ " + val + " thousands";
      },
    },
  },
};
