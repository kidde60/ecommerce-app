import React from "react";
import Header from "../header/Header";
import Menu from "../menu/Menu";
const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <Menu data={data} />
    </div>
  );
};

export default Home;
