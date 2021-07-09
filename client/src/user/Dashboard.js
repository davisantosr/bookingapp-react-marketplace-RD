import React from "react";

import DashboardNav from "../components/DashboardNav";

const Dashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <h1>Dashboard</h1>
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container">
        <p>Show All Books and a Button to browse hotels</p>
      </div>
    </>
  );
};

export default Dashboard;
