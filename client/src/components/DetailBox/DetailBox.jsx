// import React from "react";
// import DetailBoxComponent from "./DetailBoxComponent";
// import { BiSolidMessageRounded } from "react-icons/bi";
// import { FaRegStar } from "react-icons/fa";
// import { BsPerson } from "react-icons/bs";
// import { TbHexagons } from "react-icons/tb";
// import { IoReload } from "react-icons/io5";
// import { TbActivityHeartbeat } from "react-icons/tb";
// import { CiTrophy } from "react-icons/ci";
// import { BsSmartwatch } from "react-icons/bs";

// export default function DetailBox() {
//   return (
//     <div className="boxes-flex">
//       <DetailBoxComponent
//         boxIcon={<BiSolidMessageRounded className="icon1" />}
//         boxHeading1="Number"
//         boxHeading2="150GB"
//         footerIcon={<IoReload />}
//         footerText="Update Now"
//       />
//       <DetailBoxComponent
//         boxIcon={<FaRegStar className="icon2" />}
//         boxHeading1="Follwers"
//         boxHeading2="+45k"
//         footerIcon={<TbActivityHeartbeat />}
//         footerText="Last Research"
//       />
//       <DetailBoxComponent
//         boxIcon={<BsPerson className="icon3" />}
//         boxHeading1="Users"
//         boxHeading2="150,000"
//         footerIcon={<CiTrophy />}
//         footerText="Customers feedback"
//       />
//       <DetailBoxComponent
//         boxIcon={<TbHexagons className="icon4" />}
//         boxHeading1="Errors"
//         boxHeading2="12"
//         footerIcon={<BsSmartwatch />}
//         footerText="In the last hours"
//       />
//     </div>
//   );
// }

import React from "react";
import DetailBoxComponent from "./DetailBoxComponent";
import { BiSolidMessageRounded } from "react-icons/bi";
import { FaRegStar } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { TbHexagons } from "react-icons/tb";
import { IoReload } from "react-icons/io5";
import { TbActivityHeartbeat } from "react-icons/tb";
import { CiTrophy } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";

export default function DetailBox() {
  return (
    <div className="container m-0 p-0">
      <div className="boxes">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DetailBoxComponent
              boxIcon={<BiSolidMessageRounded className="icon1" />}
              boxHeading1="Number"
              boxHeading2="150GB"
              footerIcon={<IoReload />}
              footerText="Update Now"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DetailBoxComponent
              boxIcon={<FaRegStar className="icon2" />}
              boxHeading1="Followers"
              boxHeading2="+45k"
              footerIcon={<TbActivityHeartbeat />}
              footerText="Last Research"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DetailBoxComponent
              boxIcon={<BsPerson className="icon3" />}
              boxHeading1="Users"
              boxHeading2="150,000"
              footerIcon={<CiTrophy />}
              footerText="Customers feedback"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DetailBoxComponent
              boxIcon={<TbHexagons className="icon4" />}
              boxHeading1="Errors"
              boxHeading2="12"
              footerIcon={<BsSmartwatch />}
              footerText="In the last hours"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
