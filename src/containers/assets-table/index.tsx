import React, { useEffect, useState } from "react";
import TableView, { ITableHeader } from "../../components/table";
import { assetsTableHeader } from "../../utils/constants";

const AssetsTable = () => {
  const [coins, setCoins] = useState(null);
  const getData = async () => {
    const resp = await fetch("https://api.coinstats.app/public/v1/coins");
    const res = await resp.json();
    setCoins(res.coins);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderColumn = (header: ITableHeader[], it: any, idx: number) => {
    return (
      <tr
        key={idx}
        onClick={() => alert(it.symbol)}
        style={{ cursor: "pointer" }}
      >
        {header.map((thead, index) => {
          return (
            <td key={index} className="px-6 py-4">
              {thead.value === "sno" ? (
                (idx += 1)
              ) : thead.value === "name" ? (
                <div
                  className="assets-name"
                  style={{ display: "flex", marginRight: "2px" }}
                >
                  <div className="img-logo" style={{ marginRight: "10px" }}>
                    <img
                      className="coin-logo"
                      style={{
                        height: "24px",
                        width: "24px",
                        borderRadius: "12px",
                      }}
                      src={it.icon}
                      alt="icon"
                    />
                  </div>
                  <div>{it.name}</div>
                </div>
              ) : thead.value === "symbol" ? (
                it.symbol
              ) : thead.value === "rank" ? (
                it.rank
              ) : thead.value === "price" ? (
                <div>$ {it.price}</div>
              ) : thead.value === "volume" ? (
                it.volume
              ) : thead.value === "oneday" ? (
                <div
                  style={{
                    color: `${it.priceChange1d < 0 ? "red" : "green"}`,
                  }}
                >
                  {it.priceChange1d}
                </div>
              ) : thead.value === "onehour" ? (
                <div
                  style={{
                    color: `${it.priceChange1h < 0 ? "red" : "green"}`,
                  }}
                >
                  {it.priceChange1h}
                </div>
              ) : thead.value === "oneweek" ? (
                <div
                  style={{
                    color: `${it.priceChange1w < 0 ? "red" : "green"}`,
                  }}
                >
                  {it.priceChange1w}
                </div>
              ) : thead.value === "suply" ? (
                it.totalSupply
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
        tableData={coins}
        renderColumn={renderColumn}
      />
    </>
  );
};

export default AssetsTable;
