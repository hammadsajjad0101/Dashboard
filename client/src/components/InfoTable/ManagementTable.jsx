import React from "react";
import TableComponent from "./TableComponent";
import tablePic from "../../images/table-pic.jpg";

export default function ManagementTable() {
  const tasksData = [
    {
      image: tablePic,
      name: "Tania Mike",
      position: "Developer",
      progress: 25,
      salary: "99,225",
    },
    {
      image: tablePic,
      name: "John Doe",
      position: "CEO",
      progress: 77,
      salary: "89,241",
    },
    {
      image: tablePic,
      name: "Alexa Mike",
      position: "Designer",
      progress: 41,
      salary: "92,144",
    },
    {
      image: tablePic,
      name: "Jana Monday",
      position: "Marketing",
      progress: 50,
      salary: "49,290",
    },
    {
      image: tablePic,
      name: "Paul Dickens",
      position: "Developer",
      progress: 100,
      salary: "69,201",
    },
  ];
  return (
    <div>
      <TableComponent tasks={tasksData} />
    </div>
  );
}
