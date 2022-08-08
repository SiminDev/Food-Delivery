import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";
import OrderList from "./orderList";

function Invoice() {
  return (
    <>
      <Navigation />
      <Content>
        <OrderList />
      </Content>
      <Sidebar></Sidebar>
    </>
  );
}

export default Invoice;
