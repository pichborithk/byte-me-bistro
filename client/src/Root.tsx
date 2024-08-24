import { Outlet } from "react-router-dom";
import { Footer, Navbar, Notification, ScrollToTop } from "./components";
import { useState } from "react";
import { Order } from "./types/OrderList.types";

const Root = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  return (
    <>
      <Navbar />
      <div className="mt-24 min-h-screen text-primary">
        <Outlet context={{ orders, setOrders }} />
      </div>
      <ScrollToTop />
      <Notification />
      <Footer />
    </>
  );
};
export default Root;
