import React from "react";
import ChartComponent from "./ChartComponent";
import { FaRegBell } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { LuSend } from "react-icons/lu";

const lineData = {
  labels: ["JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
  datasets: [
    {
      data: [80, 100, 70, 80, 120, 80],
      borderColor: "#1f8ef1",
      tension: 0.4,
    },
  ],
};

const barData = {
  labels: ["USA", "GER", "AUS", "UK", "RO", "BR"],
  datasets: [
    {
      data: [53, 20, 10, 80, 100, 45],
      backgroundColor: "transparent",
      borderColor: "#d62cd3",
      borderWidth: 2,
      tension: 0.5,
    },
  ],
};

const line2Data = {
  labels: ["JUL", "AUG", "SEP", "OCT", "NOV"],
  datasets: [
    {
      data: [90, 30, 60, 20, 80],
      borderColor: "#1ac5b1",
      tension: 0.4,
    },
  ],
};

const options1 = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: "#1f8ef1",
        lineWidth: 0.1,
      },
      ticks: {
        padding: 15,
      },
    },
    y: {
      min: 60,
      max: 130,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 10,
      },
    },
  },
};

const options2 = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: "#d62cd3",
        lineWidth: 0.1,
      },
      ticks: {
        padding: 15,
      },
    },
    y: {
      min: 0,
      max: 120,
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: "#d62cd3",
        lineWidth: 0.1,
      },
      ticks: {
        stepSize: 20,
      },
    },
  },
};

const options3 = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      border: {
        display: false,
      },
      grid: {
        display: true,
        color: "#1ac5b1",
        lineWidth: 0.1,
      },
      ticks: {
        padding: 15,
      },
    },
    y: {
      min: 0,
      max: 140,
      border: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        stepSize: 20,
        padding: 5,
      },
    },
  },
};

export default function Charts() {
  return (
    <div className="container m-0 p-0">
      <div className="charts">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ChartComponent
              chartType="line"
              data={lineData}
              options={options1}
              heading="Total Shipments"
              detail="763,215"
              chartIcon={<FaRegBell className="chart-1-icon" />}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ChartComponent
              chartType="bar"
              data={barData}
              options={options2}
              heading="Monthly Sales"
              detail="3500€"
              chartIcon={<TbTruckDelivery className="chart-2-icon" />}
            />
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-4">
            <ChartComponent
              chartType="line"
              data={line2Data}
              options={options3}
              heading="Monthly Sales"
              detail="12000K"
              chartIcon={<LuSend className="chart-3-icon" />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
