import React from "react";

const Dates = ({ invoiceNumber, invoiceDate, dueDate }) => {
  return (
    <>
      <article className="mt-10 mb-15 flex  items-end justify-end">
        <ul>
          <li className="p-1">
            <span className="font-bold">Invoice Number:</span>
            {invoiceNumber}
          </li>
          <li className=" p-1 bg-gray-200 ">
            <span className="font-bold"> Invoice Date:</span>
            {invoiceDate}
          </li>
          <li className="p-1">
            <span className="font-bold">Due date:</span>
            {dueDate}
          </li>
        </ul>
      </article>
    </>
  );
};

export default Dates;
