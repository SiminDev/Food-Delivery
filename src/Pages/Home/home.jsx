import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";
import Header from "./header";
import Category from "./category";
import Products from "./products";
import DebitCard from "./debitCard";
import OrderSummary from "./orderSummary";

function Home() {
  return (
    <>
      <Navigation />
      <Content>
        <Header />
        <Category />
        <Products />
      </Content>
      <Sidebar>
        <DebitCard />
        <OrderSummary />
      </Sidebar>
    </>
  );
}

export default Home;
