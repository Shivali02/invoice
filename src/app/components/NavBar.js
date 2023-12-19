import React from "react";
import Image from "next/image";

const NavBar = () => {
  return (
    <>
      <div className=" flex flex  mb-8 p-2 sticky top-0 bg-gradient-to-l from-cyan-500">
        <div>
          <Image src="/logo.png" alt="INVOICER" width={70} height={13} />
        </div>
        {/* <div className="rounded-2xl ml-20 p-5 bg-cyan-300 shadow-md text-red"> */}
        <div className=" rounded-2xl fixed top-3 left-70 right-40  p-2  bg-cyan-300 shadow-lg shadow-black ">
          <p className="font-bold text-center ">
            Streamline Your Invoicing with Invoicer
          </p>
        </div>
      </div>
    </>
  );
};

export default NavBar;
