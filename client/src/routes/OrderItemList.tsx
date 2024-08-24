import {
  Link,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";

import { RootContext } from "../types/Root.types";
import axios from "axios";
import { OrderItem } from "../types/OrderItemList.types";
import { ResponseForm } from "../types";
import { useEffect, useState } from "react";
import { OrderItemRow } from "../components";
import { FaAngleLeft } from "react-icons/fa6";
import { IconContext } from "react-icons";

const OrderItemList = () => {
  const { orderId } = useParams();
  const { orders } = useOutletContext<RootContext>();
  const order = orders.find((o) => o.id === parseInt(orderId!));
  const navigate = useNavigate();
  const [items, setItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (order) {
      getOrderWithItems();
    } else {
      navigate("/orders");
    }
  }, []);

  if (!order) return;

  const date = new Date(order.createdAt);

  async function getOrderWithItems() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/orders/${orderId}`,
      );
      const result: ResponseForm<OrderItem[]> = response.data;
      if (result.data && result.isSuccess) {
        setItems(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16">
      <h2 className="self-center text-center text-4xl">
        LIST OF ITEM IN ORDER
      </h2>

      <div className="flex items-center justify-between">
        <Link to="/orders">
          <div className="flex items-center">
            <IconContext.Provider value={{ size: "50px" }}>
              <FaAngleLeft />
            </IconContext.Provider>
            <p>Order List</p>
          </div>
        </Link>
        <div className="flex flex-col items-end justify-end">
          <p>By {order.user.username}</p>
          <p>
            On{" "}
            {date.toLocaleDateString("en-Us", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <p>At {date.toLocaleTimeString("en-Us", { hour12: false })}</p>
          <p>Status: {order.status}</p>
        </div>
      </div>
      <table className="table w-full table-auto rounded-xl border-slate-200 bg-primary text-secondary shadow-full">
        <thead>
          <tr>
            <th className="border-b px-12 py-4 text-left">No</th>
            <th className="border-b px-12 py-4 text-left">Name</th>
            <th className="border-b px-12 py-4">Category</th>
            <th className="border-b px-12 py-4">Price</th>
            <th className="border-b px-12 py-4 text-right">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, key) => (
            <tr key={key} className="font-gilroyLight">
              <td className="px-12 py-2">{key + 1}</td>
              <OrderItemRow item={item.item} quantity={item.quantity} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderItemList;
