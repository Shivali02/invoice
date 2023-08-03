import React from "react";

const Footer = ({
  name,
  address,
  website,
  email,
  phone,
  bankName,
  bankAccount,
}) => {
  return (
    <>
      <footer className="footer border-t-2 border-gray-300 pt-5">
        <ul className="flex flex-wrap items-center justify-center">
          <li>
            {" "}
            <span className="font-bold "> your name :</span> {name}
          </li>
          <li>
            {" "}
            <span className="font-bold ">your email : </span> {email}
          </li>
          <li>
            {" "}
            <span className="font-bold "> your phone number :</span> {phone}
          </li>
          <li>
            {" "}
            <span className="font-bold "> your Address :</span> {address}
          </li>
          <li>
            {" "}
            <span className="font-bold "> your bank :</span> {bankName}
          </li>
          <li>
            {" "}
            <span className="font-bold ">account holder name : </span> {name}
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
