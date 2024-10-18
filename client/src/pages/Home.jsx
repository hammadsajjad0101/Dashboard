import React from "react";
import PerformanceChart from "../components/Chart/PerformanceChart";
import Charts from "../components/Chart/Charts";
import DetailBox from "../components/DetailBox/DetailBox";
import Tasks from "../components/TasksTable/Tasks";
import ManagementTable from "../components/InfoTable/ManagementTable";
import GlobalSales from "../components/Globalsales/GlobalSales";
export default function Home() {
  return (
    <div className="home">
      <PerformanceChart />
      <DetailBox />
      <Charts />
      <div className="task-table-wrapper container m-0 p-0">
        <div className="row" style={{ width: "89.5vw" }}>
          <div className="col-lg-5 col-12">
            <Tasks />
          </div>
          <div className="col-lg-7 col-12">
            <ManagementTable />
          </div>
        </div>
      </div>
      <GlobalSales />
    </div>
  );
}
