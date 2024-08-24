import { Reservation } from "../types/ReservationList.types";

type Props = {
  reservation: Reservation;
};

const ReservationRow = ({ reservation }: Props) => {
  const date = new Date(reservation.date);

  return (
    <tr className="border-b">
      <td className="px-12 py-2">{reservation.user.username}</td>
      <td className="px-12 py-2 text-center">{reservation.partySize}</td>
      <td className="px-12 py-2 text-center">{date.toLocaleDateString()}</td>
      <td className="px-12 py-2 text-center">{reservation.time}</td>
      <td className="px-12 py-2 text-right">{reservation.status}</td>
    </tr>
  );
};
export default ReservationRow;
