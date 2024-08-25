import { Outlet } from "react-router-dom";
import { Footer, Navbar, Notification, ScrollToTop } from "./components";
import { useEffect, useState } from "react";
import { Order } from "./types/OrderList.types";
import { ResponseForm, User } from "./types";
import axios from "axios";

const Root = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [token, setToken] = useState("");
  const [user, setUser] = useState<User | null>(null);

  async function getUserData(token: string) {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users`,
        { headers: { Authorization: `Bearer ${token}` } },
      );
      const result: ResponseForm<User> = response.data;
      if (result.data && result.isSuccess) {
        console.log(result.data);
        setUser(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const initialToken: string = localStorage.getItem("TOKEN") || "";

    if (initialToken) {
      setToken(initialToken);
    }
  }, []);

  return (
    <>
      <Navbar token={token} setToken={setToken} setUser={setUser} />
      <div className="mt-24 min-h-screen text-primary">
        <Outlet
          context={{
            orders,
            setOrders,
            token,
            setToken,
            getUserData,
            user,
            setUser,
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
