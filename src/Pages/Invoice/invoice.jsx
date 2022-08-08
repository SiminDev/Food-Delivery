import React from "react";
import Navigation from "../../Components/navigation";
import Content from "../../Components/content";
import Sidebar from "../../Components/sidebar";
import OrderList from "./orderList";
import Payment from "./payment";

function Invoice() {
  return (
    <>
      <Navigation />
      <Content>
        <OrderList />
      </Content>
      <Sidebar>
        <Payment />
      </Sidebar>
    </>
  );
}

export default Invoice;
