import { Order } from "../types/OrderList.types";

type Props = {
  order: Order;
};

const OrderRow = ({ order }: Props) => {
  const date = new Date(order.createdAt);

  return (
    <>
      <td className="px-12 py-2">{order.user.username}</td>
      <td className="px-12 py-2 text-center">{date.toLocaleDateString()}</td>
      <td className="px-12 py-2 text-center">
        {date.toLocaleTimeString("en-Us", { hour12: false })}
      </td>
      <td className="px-12 py-2 text-right">{order.status}</td>
    </>
  );
};
export default OrderRow;
