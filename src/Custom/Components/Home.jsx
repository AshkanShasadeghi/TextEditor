import React from "react";
import Check from "../Layout/Option";

const Home = () => {
  return (
    <header>
      <section className="Between">
      {["New", "Image", "Style", "Align", "Color", "Size"].map((record) => (
        <section className={record}>
          <Check Param={record} />
        </section>
      ))}
      </section>
      <section className="Between"></section>
    </header>
  );
};

export default Home;
