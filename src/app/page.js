"use client";
//to render the page on client side

import { useState, useRef } from "react";
import React from "react";
import Notes from "./components/Notes";
import Footer from "./components/Footer";
import Table from "./components/Table";
import Header from "./components/Header";
import MainDetails from "./components/MainDetails";
import ClientDetails from "./components/ClientDetails";
import Dates from "./components/Dates";
import TableForm from "./components/TableForm";
import ReactToPrint from "react-to-print";

export default function Home() {
  const [showInvoice, setShowInvoice] = useState(false);

  // diff diff usestate sari details ki value input lene ke lia
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("Not Applicable");
  const [clientName, setClientName] = useState("");
  const [clientAddress, setClientAddress] = useState("");
  const [invoiceNumber, setInvoiceNumber] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [notes, setNotes] = useState("");
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <main className="  m-5 p-5  md:max-w-xl md:max-auto lg:max-w-2xl xl:max-w-4xl rounded shadow bg-white">
          {/* if showInvoice is set to true only then the client can access the Invoice application */}

          {showInvoice ? (
            <>
              <ReactToPrint
                trigger={() => (
                  <button className="  bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-green-500 hover:bg-transparent hover:text-green-500 transition-all duration=300 ml-5 ">
                    Print/Download
                  </button>
                )}
                content={() => componentRef.current}
              />
              <div className="p-5" ref={componentRef}>
                <Header handlePrint={handlePrint} />
                <MainDetails name={name} address={address} />
                <ClientDetails
                  clientName={clientName}
                  clientAddress={clientAddress}
                />
                <Dates
                  invoiceNumber={invoiceNumber}
                  invoiceDate={invoiceDate}
                  dueDate={dueDate}
                />
                <Table
                  description={description}
                  quantity={quantity}
                  price={price}
                  amount={amount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
                <Notes notes={notes} />
                <Footer
                  clientName={clientName}
                  phone={phone}
                  bankName={bankName}
                  bankAccount={bankAccount}
                  clientAddress={clientAddress}
                  website={website}
                  email={email}
                />
              </div>
              <button
                onClick={() => setShowInvoice(false)}
                className=" mt-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration=300 "
              >
                Edit Information
              </button>
            </>
          ) : (
            <>
              {/* yahn sari details jayegi jo jo invoice banane ke lia chahia */}

              <div className="flex flex-col justify-center">
                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="name"> Billing Agent:</label>
                    <input
                      type="text"
                      name="text"
                      id="name"
                      placeholder="XYZ"
                      autoComplete="off"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="address">Billing Agent Code...</label>
                    <input
                      type="number"
                      name="code"
                      id="code"
                      placeholder="..."
                      autoComplete="off"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="email">Recipient&apos;s Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="XYZ@gmail.com"
                      autoComplete="off"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="website"> Website:</label>
                    <input
                      type="url"
                      name="website"
                      id="website"
                      placeholder="https://google.com"
                      autoComplete="off"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="phone">
                      Recipient&apos;s Phone Number:
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      placeholder="91-XXXXX-XXXXX"
                      autoComplete="off"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10">
                  <div className="flex flex-col">
                    <label htmlFor="bankName">
                      Recipient&apos;s bank Name:
                    </label>
                    <input
                      type="text"
                      name="bankName"
                      id="bankName"
                      placeholder="zxy bank"
                      autoComplete="off"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="bankAccount">
                      Recipient&apos;s Account number
                    </label>
                    <input
                      type="text"
                      name="bankAccount"
                      id="bankAccount"
                      placeholder="#########"
                      autoComplete="off"
                      value={bankAccount}
                      onChange={(e) => setBankAccount(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-2 gap-10 md:mt-20">
                  <div className="flex flex-col">
                    <label htmlFor="clientName">Recipient&apos;s name</label>
                    <input
                      type="text"
                      name="clientName"
                      id="clientName"
                      placeholder="mr.z"
                      autoComplete="off"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="clientAddress">
                      Recipient&apos;s address:
                    </label>
                    <input
                      type="text"
                      name="clientAddress"
                      id="clientAddress"
                      placeholder="..."
                      autoComplete="off"
                      value={clientAddress}
                      onChange={(e) => setClientAddress(e.target.value)}
                    />
                  </div>
                </article>

                <article className="md:grid grid-cols-3 gap-10 ">
                  <div className="flex flex-col">
                    <label htmlFor="invoiceNumber"> Invoice number:</label>
                    <input
                      type="number"
                      name="invoiceNumber"
                      id="invoiceNumber"
                      placeholder=" 6644940"
                      autoComplete="off"
                      value={invoiceNumber}
                      onChange={(e) => setInvoiceNumber(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="invoiceDate"> Invoice date:</label>
                    <input
                      type="date"
                      name="invoiceDate"
                      id="invoiceDate"
                      placeholder=" 31-12-23"
                      autoComplete="off"
                      value={invoiceDate}
                      onChange={(e) => setInvoiceDate(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col">
                    <label htmlFor="dueDate"> Due date:</label>
                    <input
                      type="date"
                      name="dueDate"
                      id="dueDate"
                      placeholder=" 31-12-23"
                      autoComplete="off"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                    />
                  </div>
                </article>

                {/* this is our table form */}
                <article>
                  <TableForm
                    description={description}
                    setDescription={setDescription}
                    quantity={quantity}
                    setQuantity={setQuantity}
                    price={price}
                    setPrice={setPrice}
                    amount={amount}
                    setAmount={setAmount}
                    list={list}
                    setList={setList}
                    total={total}
                    setTotal={setTotal}
                  />
                </article>

                <label htmlFor="notes"> Notes if any:</label>
                <textarea
                  name="notes"
                  id="notes"
                  cols="30"
                  rows="10"
                  placeholder="thanks for shopping🙏🙏🙏"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>

                <button
                  onClick={() => setShowInvoice(true)}
                  className="bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration=300 "
                >
                  Preview Invoice
                </button>
              </div>
            </>
          )}
        </main>
      </div>
    </>
  );
}
