import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";
import Header from "./header";
import Category from "./category";
import Products from "./products";

function Home() {
  return (
    <>
      <Navigation />
      <Content>
        <Header />
        <Category />
        <Products />
      </Content>
      <Sidebar></Sidebar>
    </>
  );
}

export default Home;
