import { Outlet } from 'react-router-dom';
import { Footer, Navbar, Notification, ScrollToTop } from './components';
import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from './app/hooks';
import { userGet } from './app/user/userSlice';

const Root = () => {
  const token = useAppSelector(state => state.auth.token);
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
        <Outlet />
      </div>
      <ScrollToTop />
      <Notification />
      <Footer />
    </>
  );
};
export default Root;
