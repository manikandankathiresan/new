import React from "react";

export interface ITableHeader {
  label: string;
  value: string;
}

export interface ITableData {
  name: string;
  img: string;
  price: number;
  volume: number;
  suply: number;
}

interface ITableViewProps {
  tableHeader: ITableHeader[];
  tableData: ITableData[];
  renderColumn: (header: ITableHeader[], it: ITableData, idx: number) => JSX.Element;
}
const TableView = ({
  tableHeader,
  tableData,
  renderColumn,
}: ITableViewProps) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {tableHeader.map((it, index) => {
              return (
                <th key={index} scope="col" className="px-6 py-3">
                  {it.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tableData?.map((ite, index) => {
            return renderColumn(tableHeader, ite, index);
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TableView;
