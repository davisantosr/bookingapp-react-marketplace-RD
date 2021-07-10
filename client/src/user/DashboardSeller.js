import React from "react";

import DashboardNav from "../components/DashboardNav";
import ConnectNav from "../components/ConnectNav";

const DashboardSeller = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>
      <div className="container-fluid p-4">
        <DashboardNav />
      </div>

      <div className="container">
        <p>Show All hotels user have posted and button to add new </p>
      </div>
    </>
  );
};

export default DashboardSeller;
