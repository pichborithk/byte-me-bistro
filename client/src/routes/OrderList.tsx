import { useEffect } from "react";
import { ResponseForm } from "../types";
import { OrderRow } from "../components";
import axios from "axios";
import { Order } from "../types/OrderList.types";
import { FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { RootContext } from "../types/Root.types";

const OrderList = () => {
  const { orders, setOrders } = useOutletContext<RootContext>();
  const navigate = useNavigate();

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

  function handleOrderClick(id: number) {
    navigate(`/orders/${id}`);
  }

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16">
      <h2 className="self-center text-center text-4xl">ORDERS</h2>
      <div className="flex justify-end">
        <Link to="/reservations">
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
            <th className="border-b px-12 py-4 text-left">No</th>
            <th className="border-b px-12 py-4 text-left">Customer</th>
            <th className="border-b px-12 py-4">Date</th>
            <th className="border-b px-12 py-4">Time</th>
            <th className="border-b px-12 py-4 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, key) => (
            <tr
              className="border-b font-gilroyLight hover:-translate-y-0.5 hover:cursor-pointer hover:font-gilroy"
              onClick={() => handleOrderClick(order.id)}
              key={key}
            >
              <td className="px-12 py-2">{key + 1}</td>
              <OrderRow order={order} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
