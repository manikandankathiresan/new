import React from "react";
import AssetsTable from "../../containers/assets-table";

const AppLayout = () => {
  return (
    <>
        <div className="grid grid-flow-row">
            <AssetsTable />
            <div className="col-span-2">01</div>
            <div className="col-span-2">02</div>
        </div>
    </>
  );
};

export default AppLayout;
