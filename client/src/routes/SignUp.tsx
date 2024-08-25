import logo from "../assets/images/ByteMeBistro-2.png";
import { useNavigate, useOutletContext } from "react-router-dom";
import { RootContext } from "../types/Root.types";
import axios from "axios";
import { Auth, ResponseForm } from "../types";
import { FormEvent, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const { token, setToken, getUserData } = useOutletContext<RootContext>();
  const navigate = useNavigate();
  const usernameInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (token) {
      navigate("/");
      return;
    }
  }, [token]);

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const username = usernameInput.current!.value;
    const password = passwordInput.current!.value;

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        { username, password },
      );

      const result: ResponseForm<Auth> = response.data;
      if (result.isSuccess && result.data) {
        setToken(result.data.token);
        localStorage.setItem("TOKEN", result.data.token);
        getUserData(result.data.token);
        toast.success("Registration success");
      }
    } catch (error) {
      console.log(error);
    } finally {
      usernameInput.current!.value = "";
      passwordInput.current!.value = "";
    }
  }

  return (
    <div className="flex min-h-screen items-start justify-center py-40">
      <div className="flex w-1/3 flex-col items-stretch justify-between gap-6 rounded-xl bg-secondary p-12 text-lg shadow-full">
        <div className="mx-auto flex flex-col items-center justify-center gap-4 pb-4">
          <img src={logo} style={{ width: "160px" }} alt="Logo" />
          <h1 className="text-4xl">Create your account</h1>
        </div>
        <form className="flex flex-col" onSubmit={handleRegister}>
          <div className="pb-2">
            <label htmlFor="username" className="mb-2 block">
              Username
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </span>
              <input
                type="text"
                name="username"
                id="username"
                aria-label="Username"
                className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-12 text-gray-600 ring-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
                placeholder="demo"
                autoComplete="off"
                ref={usernameInput}
              />
            </div>
          </div>
          <div className="pb-6">
            <label htmlFor="password" className="mb-2 block">
              Password
            </label>
            <div className="relative text-gray-400">
              <span className="absolute inset-y-0 left-0 flex items-center p-1 pl-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-lock"
                >
                  <rect width="18" height="11" x="3" y="11" rx="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </span>
              <input
                type="password"
                name="password"
                id="password"
                aria-label="Password"
                placeholder="••••••••••"
                className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-12 text-gray-600 ring-transparent focus:outline-none focus:ring-1 focus:ring-gray-400"
                autoComplete="new-password"
                ref={passwordInput}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="focus:ring-primary-300 rounded-lg border-2 border-primary bg-primary px-5 py-2.5 text-center font-medium text-secondary hover:bg-secondary hover:text-primary focus:outline-none focus:ring-4"
            >
              Register
            </button>
          </div>
          <div className="mt-4 text-center text-base font-light text-gray-500">
            Already have an account?{" "}
            <a
              href="/register"
              className="font-medium text-emerald-600 hover:underline"
            >
              Sign In
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
