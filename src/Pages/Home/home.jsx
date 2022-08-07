import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";
import Header from "./header";

function Home() {
  return (
    <>
      <Navigation />
      <Content>
        <Header />
      </Content>
      <Sidebar></Sidebar>
    </>
  );
}

export default Home;
