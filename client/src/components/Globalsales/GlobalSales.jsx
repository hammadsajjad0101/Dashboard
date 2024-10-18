import React from "react";
import salesData from "./salesData";
import SalesMap from "./SalesMap";
// import usaFlag from "../../../images/flag-icons/united-states.png";
// import germanyFlag from "../../../images/flag-icons/germany.png";
// import australiaFlag from "../../../images/flag-icons/australia.png";
// import ukFlag from "../../../images/flag-icons/united-kingdom.png";
// import romaniaFlag from "../../../images/flag-icons/romania.png";
// import brazilFlag from "../../../images/flag-icons/brazil.png";

// const flagImages = {
//   "united-states": usaFlag,
//   germany: germanyFlag,
//   australia: australiaFlag,
//   "united-kingdom": ukFlag,
//   romania: romaniaFlag,
//   brazil: brazilFlag,
// };

export default function GlobalSales() {
  return (
    <div className="container m-0 p-0">
      <div
        className="sales-container d-flex align-items-center"
        style={{ width: "88vw" }}
      >
        <div>
          <div className="sales-header-container p-3">
            <h5 className="pb-1">Global Sales By Top Locations</h5>
            <h6>All products that were shipped</h6>
          </div>

          <table className="sales-table container">
            <tbody>
              {salesData.map((data, index) => (
                <tr key={index}>
                  <td>
                    <img src="" alt={data.country} className="table-image" />
                  </td>
                  <td>{data.country}</td>
                  <td>{data.productQuantity}</td>
                  <td>{data.salesPercentage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <SalesMap salesData={salesData} />
      </div>
    </div>
  );
}
