import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Notification, ScrollToTop } from './components';
import { useEffect, useState } from 'react';
import { Order } from './types/OrderList.types';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { userGet } from './app/user/userSlice';

const Root = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const token = useAppSelector(state => state.auth.token);
  const user = useAppSelector(state => state.user.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (token) {
      dispatch(userGet(token));
    }
  }, [token]);

  return (
    <>
      <Navbar />
      <div className='mt-24 min-h-screen text-primary'>
        <Outlet
          context={{
            orders,
            setOrders,
            token,
            user,
          }}
        />
      </div>
      <ScrollToTop />
      <Notification />
      <Footer />
    </>
  );
};
export default Root;
