import { Link } from "react-router-dom";
import logo from "../assets/images/ByteMeBistro-1.png";

const Navbar = () => {
  return (
    <header className="absolute top-0 w-full shadow-md transition-colors duration-500 ease-in-out dark:shadow-slate-800">
      <section className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">
        <Link to="/">
          <img src={logo} alt="logo web site" className="max-h-20" />
        </Link>
        <nav className="relative flex items-center gap-6 font-jura text-2xl font-bold">
          <Link
            to="/menu"
            className="rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary"
          >
            Menu
          </Link>
          <Link
            to="/dashboard"
            className="rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary"
          >
            Dashboard
          </Link>
          {/* {token ? (
            <>
              <Link
                to='/profile'
                className='rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary dark:hover:border-secondary'
              >
                PROFILE
              </Link>
              <p
                onClick={event => {
                  event.stopPropagation();
                  setOpenUser(!openUser);
                }}
                className='flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-primary font-gilroy text-3xl text-secondary transition-colors duration-500 ease-in-out dark:bg-secondary dark:text-primary'
              >
                {userData.username.slice(0, 1).toUpperCase()}
              </p>
              <Link
                to='/'
                onClick={handleSignOut}
                className={`absolute -bottom-[41px] -right-16 rounded-lg bg-primary px-2 py-2 text-xl text-secondary transition-opacity duration-1000 ease-in-out dark:bg-secondary dark:text-primary  ${
                  openUser
                    ? 'pointer-events-auto'
                    : 'pointer-events-none opacity-0'
                }`}
              >
                SIGN OUT
              </Link>
            </>
          ) : (
            <>
              <Link
                to='/signin'
                className='rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary dark:hover:border-secondary'
              >
                SIGN IN
              </Link>
              <Link
                to='/register'
                className='rounded-lg border-2  bg-primary px-2 py-2 text-white transition-colors duration-500 ease-in-out hover:border-primary dark:border-black dark:bg-secondary dark:text-primary dark:hover:border-secondary'
              >
                SIGN UP
              </Link>
            </>
          )} */}
        </nav>
      </section>
    </header>
  );
};

export default Navbar;
