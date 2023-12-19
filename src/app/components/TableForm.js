// "use client";
import React from "react";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const TableForm = ({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
}) => {
  // The primary purpose of using UUIDs is to ensure that each identifier is globally unique, even when generated in different systems or at different times.

  const toastOptions = {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description || !quantity || !price) {
      // alert("please fill in all the details");
      toast.error("please fill in all the details", toastOptions);
    } else {
      const newItems = {
        id: uuidv4(),
        description: description,
        quantity: quantity,
        price: price,
        amount: amount,
      };
      setDescription("");
      setQuantity("");
      setAmount("");
      setPrice("");
      setList([...list, newItems]);
      setIsEditing(false);
      // console.log(list);
    }
  };

  //to calculate the amount of each individual item
  useEffect(() => {
    const calAmount = (amount) => {
      setAmount(quantity * price);
      console.log(amount);
    };
    calAmount(amount);
  }, [amount, price, quantity, setAmount]);

  //calculate total bill amount
  useEffect(() => {
    let row = document.querySelectorAll(".amount");
    let sum = 0;
    for (let i = 0; i < row.length; i++) {
      if (row[i].className === "amount") {
        sum += isNaN(row[i].innerHTML) ? 0 : parseInt(row[i].innerHTML);
        setTotal(sum);
      }
    }
  });

  // edit button

  const [isEditing, setIsEditing] = useState(false);

  const editRow = (id) => {
    deleteRow(id);

    const editingRow = list.find((row) => row.id === id);

    setIsEditing(true);
    setDescription(editingRow.description);
    setQuantity(editingRow.quantity);
    setPrice(editingRow.price);
    setAmount(editingRow.amount);
  };

  //deletebutton
  //isse comp list delete h rahi hai isse ek lg se funtion bana dege delte all ka
  // const deleteRow = (id) => {
  //   setList(
  //     list.filter((row) => {
  //       row.id !== id;
  //     })
  //   );
  // };

  const deleteRow = (id) => setList(list.filter((row) => row.id !== id));

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col md:mt-10">
          <label htmlFor="description">Item Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Item Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="md:grid grid-cols-3 gap-10">
          <div className="flex flex-col">
            <label htmlFor="quantity">Quantity</label>
            <input
              type="number"
              name="quantity"
              id="quantity"
              placeholder="0"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Item price</label>
            <input
              type="number"
              name="price"
              id="price"
              placeholder="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="amount">Item amount</label>
            <p>{amount}</p>
          </div>
        </div>

        <button
          type="submit"
          className=" mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration=300 "
        >
          {isEditing ? "Editing row item" : "Add Row Item"}
          {/* {button} */}
        </button>
      </form>

      {/* table items  */}

      <table width="100%" className="mb-10">
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
                <td className="amount">{amount}</td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <MdDelete className="text-red-500 font-bold text-2xl" />{" "}
                  </button>
                </td>
                <td>
                  <button onClick={() => editRow(id)}>
                    <FiEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>
      <div className="flex justify-end items-end text-gray-800 text-3xl font-bold">
        <p>Grand Total:</p>
        {total.toLocaleString()}
      </div>
      <ToastContainer />
    </>
  );
};

export default TableForm;
