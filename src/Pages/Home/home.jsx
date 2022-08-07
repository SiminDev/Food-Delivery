import React from "react";
import Navigation from "../navigation";
import Content from "../content";
import Sidebar from "../sidebar";

function Home() {
  return (
    <>
      <Navigation />
      <Content></Content>
      <Sidebar></Sidebar>
    </>
  );
}

export default Home;
