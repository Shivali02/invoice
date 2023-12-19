import React from "react";

const Footer = ({
  clientName,
  clientAddress,
  website,
  email,
  phone,
  bankName,
  bankAccount,
}) => {
  return (
    <>
      <footer className="footer  border-t-2 border-gray-300 pt-5">
        <ul className="grid grid-cols-3  items-center justify-center">
          {/* <li>
            {" "}
            <span className="font-bold "> your name :</span> {name}
          </li> */}
          <li>
            {" "}
            <span className="font-bold ">Recipient&apos;s email : </span>{" "}
            {email}
          </li>
          <li>
            {" "}
            <span className="font-bold ">
              {" "}
              Recipient&apos;s phone number :
            </span>{" "}
            {phone}
          </li>
          <li>
            {" "}
            <span className="font-bold "> Recipient&apos;s Address :</span>{" "}
            {clientAddress}
          </li>
          <li>
            {" "}
            <span className="font-bold "> Recipient&apos;s bank :</span>{" "}
            {bankName}
          </li>
          <li>
            {" "}
            <span className="font-bold ">account holder name : </span>
            {clientName}
          </li>
          <li>
            {" "}
            <span className="font-bold ">account number : </span> {bankAccount}
          </li>
          <li>
            {" "}
            <span className="font-bold "> website : </span>{" "}
            <a href={website} target="_blank" rel="noopenner noreferrer ">
              {" "}
              {website}
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
