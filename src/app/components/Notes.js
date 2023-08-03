import React from "react";

const Notes = ({ notes }) => {
  return (
    <>
      <section className="mb-5">
        <p className="lg:w-1/2">{notes}</p>
      </section>
    </>
  );
};

export default Notes;
