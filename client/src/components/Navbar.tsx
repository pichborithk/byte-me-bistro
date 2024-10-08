import { Link } from 'react-router-dom';
import logo from '../assets/images/ByteMeBistro-1.png';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { tokenClear } from '../app/auth/authSlice';
import { userClear } from '../app/user/userSlice';
import { useEffect } from 'react';

const Navbar = () => {
  const token = useAppSelector(state => state.auth.token);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!token) {
      dispatch(userClear());
    }
  }, [token]);

  function handleSignOut(): void {
    dispatch(tokenClear());
  }

  return (
    <header className='absolute top-0 w-full shadow-full transition-colors duration-500 ease-in-out dark:shadow-slate-800'>
      <section className='mx-auto flex max-w-7xl items-center justify-between px-8 py-2'>
        <Link to='/'>
          <img src={logo} alt='logo web site' className='max-h-20' />
        </Link>
        <nav className='relative flex items-center gap-6 font-jura text-2xl font-bold'>
          <Link
            to='/menu'
            className='rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary'
          >
            Menu
          </Link>
          <Link
            to='/reservations/create'
            className='rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary'
          >
            Book A Table
          </Link>
          {token && (
            <>
              <Link
                to='/orders'
                className='rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary'
              >
                Dashboard
              </Link>
              <Link
                to='/'
                onClick={handleSignOut}
                className='rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary'
              >
                Sign Out
              </Link>
            </>
          )}
          {!token && (
            <>
              <Link
                to='/login'
                className='rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary'
              >
                Sign In
              </Link>
              <Link
                to='/register'
                className='rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary'
              >
                Sign Up
              </Link>
            </>
          )}
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
