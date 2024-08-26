import { useEffect } from 'react';
import { OrderRow } from '../components';
import { FaAngleRight } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { orderGetAll } from '../app/order/orderSlice';

const OrderList = () => {
  const orders = useAppSelector(state => state.order.data);
  const token = useAppSelector(state => state.auth.token);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (token) {
      dispatch(orderGetAll(token));
    } else {
      navigate('/');
    }
  }, []);

  function handleOrderClick(id: number) {
    navigate(`/orders/${id}`);
  }

  return (
    <div className='mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16'>
      <h2 className='self-center text-center text-4xl'>ORDERS</h2>
      <div className='flex justify-end'>
        <Link to='/reservations'>
          <div className='flex items-center'>
            <p>Reservation List</p>
            <IconContext.Provider value={{ size: '50px' }}>
              <FaAngleRight />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
      <table className='table w-full table-auto rounded-xl border-slate-200 bg-primary text-secondary shadow-full'>
        <thead>
          <tr>
            <th className='border-b px-12 py-4 text-left'>No</th>
            <th className='border-b px-12 py-4 text-left'>Customer</th>
            <th className='border-b px-12 py-4'>Date</th>
            <th className='border-b px-12 py-4'>Time</th>
            <th className='border-b px-12 py-4 text-right'>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders &&
            orders.map((order, key) => (
              <tr
                className='border-b font-gilroyLight hover:-translate-y-0.5 hover:cursor-pointer hover:font-gilroy'
                onClick={() => handleOrderClick(order.id)}
                key={key}
              >
                <td className='px-12 py-2'>{key + 1}</td>
                <OrderRow order={order} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
