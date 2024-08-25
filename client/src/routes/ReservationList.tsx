import { Link } from 'react-router-dom';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';
import { IconContext } from 'react-icons';
import { useEffect } from 'react';
import { ReservationRow } from '../components';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { reservationGetAll } from '../app/reservation/reservationSlice';

const ReservationList = () => {
  const reservations = useAppSelector(state => state.reservation.data);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(reservationGetAll());
  }, []);

  return (
    <div className='mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16'>
      <h2 className='self-center text-center text-4xl'>RESERVATIONS</h2>
      <div className='flex justify-between'>
        <Link to='/orders'>
          <div className='flex items-center'>
            <IconContext.Provider value={{ size: '50px' }}>
              <FaAngleLeft />
            </IconContext.Provider>
            <p>Order List</p>
          </div>
        </Link>
        <Link to='/users'>
          <div className='flex items-center'>
            <p>User List</p>
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
            <th className='border-b px-12 py-4'>Party Size</th>
            <th className='border-b px-12 py-4'>Date</th>
            <th className='border-b px-12 py-4'>Time</th>
            <th className='border-b px-12 py-4 text-right'>Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations &&
            reservations.map((r, key) => (
              <tr
                className='border-b font-gilroyLight hover:-translate-y-0.5 hover:cursor-pointer hover:font-gilroy'
                key={key}
              >
                <td className='px-12 py-2'>{key + 1}</td>
                <ReservationRow reservation={r} />
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
