import React from "react";
import TableView, { ITableData, ITableHeader } from "../../components/table";
import { assetsTableHeader, tableData } from "../../utils/constants";

const AssetsTable = () => {
  const renderColumn = (
    header: ITableHeader[],
    it: ITableData,
    idx: number
  ) => {
    return (
      <tr>
        {header.map((thead, index) => {
          return (
            <td key={index} className="px-6 py-4">
              {thead.value === "sno" ? (
                (idx += 1)
              ) : thead.value === "name" ? (
                <div>
                  <img
                    className="coin-logo"
                    style={{
                      height: "24px",
                      width: "24px",
                      borderRadius: "12px",
                    }}
                    src={it.img}
                    alt="icon"
                  />
                  {it.name}
                </div>
              ) : thead.value === "price" ? (
                <div
                  style={{
                    color: `${
                      it.price > 500 && it.price <= 1000 ? "red" : "green"
                    }`,
                  }}
                >
                  $ {it.price}
                </div>
              ) : thead.value === "volume" ? (
                it.volume
              ) : thead.value === "suply" ? (
                it.suply
              ) : null}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <>
      <TableView
        tableHeader={assetsTableHeader}
        tableData={tableData}
        renderColumn={renderColumn}
      />
    </>
  );
};

export default AssetsTable;
