import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";

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
