import axios from "axios";
import { Reservation } from "../types/ReservationList.types";
import { ResponseForm } from "../types";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { ReservationRow } from "../components";

const ReservationList = () => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  async function getAllReservations() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/reservations`,
      );
      const result: ResponseForm<Reservation[]> = response.data;
      if (result.data && result.isSuccess) {
        setReservations(result.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllReservations();
  }, []);

  return (
    <div className="mx-auto flex min-h-full w-full max-w-7xl flex-col gap-4 px-8 py-16">
      <h2 className="self-center text-center text-4xl">RESERVATIONS</h2>
      <div className="flex justify-between">
        <Link to="/orders">
          <div className="flex items-center">
            <IconContext.Provider value={{ size: "50px" }}>
              <FaAngleLeft />
            </IconContext.Provider>
            <p>Order List</p>
          </div>
        </Link>
        <Link to="/users">
          <div className="flex items-center">
            <p>User List</p>
            <IconContext.Provider value={{ size: "50px" }}>
              <FaAngleRight />
            </IconContext.Provider>
          </div>
        </Link>
      </div>
      <table className="table w-full table-auto rounded-xl border-slate-200 bg-primary text-secondary shadow-full">
        <thead>
          <tr>
            <th className="border-b px-12 py-4 text-left">No</th>
            <th className="border-b px-12 py-4 text-left">Customer</th>
            <th className="border-b px-12 py-4">Party Size</th>
            <th className="border-b px-12 py-4">Date</th>
            <th className="border-b px-12 py-4">Time</th>
            <th className="border-b px-12 py-4 text-right">Status</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((r, key) => (
            <tr
              className="border-b font-gilroyLight hover:-translate-y-0.5 hover:cursor-pointer hover:font-gilroy"
              key={key}
            >
              <td className="px-12 py-2">{key + 1}</td>
              <ReservationRow reservation={r} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
