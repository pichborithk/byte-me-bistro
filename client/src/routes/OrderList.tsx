import { useEffect, useState } from "react";
import { ResponseForm } from "../types";
import { OrderRow } from "../components";
import axios from "axios";
import { Order } from "../types/OrderList.types";
import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [orders, setOrders] = useState<Order[]>([]);

  async function getAllOrders() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/orders`,
      );
      const result: ResponseForm<Order[]> = response.data;
      if (result.data && result.isSuccess) {
        setOrders(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <h2 className="self-center text-center text-4xl">ORDERS</h2>
      <div className="flex justify-end">
        <Link to="/dashboard/reservations">
          <div className="flex items-center">
            <p>Reservation List</p>
            <IconContext.Provider value={{ size: "50px" }}>
              <FaAngleRight />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
      <table className="table w-full table-auto rounded-xl border-slate-200 bg-primary text-secondary shadow-full">
        <thead>
          <tr>
            <th className="border-b px-12 py-4 text-left">Customer</th>
            <th className="border-b px-12 py-4">Date</th>
            <th className="border-b px-12 py-4">Time</th>
            <th className="border-b px-12 py-4 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, key) => (
            <OrderRow key={key} order={order} />
          ))}
        </tbody>
      </table>
    </>
  );
};
export default OrderList;
