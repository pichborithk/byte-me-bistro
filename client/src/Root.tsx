import { Outlet } from 'react-router-dom';
import { Notification, ScrollToTop } from './components';

const Root = () => {
  return (
    <>
      <div className='mx-auto mb-8 flex min-h-screen max-w-7xl flex-col items-center gap-4'>
        <Outlet />
      </div>
      <ScrollToTop />
      <Notification />
    </>
  );
};
export default Root;
