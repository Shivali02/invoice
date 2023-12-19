import React from "react";

const MainDetails = ({ name, address }) => {
  return (
    <>
      <section className=" flex flex-col justify-end items-end">
        <h2 className="font-bold mb-1  ">Billing Agent:</h2>
        <h2 className="font-bold mb-1  uppercase">{name}</h2>
        <p> code: {address}</p>
      </section>
    </>
  );
};

export default MainDetails;
