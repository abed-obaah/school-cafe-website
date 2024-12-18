import React from "react";
import Logo1 from "../../assets/logo02.svg";
import Logo2 from "../../assets/logo01.svg";

const TableComponent = () => {
  // Row data to render dynamically
  const tableRows = new Array(8).fill({
    label: "Number Of Faculties",
    deltaFaculties: "12 Faculties",
    lagosFaculties: "7 Faculties",
  });

  return (
    <div className="p-4 flex justify-center items-center">
      <table className="table-auto w-full border border-gray-300 text-left text-sm">
        {/* Table Header */}
        <thead>
          <tr className="text-center font-bold">
            <th className="border border-gray-300 p-4 w-1/2">
              <div className="flex flex-col items-center">
                <img
                  src={Logo1}
                  alt="Delta State University"
                  className="w-12 h-12 mb-2"
                />
                <span>DELTA STATE UNIVERSITY</span>
              </div>
            </th>
            <th className="border border-gray-300 p-4 w-1/2">
              <div className="flex flex-col items-center">
                <img
                  src={Logo2}
                  alt="University of Lagos"
                  className="w-12 h-12 mb-2"
                />
                <span>UNIVERSITY OF LAGOS</span>
              </div>
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-yellow-100" : ""}>
              <td className="border border-gray-300 p-4 font-semibold text-left w-1/2">
                {row.label}
              </td>
              <td className="border border-gray-300 p-4 text-center w-1/4">
                {row.deltaFaculties}
              </td>
              <td className="border border-gray-300 p-4 text-center w-1/4">
                {row.lagosFaculties}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
