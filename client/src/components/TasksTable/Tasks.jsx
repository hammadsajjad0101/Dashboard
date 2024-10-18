import React from "react";
import TaskComponent from "./TaskComponent";

const tasksData = [
  {
    title: "Update the documentation",
    description: (
      <>
        Dwuamish Head, Seattle, WA 8:47 AM
      </>
    ),
  },
  {
    title: "GDPR Compliance",
    description: (
      <>
        The GDPR is a regulation that requires businesses to protect <br /> the
        personal data and privacy of Europe citizens for transactions <br /> that occur
        within EU member states.
        Learn more about compliance.
      </>
    ),
  },
  {
    title: "Solve the issues",
    description: (
      <>
        Fifty percent of all respondents said they would be more likely <br /> to shop
        at a company.
        Take immediate action.
      </>
    ),
  },
  {
    title: "Release v2.0.0",
    description: (
      <>
        Ra Ave SW, Seattle, WA 98116, SUA <br /> 11:19 AM
      </>
    ),
  },
  {
    title: "Export the processed files",
    description: (
      <>
        The report also shows that consumers will not easily forgive <br /> a company
        once a breach exposing their personal data occurs. <br />
        Critical task.
      </>
    ),
  },
  {
    title: "Arival at export process",
    description: (
      <>
        Capitol Hill, Seattle, WA <br /> 12:34 AM
      </>
    ),
  },
];

export default function App() {
  return (
    <TaskComponent tasks={tasksData} headerText="TASKS(5)" dateRange="Today" />
  );
}
