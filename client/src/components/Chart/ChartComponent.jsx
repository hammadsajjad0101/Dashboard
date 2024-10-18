import React from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
} from "chart.js/auto";

ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip
);

export default function ChartComponent({
  chartType,
  data,
  options,
  heading,
  detail,
  chartIcon,
}) {
  const Chart = chartType === "line" ? Line : Bar;

  return (
    <div className="component">
      <div className="component-header">
        <h5 className="component-heading">{heading}</h5>
        <div className="component-detail">
          <i>{chartIcon}</i>
          <h3>{detail}</h3>
        </div>
      </div>
      <div className="components-chart">
        <Chart data={data} options={options} />
      </div>
    </div>
  );
}
