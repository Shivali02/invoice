import React from "react";

const Table = ({ list, total }) => {
  return (
    <>
      <table width="100%" className="mb-10 mt-16">
        <thead>
          <tr className="bg-gray-200">
            <td className="font-bold">Description</td>
            <td className="font-bold">Quantity</td>
            <td className="font-bold">Price</td>
            <td className="font-bold">Amount</td>
          </tr>
        </thead>
        {list.map(({ id, description, quantity, price, amount }) => (
          <React.Fragment key={id}>
            <tbody>
              <tr>
                <td>{description}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <td>{amount}</td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div className=" flex justify-end items-end text-gray-800 text-2xl font-bold">
        <p>Grand total:</p>
        {total.toLocaleString()}
      </div>
    </>
  );
};

export default Table;
