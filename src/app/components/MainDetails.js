import React from "react";

const MainDetails = ({ name, address }) => {
  return (
    <>
      <section className=" flex flex-col justify-end items-end">
        <h2 className="font-bold md:text-4xl text-xl uppercase"> {name}</h2>
        <p>{address}</p>
      </section>
    </>
  );
};

export default MainDetails;
