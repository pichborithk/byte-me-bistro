import { Link } from "react-router-dom";
import logo from "../assets/images/ByteMeBistro-1.png";
import { Dispatch, SetStateAction } from "react";
import { User } from "../types";

type Props = {
  token: string;
  setToken: Dispatch<SetStateAction<string>>;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const Navbar = ({ token, setToken, setUser }: Props) => {
  function handleSignOut(): void {
    setToken("");
    localStorage.clear();
    setUser(null);
  }
  return (
    <header className="absolute top-0 w-full shadow-full transition-colors duration-500 ease-in-out dark:shadow-slate-800">
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
            to="/orders"
            className="rounded-lg border-2 border-transparent px-2 py-2 hover:border-primary hover:bg-primary hover:text-secondary"
          >
            Dashboard
          </Link>
          {token ? (
            <>
              <Link
                to="/"
                onClick={handleSignOut}
                className="rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary"
              >
                Sign Out
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                className="rounded-full border-2 border-primary px-4 py-2 hover:bg-primary hover:uppercase hover:text-secondary"
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
