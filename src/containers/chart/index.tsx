import React, { useEffect, useRef } from "react";
import { Line } from "react-chartjs-2";
import rawData from "./data.json";

const Chart = () => {
  const data = {
    labels: rawData.map((it) => it.date),
    datasets: [
      {
        label: "First dataset",
        data: rawData.map((it) => it.value),
        fill: false,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };

  return (
    <div className="chart">
      <Line data={data} />
    </div>
  );
};

export default Chart;
